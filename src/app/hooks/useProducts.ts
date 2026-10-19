import { useState, useEffect } from 'react';
import { fetchAllProducts } from '../data/shopify';
import type { ShopifyProduct } from '../data/shopify';
import type { Product } from '../data/products';

// ─── MODULE-LEVEL CACHE ───────────────────────────────────────────────────────
// Products are fetched once and cached for the lifetime of the app session
let cachedProducts: Product[] | null = null;
let fetchPromise: Promise<Product[]> | null = null;

// ─── CATEGORY MAPPING ─────────────────────────────────────────────────────────

function mapCategory(productType: string): string {
  const t = productType.toLowerCase();
  if (t.includes('headphone') || t.includes('audio') || t.includes('earphone') || t.includes('headset') || t.includes('speaker') || t.includes('earbud')) return 'Audio';
  if (t.includes('camera') || t.includes('gimbal') || t.includes('stabilizer') || t.includes('tripod') || t.includes('lens')) return 'Cameras & Photography';
  if (t.includes('gaming') || t.includes('controller') || t.includes('game') || t.includes('console')) return 'Gaming';
  if (t.includes('watch') || t.includes('wearable') || t.includes('fitness') || t.includes('tracker')) return 'Smart Wearables';
  if (t.includes('smart home') || t.includes('switch') || t.includes('hub') || t.includes('sensor')) return 'Smart Home';
  if (t.includes('power') || t.includes('battery') || t.includes('solar') || t.includes('charger')) return 'Power & Outdoor';
  if (t.includes('travel') || t.includes('carry') || t.includes('bag') || t.includes('mount') || t.includes('case')) return 'Travel & Carry';
  if (t.includes('monitor') || t.includes('display') || t.includes('screen')) return 'Monitors & Displays';
  if (t.includes('mobile') || t.includes('phone') || t.includes('iphone') || t.includes('android')) return 'Mobile & Accessories';
  return 'Smart Life';
}

function mapNavCategory(vendor: string, productType: string): string {
  const v = vendor.toLowerCase();
  const t = productType.toLowerCase();
  if (t.includes('gaming') || t.includes('controller') || v.includes('turtle beach') || v.includes('roccat') || v.includes('skullcandy') && t.includes('gaming')) return 'Gaming';
  if (t.includes('audio') || t.includes('headphone') || t.includes('earphone') || t.includes('speaker') || t.includes('earbud') || v.includes('sennheiser') || v.includes('skullcandy')) return 'Mobile Audio';
  if (t.includes('camera') || t.includes('gimbal') || t.includes('stabilizer') || v.includes('hohem') || v.includes('insta360') || v.includes('obsbot') || v.includes('kandao')) return 'Mobile Creator';
  if (t.includes('watch') || t.includes('fitness') || t.includes('wellness') || v.includes('kospet')) return 'Wellness';
  if (t.includes('travel') || t.includes('carry') || t.includes('mount') || v.includes('peak design') || v.includes('sp connect')) return 'Travel & Carry';
  if (t.includes('desk') || t.includes('monitor') || t.includes('keyboard') || v.includes('arzopa')) return 'Desk Setup';
  if (v.includes('switchbot') || t.includes('smart home') || t.includes('smart life')) return 'Smart Life';
  return 'Smart Life';
}

// ─── MAPPER ───────────────────────────────────────────────────────────────────

export function mapShopifyProduct(p: ShopifyProduct): Product {
  const firstVariant = p.variants.edges[0]?.node;
  const comparePrice = firstVariant?.compareAtPrice
    ? parseFloat(firstVariant.compareAtPrice.amount)
    : null;
  // In stock if ANY variant is purchasable — a product with some sold-out
  // colors/sizes but at least one available option shouldn't show as fully
  // sold out.
  const availableForSale = p.variants.edges.some(e => e.node.availableForSale);

  return {
    handle: p.handle,
    title: p.title,
    vendor: p.vendor,
    type: p.productType,
    category: mapCategory(p.productType),
    navCategory: mapNavCategory(p.vendor, p.productType),
    price: parseFloat(firstVariant?.price.amount ?? '0'),
    comparePrice,
    images: p.images.edges.map(e => e.node.url),
    bodyHtml: p.descriptionHtml,
    availableForSale,
  };
}

// ─── HOOK ─────────────────────────────────────────────────────────────────────
// Refresh Shopify data when the tab becomes active and every 2 minutes while
// open. All mounted components share the same request, avoiding duplicate calls.
const REFRESH_INTERVAL_MS = 2 * 60 * 1000;
const listeners = new Set<(items: Product[]) => void>();

function loadProducts(): Promise<Product[]> {
  if (!fetchPromise) {
    fetchPromise = fetchAllProducts()
      .then(shopifyProducts => shopifyProducts.map(mapShopifyProduct).filter(p => p.price > 0))
      .then(mapped => {
        cachedProducts = mapped;
        listeners.forEach(listener => listener(mapped));
        return mapped;
      })
      .finally(() => { fetchPromise = null; });
  }
  return fetchPromise;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>(cachedProducts ?? []);
  const [loading, setLoading] = useState(cachedProducts === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const onUpdate = (items: Product[]) => { if (mounted) { setProducts(items); setLoading(false); setError(null); } };
    listeners.add(onUpdate);
    const refresh = () => {
      loadProducts().catch(err => {
        console.error('Failed to fetch Shopify products:', err);
        if (mounted) { setError('Failed to load products'); setLoading(false); }
      });
    };
    const onFocus = () => { if (document.visibilityState === 'visible') refresh(); };
    refresh();
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onFocus);
    const interval = window.setInterval(() => {
      if (document.visibilityState === 'visible') refresh();
    }, REFRESH_INTERVAL_MS);
    return () => {
      mounted = false;
      listeners.delete(onUpdate);
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onFocus);
      window.clearInterval(interval);
    };
  }, []);

  return { products, loading, error };
}
