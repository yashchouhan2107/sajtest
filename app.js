const DEFAULT_PRODUCTS = [
  {
    id: 'kido-mix',
    name: 'KidoMix',
    subtitle: 'Kids Special Superfood',
    category: 'Mixes',
    bestseller: true,
    description: 'Wholesome blend of almonds, cashews, dates, figs, seeds and raisins crafted specially for growing kids.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/kido_mix_master.jpg',
    weightImages: {
      '7 Days': './images/kido_mix_7.jpg',
      '15 Days': './images/kido_mix_15.jpg',
      '30 Days': './images/kido_mix.jpg'
    }
  },
  {
    id: 'berry-mix',
    name: 'BerryMix',
    subtitle: 'Antioxidant Powerhouse',
    category: 'Mixes',
    bestseller: true,
    description: 'Rich blend of cranberries, blueberries, roasted nuts, pumpkin & sunflower seeds.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/berry_mix_master.jpg',
    weightImages: {
      '7 Days': './images/berry_mix_7.jpg',
      '15 Days': './images/berry_mix_15.jpg',
      '30 Days': './images/berry_mix.jpg'
    }
  },
  {
    id: 'daily-dose',
    name: 'Daily Dose',
    subtitle: 'Everyday Vitality Mix',
    category: 'Mixes',
    bestseller: false,
    description: 'Balanced daily mix of almonds, cashews, walnuts, figs, flax seeds and raisins.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/daily_dose_master.jpg',
    weightImages: {
      '7 Days': './images/daily_dose_7.jpg',
      '15 Days': './images/daily_dose_15.jpg',
      '30 Days': './images/daily_dose.jpg'
    }
  },
  {
    id: 'slim-bites',
    name: 'SlimBites',
    subtitle: 'Fitness & Fiber Crunch',
    category: 'Mixes',
    bestseller: false,
    description: 'Low-calorie high-fiber blend of seeds, walnuts, almonds and cranberries for healthy snacking.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/slim_bites_master.jpg',
    weightImages: {
      '7 Days': './images/slim_bites_7.jpg',
      '15 Days': './images/slim_bites_15.jpg',
      '30 Days': './images/slim_bites.jpg'
    }
  },
  {
    id: 'nutri-glow',
    name: 'NutriGlow',
    subtitle: 'Radiance & Wellness Mix',
    category: 'Mixes',
    bestseller: false,
    description: 'Gourmet blend of pistachios, figs, almonds, cashews, and berries for natural skin radiance.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/nutri_glow_master.jpg',
    weightImages: {
      '7 Days': './images/nutri_glow_7.jpg',
      '15 Days': './images/nutri_glow_15.jpg',
      '30 Days': './images/nutri_glow.jpg'
    }
  },
  {
    id: 'vitamix',
    name: 'Vitamix',
    subtitle: 'Multi-Vitamin & Immune Booster',
    category: 'Mixes',
    bestseller: true,
    description: 'Essential multi-vitamin blend of almonds, cashews, walnuts, figs, pumpkin & sunflower seeds.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/vitamix_master.jpg',
    weightImages: {
      '7 Days': './images/vitamix_7.jpg',
      '15 Days': './images/vitamix_15.jpg',
      '30 Days': './images/vitamix.jpg'
    }
  },
  {
    id: 'gainora',
    name: 'Gainora',
    subtitle: 'High-Energy Mass & Vitality Mix',
    category: 'Mixes',
    bestseller: true,
    description: 'Calorie-rich superfood blend of almonds, cashews, walnuts, dates, figs, pumpkin seeds and golden raisins for natural energy.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/gainora_master.jpg',
    weightImages: {
      '7 Days': './images/gainora_7.jpg',
      '15 Days': './images/gainora_15.jpg',
      '30 Days': './images/gainora.jpg'
    }
  },
  {
    id: 'mothers-bloom',
    name: "Mother's Bloom",
    subtitle: 'Nourishing Lactation & Wellness Mix',
    category: 'Mixes',
    bestseller: true,
    description: 'Gentle, wholesome blend of almonds, cashews, dates, figs, and pumpkin seeds crafted for maternal strength and nourishment.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/mothers_bloom_master.jpg',
    weightImages: {
      '7 Days': './images/mothers_bloom_7.jpg',
      '15 Days': './images/mothers_bloom_15.jpg',
      '30 Days': './images/mothers_bloom.jpg'
    }
  },
  {
    id: 'overnight-dissolve',
    name: 'Overnight Dissolve',
    subtitle: 'Oats, Chia & Berry Breakfast Bowl',
    category: 'Mixes',
    bestseller: false,
    description: 'Instant nutrient-dense breakfast blend of chia seeds, rolled oats, almonds, dried berries, and banana crunch.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/overnight_dissolve_master.jpg',
    weightImages: {
      '7 Days': './images/overnight_dissolve_7.jpg',
      '15 Days': './images/overnight_dissolve_15.jpg',
      '30 Days': './images/overnight_dissolve.jpg'
    }
  },
  {
    id: 'nutri-care',
    name: 'NutriCare',
    subtitle: 'Holistic Vitality & Daily Wellness Mix',
    category: 'Mixes',
    bestseller: true,
    description: 'Gourmet daily wellness mix of almonds, walnuts, pistachios, pumpkin seeds, and flax seeds for heart and immunity support.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/nutri_care_master.jpg',
    weightImages: {
      '7 Days': './images/nutri_care_7.jpg',
      '15 Days': './images/nutri_care_15.jpg',
      '30 Days': './images/nutri_care.jpg'
    }
  },
  {
    id: 'nutri5',
    name: 'Nutri5',
    subtitle: '5 Super-Nut & 5 Super-Seed Blend',
    category: 'Mixes',
    bestseller: true,
    description: 'Ultimate power blend of 5 premium nuts and 5 super seeds rich in omega-3, protein, magnesium, and healthy minerals.',
    prices: { '7 Days': 499, '15 Days': 1049, '30 Days': 2070 },
    defaultWeight: '7 Days',
    image: './images/nutri5_master.jpg',
    weightImages: {
      '7 Days': './images/nutri5_7.jpg',
      '15 Days': './images/nutri5_15.jpg',
      '30 Days': './images/nutri5.jpg'
    }
  }
];

// ==========================================
// Hardened Cryptographic Passcode Security (Default SHA-256 corresponds to '1234')
// ==========================================
const DEFAULT_ADMIN_HASH = '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4';

async function computeHash(text) {
  if (window.crypto && window.crypto.subtle) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
  }
  let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
  for (let i = 0, ch; i < text.length; i++) {
    ch = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
}

// Migrate any legacy plaintext PIN into secure hash and clean storage
if (localStorage.getItem('saj_admin_pin')) {
  computeHash(localStorage.getItem('saj_admin_pin')).then(h => {
    localStorage.setItem('saj_admin_hash', h);
    localStorage.removeItem('saj_admin_pin');
  });
}

let adminActivityLogs = JSON.parse(localStorage.getItem('saj_admin_logs') || '[]');

// ==========================================
// Supabase Cloud Database Integration & Real-time Sync
// ==========================================
const SUPABASE_URL = 'https://vczfwqcsbzrmmbzmntnh.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjemZ3cWNzYnpybW1iem1udG5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4NjY1MTMsImV4cCI6MjEwNzQ0MjUxM30.e1cA2sa0cVQkjkdsGVLku_XurPz5NBN_A91EwlhW2zw';
let supabaseClient = null;

if (typeof window !== 'undefined' && window.supabase) {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (err) {
    console.warn('Supabase client initialization warning:', err);
  }
}

function dbRowToProduct(row) {
  const dp = DEFAULT_PRODUCTS.find(x => x.id === row.id);
  return {
    id: row.id,
    name: row.name,
    subtitle: row.subtitle || '',
    category: row.category,
    bestseller: !!row.bestseller,
    description: row.description || '',
    prices: typeof row.prices === 'string' ? JSON.parse(row.prices) : (row.prices || {}),
    defaultWeight: row.default_weight || '7 Days',
    image: (dp && dp.image) ? dp.image : (row.image || './images/kido_mix_master.jpg'),
    weightImages: (dp && dp.weightImages) ? dp.weightImages : (row.weight_images ? (typeof row.weight_images === 'string' ? JSON.parse(row.weight_images) : row.weight_images) : undefined),
    inStock: row.in_stock !== false
  };
}

function productToDbRow(p) {
  return {
    id: p.id,
    name: p.name,
    subtitle: p.subtitle || '',
    category: p.category,
    bestseller: !!p.bestseller,
    description: p.description || '',
    prices: p.prices,
    default_weight: p.defaultWeight || '7 Days',
    image: p.image || './images/kido_mix_master.jpg',
    in_stock: p.inStock !== false
  };
}

function dbRowToOrder(row) {
  const dateStr = row.created_at ? new Date(row.created_at).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) + ', ' + new Date(row.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Recent';
  return {
    id: row.id,
    timestamp: dateStr,
    customerName: row.customer_name || 'Customer',
    phone: row.customer_phone || '',
    address: row.customer_address || '',
    paymentMethod: row.payment_method || 'UPI',
    deliverySlot: row.delivery_slot || '5-7 Working Days',
    items: typeof row.items === 'string' ? JSON.parse(row.items) : (row.items || []),
    subtotal: Number(row.subtotal) || 0,
    deliveryCharge: Number(row.delivery_charge) || 0,
    totalAmount: Number(row.grand_total) || 0,
    status: row.status || 'Processing'
  };
}

function orderToDbRow(o) {
  return {
    id: o.id,
    customer_name: o.customerName,
    customer_phone: o.phone,
    customer_address: o.address,
    payment_method: o.paymentMethod,
    delivery_slot: o.deliverySlot,
    items: JSON.stringify(o.items),
    subtotal: o.subtotal,
    delivery_charge: 0,
    grand_total: o.totalAmount,
    status: o.status || 'Processing'
  };
}

async function loadProductsFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.from('products').select('*');
    if (error) {
      console.warn('Supabase products fetch notice:', error);
      return;
    }
    if (Array.isArray(data) && data.length > 0) {
      const REMOVED_CATEGORIES = ['Dryfruit', 'Seeds', 'Pulses', 'Dried fruit'];
      PRODUCTS = data.map(dbRowToProduct).filter(p => !REMOVED_CATEGORIES.includes(p.category));
      saveProductsToStorage();
      if (typeof renderProducts === 'function') renderProducts();
      if (typeof renderAdminProductsList === 'function') renderAdminProductsList();
      if (typeof renderAdminAnalytics === 'function') renderAdminAnalytics();
    }
  } catch (err) {
    console.warn('Supabase sync notice:', err);
  }
}

async function loadOrdersFromSupabase() {
  if (!supabaseClient) return;
  try {
    const { data, error } = await supabaseClient.from('orders').select('*').order('created_at', { ascending: false });
    if (error) {
      console.warn('Supabase orders fetch notice:', error);
      return;
    }
    if (Array.isArray(data)) {
      ORDERS = data.map(dbRowToOrder);
      saveOrdersToStorage();
      if (typeof renderAdminOrdersList === 'function') renderAdminOrdersList();
      if (typeof renderAdminAnalytics === 'function') renderAdminAnalytics();
    }
  } catch (err) {
    console.warn('Supabase orders sync notice:', err);
  }
}

function initSupabaseSync() {
  if (!supabaseClient) return;
  loadProductsFromSupabase();
  loadOrdersFromSupabase();

  try {
    supabaseClient
      .channel('schema-db-changes')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'products' }, () => {
        loadProductsFromSupabase();
      })
      .on('postgres_changes', { event: '*', schema: 'public', table: 'orders' }, () => {
        loadOrdersFromSupabase();
      })
      .subscribe();
  } catch (e) {
    console.warn('Supabase realtime channel subscription notice:', e);
  }
}

function loadProductsFromStorage() {
  const REMOVED_CATEGORIES = ['Dryfruit', 'Seeds', 'Pulses', 'Dried fruit'];
  const stored = localStorage.getItem('saj_products_v3') || localStorage.getItem('saj_products_v2');
  if (stored) {
    try {
      let parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Purge any removed categories or legacy products
        parsed = parsed.filter(p => !REMOVED_CATEGORIES.includes(p.category) && p.id !== 'medjool-dates' && p.id !== 'golden-raisins');
        DEFAULT_PRODUCTS.forEach(dp => {
          const idx = parsed.findIndex(p => p.id === dp.id);
          if (idx === -1) {
            parsed.push(dp);
          } else {
            // Synchronize canonical pack options and default weight
            parsed[idx].prices = dp.prices;
            parsed[idx].defaultWeight = dp.defaultWeight;
            if (dp.image) {
              parsed[idx].image = dp.image;
            }
            if (dp.weightImages) {
              parsed[idx].weightImages = dp.weightImages;
            }
          }
        });
        localStorage.setItem('saj_products_v3', JSON.stringify(parsed));
        localStorage.setItem('saj_products_v2', JSON.stringify(parsed));
        return parsed;
      }
    } catch (e) {
      console.error('Error loading products from storage:', e);
    }
  }
  return JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
}

let PRODUCTS = loadProductsFromStorage();

function saveProductsToStorage() {
  try {
    localStorage.setItem('saj_products_v3', JSON.stringify(PRODUCTS));
    localStorage.setItem('saj_products_v2', JSON.stringify(PRODUCTS));
  } catch (err) {
    console.warn('localStorage save warning (quota or restricted):', err);
  }
}

saveProductsToStorage();

function logAdminActivity(actionText) {
  const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  adminActivityLogs.unshift(`[${timestamp}] ${actionText}`);
  if (adminActivityLogs.length > 30) adminActivityLogs.pop();
  localStorage.setItem('saj_admin_logs', JSON.stringify(adminActivityLogs));
}

const HAMPERS = [
  {
    id: 'festive',
    category: 'Festive',
    name: 'Festive hamper',
    price: 999,
    formattedPrice: '₹999 to ₹9,999',
    description: 'Almonds, cashews, dates and pistachios in a keepsake box, tied with ribbon. Fully customizable according to your celebration needs.',
    image: './images/hamper.jpg'
  },
  {
    id: 'weddings',
    category: 'Weddings',
    name: 'Celebration Hamper',
    price: 999,
    formattedPrice: '₹999 to ₹9,999',
    description: 'Premium roasted nuts & saffron-infused dry fruits in handcrafted wooden brass box. Tailored with personalized wedding invites & messages.',
    image: './images/hamper.jpg'
  },
  {
    id: 'corporate',
    category: 'Corporate',
    name: 'Executive Gourmet Box',
    price: 999,
    formattedPrice: '₹999 to ₹9,999',
    description: 'Bespoke corporate gifting box with custom branding tags and reserve dry fruit varieties. Customizable in volume for clients & teams.',
    image: './images/hamper.jpg'
  }
];

// Reactive Cart & Product Weight State
let cartItems = [];

let selectedProductWeights = {};

const DELIVERY_CHARGE = 0;
const ESTIMATED_DELIVERY_DAYS = '5-7 Working Days';
const FREE_SHIPPING_LIMIT = 1999;

function getDeliveryNote(product, weight) {
  if (product.category === 'Mixes' || (weight && weight.includes('Days'))) {
    if (weight === '7 Days' || weight === '15 Days') {
      return '+ Shipping';
    }
    if (weight === '30 Days') {
      return 'Free Shipping';
    }
  }
  return '';
}

// 7 Days, 15 Days & 30 Days Pack Sizing Photography Mapping
const MIX_WEIGHT_IMAGES = {
  'kido-mix': {
    '7 Days': './images/kido_mix_7.jpg',
    '15 Days': './images/kido_mix_15.jpg',
    '30 Days': './images/kido_mix.jpg'
  },
  'berry-mix': {
    '7 Days': './images/berry_mix_7.jpg',
    '15 Days': './images/berry_mix_15.jpg',
    '30 Days': './images/berry_mix.jpg'
  },
  'daily-dose': {
    '7 Days': './images/daily_dose_7.jpg',
    '15 Days': './images/daily_dose_15.jpg',
    '30 Days': './images/daily_dose.jpg'
  },
  'slim-bites': {
    '7 Days': './images/slim_bites_7.jpg',
    '15 Days': './images/slim_bites_15.jpg',
    '30 Days': './images/slim_bites.jpg'
  },
  'nutri-glow': {
    '7 Days': './images/nutri_glow_7.jpg',
    '15 Days': './images/nutri_glow_15.jpg',
    '30 Days': './images/nutri_glow.jpg'
  },
  'vitamix': {
    '7 Days': './images/vitamix_7.jpg',
    '15 Days': './images/vitamix_15.jpg',
    '30 Days': './images/vitamix.jpg'
  },
  'gainora': {
    '7 Days': './images/gainora_7.jpg',
    '15 Days': './images/gainora_15.jpg',
    '30 Days': './images/gainora.jpg'
  },
  'mothers-bloom': {
    '7 Days': './images/mothers_bloom_7.jpg',
    '15 Days': './images/mothers_bloom_15.jpg',
    '30 Days': './images/mothers_bloom.jpg'
  },
  'overnight-dissolve': {
    '7 Days': './images/overnight_dissolve_7.jpg',
    '15 Days': './images/overnight_dissolve_15.jpg',
    '30 Days': './images/overnight_dissolve.jpg'
  },
  'nutri-care': {
    '7 Days': './images/nutri_care_7.jpg',
    '15 Days': './images/nutri_care_15.jpg',
    '30 Days': './images/nutri_care.jpg'
  },
  'nutri5': {
    '7 Days': './images/nutri5_7.jpg',
    '15 Days': './images/nutri5_15.jpg',
    '30 Days': './images/nutri5.jpg'
  }
};

function getProductDisplayImage(product, weight) {
  if (!product) return './images/kido_mix_master.jpg';
  const effectiveWeight = (weight !== undefined && weight !== null && weight !== '') 
    ? weight 
    : (selectedProductWeights && selectedProductWeights[product.id] ? selectedProductWeights[product.id] : null);

  if (effectiveWeight) {
    // 1. Check product.weightImages property if defined
    if (product.weightImages && product.weightImages[effectiveWeight]) {
      return product.weightImages[effectiveWeight];
    }

    // 2. Check centralized MIX_WEIGHT_IMAGES mapping
    if (product.id && MIX_WEIGHT_IMAGES[product.id]) {
      if (MIX_WEIGHT_IMAGES[product.id][effectiveWeight]) {
        return MIX_WEIGHT_IMAGES[product.id][effectiveWeight];
      }
      if (MIX_WEIGHT_IMAGES[product.id]['30 Days']) {
        return MIX_WEIGHT_IMAGES[product.id]['30 Days'];
      }
    }
  }

  // Default to master product packaging image
  return product.image || './images/kido_mix_master.jpg';
}

let activeShopCategory = 'All';
let activeHamperCategory = 'Festive';

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initStickyHeader();
  initHeroCarousel();
  handleNewProdCatChange();
  renderProducts();
  renderCart();
  initTimelineScroll();
  initCounters();
  initSearch();
  initKeyboardNav();
  initScrollReveals();
  initSupabaseSync();
});

// Dynamic Scroll Elevation for Sticky Header
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 1. Page Preloader
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const progressBar = document.getElementById('preloader-progress');
  const percentText = document.getElementById('preloader-percent');

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      if (progressBar) progressBar.style.width = '100%';
      if (percentText) percentText.innerText = '100%';
      setTimeout(() => {
        if (preloader) preloader.classList.add('preloader-hidden');
      }, 400);
    } else {
      if (progressBar) progressBar.style.width = progress + '%';
      if (percentText) percentText.innerText = progress + '%';
    }
  }, 100);
}

// 2. Render Product Catalog Grid
function renderProducts() {
  const catalogGrid = document.getElementById('product-catalog-grid');
  if (!catalogGrid) return;

  const filtered = activeShopCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeShopCategory);

  catalogGrid.innerHTML = filtered.map(product => {
    const priceKeys = (product.prices && typeof product.prices === 'object') ? Object.keys(product.prices) : [];
    const currentWeight = (selectedProductWeights && selectedProductWeights[product.id]) ? selectedProductWeights[product.id] : null;
    const minPrice = priceKeys.length > 0 ? Math.min(...priceKeys.map(k => {
      const p = product.prices[k];
      return typeof p === 'number' ? p : parseInt(p, 10) || 0;
    })) : 0;
    const currentPrice = currentWeight ? (product.prices ? product.prices[currentWeight] : 0) : null;
    const deliveryNote = currentWeight ? getDeliveryNote(product, currentWeight) : '';
    const numericPrice = currentPrice !== null ? (typeof currentPrice === 'number' ? currentPrice : parseInt(currentPrice, 10) || 0) : minPrice;
    const isOut = product.inStock === false;
    const isPackSelected = Boolean(currentWeight && (currentWeight.includes('Days') || currentWeight === '7 Days' || currentWeight === '15 Days' || currentWeight === '30 Days'));
    const displayImage = getProductDisplayImage(product, currentWeight);

    const containerClasses = isPackSelected
      ? "w-full aspect-square sm:aspect-[4/4.2] rounded-t-[160px] sm:rounded-t-[180px] rounded-b-[32px] bg-[#EFE7DA] shadow-sm border border-[#E8DEC8]/80 relative overflow-hidden mb-5 p-2 sm:p-2.5 flex items-center justify-center"
      : "w-full aspect-[4/5] rounded-t-[140px] rounded-b-[32px] bg-[#EFE7DA] shadow-sm border border-[#E8DEC8]/80 relative overflow-hidden mb-5";

    const imgClasses = isPackSelected
      ? "w-full h-full object-contain object-center rounded-2xl transition-transform duration-500 group-hover:scale-105"
      : "w-full h-full object-cover object-center rounded-t-[140px] rounded-b-[32px] transition-transform duration-700 group-hover:scale-105";

    return `
      <div id="product-card-${product.id}" class="bg-white rounded-[32px] p-6 border border-[#E8DEC8]/80 shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-md group reveal-on-scroll is-revealed">
        ${product.bestseller ? `
          <span class="absolute top-8 left-8 z-20 bg-[#EFE7DA] text-[#7A6248] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-xs">
            BESTSELLER
          </span>
        ` : ''}

        <!-- Arched Product Image Container -->
        <div class="${containerClasses} ${isOut ? 'product-out-of-stock' : ''}">
          <img 
            id="product-card-img-${product.id}"
            src="${displayImage}" 
            alt="${product.name}" 
            class="${imgClasses}"
            onerror="this.src='./images/kido_mix_master.jpg'"
          />
          ${isOut ? `
            <span class="absolute top-8 right-8 z-20 bg-red-600 text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-md">
              OUT OF STOCK
            </span>
          ` : ''}
        </div>

        <!-- Product Details Below Pouch -->
        <div class="flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-start justify-between gap-2">
              <h3 class="font-serif text-2xl font-normal text-[#2C1A11]">${product.name}</h3>
              <div class="flex flex-col items-end text-right">
                <div class="font-serif text-xl font-normal text-[#2C1A11] flex items-baseline">
                  ${currentWeight ? `
                    <span class="text-sm font-normal mr-0.5">₹</span>${numericPrice.toLocaleString('en-IN')}
                  ` : `
                    <span class="text-xs font-normal text-[#7A6248] mr-1 font-sans">From</span><span class="text-sm font-normal mr-0.5">₹</span>${minPrice.toLocaleString('en-IN')}
                  `}
                </div>
                ${deliveryNote ? `
                  <span class="text-[10px] font-bold ${currentWeight === '30 Days' ? 'text-[#8C5238]' : 'text-[#7A6248]'} font-sans tracking-tight leading-none mt-0.5 whitespace-nowrap">
                    ${deliveryNote}
                  </span>
                ` : `
                  <span class="text-[10px] text-[#7A6248] font-sans tracking-tight leading-none mt-0.5 whitespace-nowrap">
                    Select pack
                  </span>
                `}
              </div>
            </div>

            <p class="mt-2 text-xs text-[#7A6248] leading-relaxed line-clamp-2 font-sans">${product.description}</p>
          </div>

          <div class="mt-4 flex flex-col gap-4">
            <!-- Pack / Days Selection Pills -->
            <div class="flex items-center flex-wrap gap-2" role="group" aria-label="Select package size">
              ${priceKeys.map(weight => {
                const isSelected = currentWeight === weight;
                return `
                <button
                  onclick="selectWeight('${product.id}', '${weight}')"
                  aria-pressed="${isSelected}"
                  class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#2C1A11] text-[#FAF6F0]'
                      : 'bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]'
                  }"
                >
                  ${weight}
                </button>
              `;
              }).join('')}
            </div>

            <!-- Add to Bag Button -->
            ${isOut ? `
              <button
                disabled
                class="w-full py-3.5 bg-[#D5C5B5] text-[#7A6248] font-medium text-sm rounded-full shadow-none cursor-not-allowed flex items-center justify-center gap-2"
              >
                Out of stock
              </button>
            ` : `
              <button
                onclick="addToCart('${product.id}', '${currentWeight || ''}')"
                aria-label="Add ${product.name}${currentWeight ? ' ' + currentWeight : ''} to bag"
                class="w-full py-3.5 bg-[#8C5238] hover:bg-[#723F2A] text-white font-medium text-sm rounded-full transition-all shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Add to bag
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  setTimeout(initScrollReveals, 50);
}

function selectWeight(productId, weight) {
  if (selectedProductWeights[productId] === weight) {
    delete selectedProductWeights[productId];
  } else {
    selectedProductWeights[productId] = weight;
  }

  renderProducts();
}

function filterCategory(category) {
  if (category === 'Gift hampers') {
    const giftingEl = document.getElementById('gifting');
    if (giftingEl) {
      giftingEl.scrollIntoView({ behavior: 'smooth' });
    }
    return;
  }
  activeShopCategory = category;
  document.querySelectorAll('.cat-tab-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = 'cat-tab-btn px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-[#2C1A11] text-[#FAF6F0] shadow-sm';
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.className = 'cat-tab-btn px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]';
      btn.setAttribute('aria-selected', 'false');
    }
  });
  renderProducts();
}

// 3. Cart Management
function addToCart(productId, weight) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const selectedWeight = (weight && weight !== 'null' && weight !== 'undefined' && weight !== '') 
    ? weight 
    : (selectedProductWeights && selectedProductWeights[productId]);

  if (!selectedWeight) {
    showToast(`Please select a pack size for ${product.name}`);
    const card = document.getElementById(`product-card-${productId}`);
    if (card) {
      const pills = card.querySelectorAll('div[role="group"] button');
      pills.forEach(p => {
        p.classList.add('ring-2', 'ring-[#8C5238]', 'scale-105');
        setTimeout(() => p.classList.remove('ring-2', 'ring-[#8C5238]', 'scale-105'), 700);
      });
    }
    return;
  }

  const price = product.prices[selectedWeight];
  const numericPrice = typeof price === 'number' ? price : parseInt(price, 10) || 0;
  const existing = cartItems.find(item => item.id === productId && item.selectedWeight === selectedWeight);

  if (existing) {
    existing.quantity += 1;
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      selectedWeight: selectedWeight,
      price: numericPrice,
      quantity: 1,
      image: getProductDisplayImage(product, selectedWeight)
    });
  }

  showToast(`Added ${product.name} (${selectedWeight}) to bag`);
  renderCart();
  openCart();
}

function customizeHamper(hamperId) {
  const hamper = HAMPERS.find(h => h.id === hamperId || h.category.toLowerCase() === (hamperId || '').toLowerCase()) || HAMPERS[0];
  const waText = `Hi SAJ Organics, I would like to customize a Gift Hamper (${hamper.name}, Price range: ₹999 to ₹9,999). Please share the customization options and details.`;
  const waUrl = `https://wa.me/917869066707?text=${encodeURIComponent(waText)}`;
  window.open(waUrl, '_blank');
}

// Alias for backwards compatibility
function addHamperToCart(hamperId) {
  customizeHamper(hamperId);
}

function updateCartQuantity(id, weight, change) {
  const item = cartItems.find(i => i.id === id && i.selectedWeight === weight);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    cartItems = cartItems.filter(i => !(i.id === id && i.selectedWeight === weight));
  }
  renderCart();
}

function removeCartItem(id, weight) {
  cartItems = cartItems.filter(i => !(i.id === id && i.selectedWeight === weight));
  renderCart();
}

function renderCart() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const cartDeliveryCharge = document.getElementById('cart-delivery-charge');
  const cartGrandTotal = document.getElementById('cart-grand-total');
  const freeShippingText = document.getElementById('free-shipping-text');
  const freeShippingBar = document.getElementById('free-shipping-bar');

  const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const subtotal = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const isFree = subtotal >= FREE_SHIPPING_LIMIT;
  const grandTotal = subtotal;

  if (cartBadge) {
    cartBadge.innerText = totalCount;
    cartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
  }

  const remaining = Math.max(0, FREE_SHIPPING_LIMIT - subtotal);
  const percent = Math.min(100, (subtotal / FREE_SHIPPING_LIMIT) * 100);

  if (freeShippingText) {
    if (remaining > 0) {
      freeShippingText.innerHTML = `Add <span class="font-bold text-[#8C5238]">₹${remaining.toLocaleString('en-IN')}</span> more for free delivery`;
    } else {
      freeShippingText.innerHTML = `✨ You unlocked FREE delivery!`;
    }
  }

  if (freeShippingBar) {
    freeShippingBar.style.width = `${percent}%`;
  }

  if (cartSubtotal) {
    cartSubtotal.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
  }

  if (cartDeliveryCharge) {
    if (subtotal === 0) {
      cartDeliveryCharge.innerText = '—';
    } else if (isFree) {
      cartDeliveryCharge.innerHTML = `<span class="text-emerald-700 font-bold">FREE</span>`;
    } else {
      cartDeliveryCharge.innerText = '+ Shipping Charge';
    }
  }

  if (cartGrandTotal) {
    cartGrandTotal.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
  }

  if (cartItemsList) {
    if (cartItems.length === 0) {
      cartItemsList.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center text-center text-[#7A6248] py-16">
          <p class="font-serif text-2xl text-[#2C1A11]">Your bag is empty</p>
          <p class="text-sm mt-1 max-w-xs">Explore our collections of handcrafted mixes and gift hampers.</p>
        </div>
      `;
    } else {
      cartItemsList.innerHTML = cartItems.map(item => `
        <div class="flex items-start gap-4 p-3 bg-white/70 rounded-2xl border border-[#E8DEC8]/60 shadow-sm">
          <div class="w-20 h-24 bg-[#EFE5D8]/60 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center p-1">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain rounded-lg" onerror="this.src='./images/kido_mix_master.jpg'" />
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-serif text-lg font-medium text-[#2C1A11] truncate">${item.name}</h4>
                <span class="inline-block px-2 py-0.5 bg-[#EFE7DA] text-[#7A6248] text-[11px] font-medium rounded-full mt-0.5">${item.selectedWeight}</span>
              </div>
              <span class="font-medium text-sm text-[#2C1A11] ml-2">₹${item.price * item.quantity}</span>
            </div>

            <div class="flex items-center justify-between mt-4">
              <div class="flex items-center border border-[#D8CEBE] rounded-full bg-[#FAF6F0] px-2 py-1 gap-3">
                <button onclick="updateCartQuantity('${item.id}', '${item.selectedWeight}', -1)" aria-label="Decrease quantity" class="p-1 text-[#2C1A11] hover:text-[#8C5238]">-</button>
                <span class="text-xs font-semibold text-[#2C1A11] w-4 text-center">${item.quantity}</span>
                <button onclick="updateCartQuantity('${item.id}', '${item.selectedWeight}', 1)" aria-label="Increase quantity" class="p-1 text-[#2C1A11] hover:text-[#8C5238]">+</button>
              </div>

              <button onclick="removeCartItem('${item.id}', '${item.selectedWeight}')" aria-label="Remove item" class="text-xs text-[#7A6248] hover:text-[#8C5238] underline">Remove</button>
            </div>
          </div>
        </div>
      `).join('');
    }
  }
}

// 4. Scroll-Driven Timeline Connector Progress Line
function initTimelineScroll() {
  const container = document.getElementById('timeline-container');
  const trackLine = document.querySelector('.timeline-track-line');
  const progressLine = document.getElementById('timeline-progress-line');
  const stepNodes = document.querySelectorAll('.timeline-step-node');
  const stepCards = document.querySelectorAll('.timeline-step-card');

  if (!container || !progressLine || stepNodes.length === 0) return;

  function updateTimeline() {
    const containerRect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const firstNodeRect = stepNodes[0].getBoundingClientRect();
    const lastNodeRect = stepNodes[stepNodes.length - 1].getBoundingClientRect();

    // Calculate exact node center X and Y positions relative to timeline container
    const nodeCenterX = (firstNodeRect.left + firstNodeRect.width / 2) - containerRect.left;
    const firstNodeCenterY = (firstNodeRect.top + firstNodeRect.height / 2) - containerRect.top;
    const lastNodeCenterY = (lastNodeRect.top + lastNodeRect.height / 2) - containerRect.top;
    const maxTrackHeight = lastNodeCenterY - firstNodeCenterY;

    // Position background track line from center of Node 1 to center of Last Node
    if (trackLine) {
      trackLine.style.left = `${nodeCenterX}px`;
      trackLine.style.top = `${firstNodeCenterY}px`;
      trackLine.style.height = `${maxTrackHeight}px`;
    }
    progressLine.style.left = `${nodeCenterX}px`;
    progressLine.style.top = `${firstNodeCenterY}px`;

    // Smooth viewport scroll trigger (tip of the gold line follows scrolling pace)
    const triggerY = windowHeight * 0.55;
    const currentScrollY = triggerY - (firstNodeRect.top + firstNodeRect.height / 2);
    const currentHeight = Math.max(0, Math.min(maxTrackHeight, currentScrollY));

    progressLine.style.height = `${currentHeight}px`;

    // Activate each step node & card as the gold progress line reaches its center position
    stepNodes.forEach((node, idx) => {
      const card = stepCards[idx];
      const nodeRect = node.getBoundingClientRect();
      const nodeCenterY = (nodeRect.top + nodeRect.height / 2) - containerRect.top;
      const targetHeight = nodeCenterY - firstNodeCenterY - 12;

      if (idx === 0 || currentHeight >= targetHeight) {
        node.classList.add('active');
        if (card) card.classList.add('active-card');
      } else {
        node.classList.remove('active');
        if (card) card.classList.remove('active-card');
      }
    });
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateTimeline();
        ticking = false;
      });
      ticking = true;
    }
  });

  window.addEventListener('resize', updateTimeline);
  updateTimeline();
}

// 5. Animated Count-Up Statistics
function initCounters() {
  const counterElems = document.querySelectorAll('.animated-counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.to);
        const prefix = entry.target.dataset.prefix || '';
        const duration = 2000;
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(1, elapsed / duration);
          const currentVal = Math.floor(progress * target);
          entry.target.innerText = `${prefix}${currentVal.toLocaleString()}`;

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            entry.target.innerText = `${prefix}${target.toLocaleString()}`;
          }
        }

        requestAnimationFrame(updateCount);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterElems.forEach(el => observer.observe(el));
}

// 6. Hero Product Mixes Auto-Carousel (All 11 Mixes Master Images)
const HERO_CAROUSEL_SLIDES = [
  { id: 'daily-dose', title: 'Daily Dose', subtitle: 'Everyday Vitality Mix', image: './images/daily_dose_master.jpg' },
  { id: 'berry-mix', title: 'BerryMix', subtitle: 'Antioxidant Powerhouse', image: './images/berry_mix_master.jpg' },
  { id: 'kido-mix', title: 'KidoMix', subtitle: 'Kids Special Superfood', image: './images/kido_mix_master.jpg' },
  { id: 'vitamix', title: 'Vitamix', subtitle: 'Multi-Vitamin & Immune Booster', image: './images/vitamix_master.jpg' },
  { id: 'nutri-glow', title: 'NutriGlow', subtitle: 'Radiance & Wellness Mix', image: './images/nutri_glow_master.jpg' },
  { id: 'slim-bites', title: 'SlimBites', subtitle: 'Fitness & Fiber Crunch', image: './images/slim_bites_master.jpg' },
  { id: 'gainora', title: 'Gainora', subtitle: 'High-Energy Mass & Vitality Mix', image: './images/gainora_master.jpg' },
  { id: 'mothers-bloom', title: "Mother's Bloom", subtitle: 'Nourishing Lactation & Wellness Mix', image: './images/mothers_bloom_master.jpg' },
  { id: 'nutri5', title: 'Nutri5', subtitle: '5 Super-Nut & 5 Super-Seed Blend', image: './images/nutri5_master.jpg' },
  { id: 'nutri-care', title: 'NutriCare', subtitle: 'Holistic Vitality & Daily Wellness Mix', image: './images/nutri_care_master.jpg' },
  { id: 'overnight-dissolve', title: 'Overnight Dissolve', subtitle: 'Oats, Chia & Berry Breakfast Bowl', image: './images/overnight_dissolve_master.jpg' }
];

let currentHeroSlideIdx = 0;
let heroCarouselTimer = null;

function initHeroCarousel() {
  renderHeroCarouselDots();
  selectHeroSlide(0);
  startHeroCarouselTimer();
}

function renderHeroCarouselDots() {
  const dotsContainer = document.getElementById('hero-carousel-dots');
  if (!dotsContainer) return;
  dotsContainer.innerHTML = HERO_CAROUSEL_SLIDES.map((slide, idx) => `
    <button
      onclick="goToHeroSlide(${idx})"
      aria-label="View ${slide.title}"
      title="${slide.title}"
      class="hero-dot transition-all duration-300 ${idx === 0 ? 'w-6 h-1.5 bg-[#8C5238] rounded-full' : 'w-1.5 h-1.5 bg-[#D5C5B5] hover:bg-[#8C5238]/60 rounded-full'}"
    ></button>
  `).join('');
}

function goToHeroSlide(index) {
  currentHeroSlideIdx = index;
  selectHeroSlide(index);
  startHeroCarouselTimer();
}

function startHeroCarouselTimer() {
  if (heroCarouselTimer) clearInterval(heroCarouselTimer);
  heroCarouselTimer = setInterval(() => {
    currentHeroSlideIdx = (currentHeroSlideIdx + 1) % HERO_CAROUSEL_SLIDES.length;
    selectHeroSlide(currentHeroSlideIdx);
  }, 3200);
}

function selectHeroTag(tag) {
  const idx = HERO_CAROUSEL_SLIDES.findIndex(slide => slide.title === tag || slide.id === tag);
  if (idx !== -1) {
    goToHeroSlide(idx);
  }
}

function selectHeroSlide(index) {
  const slide = HERO_CAROUSEL_SLIDES[index];
  if (!slide) return;

  const heroImage = document.getElementById('hero-product-image');
  const heroTitle = document.getElementById('hero-product-title');
  const heroSubtitle = document.getElementById('hero-product-subtitle');
  const dots = document.querySelectorAll('.hero-dot');

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.className = 'hero-dot transition-all duration-300 w-6 h-1.5 bg-[#8C5238] rounded-full';
    } else {
      dot.className = 'hero-dot transition-all duration-300 w-1.5 h-1.5 bg-[#D5C5B5] hover:bg-[#8C5238]/60 rounded-full';
    }
  });

  if (heroImage) {
    heroImage.style.opacity = '0.3';
    heroImage.style.transform = 'scale(0.95)';
    setTimeout(() => {
      heroImage.src = slide.image;
      heroImage.alt = slide.title;
      heroImage.style.opacity = '1';
      heroImage.style.transform = 'scale(1)';
    }, 180);
  }

  if (heroTitle) {
    heroTitle.style.opacity = '0.3';
    setTimeout(() => {
      heroTitle.innerText = slide.title;
      heroTitle.style.opacity = '1';
    }, 180);
  }

  if (heroSubtitle) {
    heroSubtitle.style.opacity = '0.3';
    setTimeout(() => {
      heroSubtitle.innerText = slide.subtitle;
      heroSubtitle.style.opacity = '1';
    }, 180);
  }
}

// 7. Hamper Category Tab Switcher
function selectHamperCategory(cat) {
  activeHamperCategory = cat;
  const hamper = HAMPERS.find(h => h.category === cat) || HAMPERS[0];

  document.querySelectorAll('.hamper-tab-btn').forEach(btn => {
    if (btn.dataset.category === cat) {
      btn.className = 'hamper-tab-btn px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-[#2C1A11] text-[#FAF6F0] shadow-sm';
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.className = 'hamper-tab-btn px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap bg-[#EFE7DA] text-[#7A6248] hover:bg-[#E2D6C3]';
      btn.setAttribute('aria-selected', 'false');
    }
  });

  const hamperName = document.getElementById('hamper-name');
  const hamperPrice = document.getElementById('hamper-price');
  const hamperDesc = document.getElementById('hamper-desc');
  const hamperImg = document.getElementById('hamper-image');
  const customizeBtn = document.getElementById('customize-hamper-btn');

  if (hamperName) hamperName.innerText = hamper.name;
  if (hamperPrice) hamperPrice.innerText = hamper.formattedPrice;
  if (hamperDesc) hamperDesc.innerText = hamper.description;
  if (hamperImg) hamperImg.src = hamper.image;
  if (customizeBtn) {
    const waText = `Hi SAJ Organics, I would like to customize a Gift Hamper (${hamper.name}, Price range: ₹999 to ₹9,999). Please share the customization options and details.`;
    customizeBtn.setAttribute('href', `https://wa.me/917869066707?text=${encodeURIComponent(waText)}`);
  }
}

// 8. Search Functions
function initSearch() {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results-list');

  if (!searchInput || !searchResults) return;

  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const productMatches = q === '' 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

    const hamperMatches = (q !== '' && ('gift hamper'.includes(q) || 'hamper'.includes(q) || 'gift'.includes(q))) 
      ? HAMPERS 
      : (q !== '' ? HAMPERS.filter(h => h.name.toLowerCase().includes(q) || h.category.toLowerCase().includes(q)) : []);

    if (productMatches.length === 0 && hamperMatches.length === 0) {
      searchResults.innerHTML = `
        <div class="p-6 text-center text-[#7A6248] italic text-sm">
          No organic products found matching "${escapeHTML(q)}".
        </div>
      `;
      return;
    }

    let resultsHTML = '';

    if (hamperMatches.length > 0) {
      resultsHTML += hamperMatches.map(h => `
        <div onclick="customizeHamper('${h.id}'); closeSearch();" class="flex items-center justify-between p-3 hover:bg-[#EFE5D8]/70 rounded-2xl cursor-pointer transition-colors bg-[#FAF6F0] border border-[#E8DEC8]/60 mb-2">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#8C5238] text-white flex items-center justify-center font-serif font-bold text-sm">🎁</div>
            <div>
              <h4 class="font-serif text-lg font-medium text-[#2C1A11]">${h.name}</h4>
              <span class="text-xs text-[#8C5238] font-medium">Gift Hamper • Customizable</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-serif text-sm font-bold text-[#8C5238]">₹999 to ₹9,999</span>
            <span class="block text-[10px] text-[#25D366] font-semibold">Customize 📲</span>
          </div>
        </div>
      `).join('');
    }

    resultsHTML += productMatches.map(p => {
      const defaultOpt = p.defaultWeight || Object.keys(p.prices)[0];
      const priceVal = p.prices[defaultOpt];
      const numPrice = typeof priceVal === 'number' ? priceVal : parseInt(priceVal, 10) || 0;
      return `
        <div onclick="addToCart('${p.id}', '${defaultOpt}'); closeSearch();" class="flex items-center justify-between p-3 hover:bg-[#EFE5D8]/70 rounded-2xl cursor-pointer transition-colors">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#EFE5D8] flex items-center justify-center font-serif font-bold text-[#8C5238]">${p.name[0]}</div>
            <div>
              <h4 class="font-serif text-lg font-medium text-[#2C1A11]">${p.name}</h4>
              <span class="text-xs text-[#7A6248]">${p.category} • ${defaultOpt}</span>
            </div>
          </div>
          <span class="font-serif text-base font-semibold text-[#2C1A11]">From ₹${numPrice.toLocaleString('en-IN')}</span>
        </div>
      `;
    }).join('');

    searchResults.innerHTML = resultsHTML;
  });
}

// Drawer Toggles
function openNav() {
  // Reset active/selecting state
  document.querySelectorAll('.nav-menu-link').forEach(link => {
    link.classList.remove('nav-selecting');
  });

  document.getElementById('nav-backdrop')?.classList.add('active');
  document.getElementById('nav-drawer')?.classList.add('active');
  document.getElementById('nav-drawer')?.focus();
}

function closeNav() {
  document.getElementById('nav-backdrop')?.classList.remove('active');
  document.getElementById('nav-drawer')?.classList.remove('active');

  setTimeout(() => {
    document.querySelectorAll('.nav-menu-link').forEach(link => {
      link.classList.remove('nav-selecting');
    });
  }, 400);
}

function handleNavSelect(e, targetId) {
  if (e) e.preventDefault();
  
  const linkEl = e ? e.currentTarget : null;
  if (linkEl) {
    document.querySelectorAll('.nav-menu-link').forEach(l => l.classList.remove('nav-selecting'));
    linkEl.classList.add('nav-selecting', 'active-link');
  }

  // Delay drawer close & scroll to allow luxury golden pulse & slide selection effect to complete
  setTimeout(() => {
    closeNav();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, 220);
}

function openCart() {
  document.getElementById('cart-backdrop')?.classList.add('active');
  document.getElementById('cart-drawer')?.classList.add('active');
}
function closeCart() {
  document.getElementById('cart-backdrop')?.classList.remove('active');
  document.getElementById('cart-drawer')?.classList.remove('active');
}

function openSearch() {
  document.getElementById('search-modal')?.classList.add('active');
  document.getElementById('search-input')?.focus();
}
function closeSearch() {
  document.getElementById('search-modal')?.classList.remove('active');
}

// Toast Notification
function showToast(msg) {
  const toast = document.getElementById('toast-banner');
  const toastText = document.getElementById('toast-text');
  if (toast && toastText) {
    toastText.innerText = msg;
    toast.style.display = 'flex';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 3000);
  }
}

// 9. Luxury Scroll Reveal Observer
function initScrollReveals() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-image, .category-card-container');
  if (revealElements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

let secretAdminBuffer = '';
const _SEC_KEY = atob('amF0aW5zb25p'); // Obfuscated internal security keyword

function checkUrlAdminTrigger() {
  const hash = window.location.hash.toLowerCase();
  const search = window.location.search.toLowerCase();

  if (hash === ('#' + _SEC_KEY) || hash === '#admin' || search.includes(_SEC_KEY + '=true') || search.includes('admin=true')) {
    if (window.history && window.history.replaceState) {
      const cleanUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      window.history.replaceState(null, null, cleanUrl);
    }
    openAdminPortal();
  }
}

// Keyboard Navigation Shortcut & Secret Admin Triggers
function initKeyboardNav() {
  checkUrlAdminTrigger();
  window.addEventListener('hashchange', checkUrlAdminTrigger);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeNav();
      closeCart();
      closeSearch();
      closeCheckoutModal();
      closeAdminLoginModal();
      closeAdminPanel();
      closeAdminEditModal();
      secretAdminBuffer = '';
    }

    if (e.altKey && (e.key === 'a' || e.key === 'A')) {
      e.preventDefault();
      openAdminPortal();
    }

    // Secret key typing listener when not focused in input/textarea
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag !== 'input' && activeTag !== 'textarea' && activeTag !== 'select') {
      if (e.key.length === 1) {
        secretAdminBuffer += e.key.toLowerCase();
        if (secretAdminBuffer.length > 20) {
          secretAdminBuffer = secretAdminBuffer.slice(-20);
        }
        if (secretAdminBuffer.endsWith(_SEC_KEY)) {
          secretAdminBuffer = '';
          openAdminPortal();
        }
      }
    }
  });
}

// ==========================================
// 10. SAJ Organics Admin Control Suite & Real Checkout
// ==========================================
let isAdminLoggedIn = false;

// Real Customer Orders Data Store
const DEFAULT_INITIAL_ORDERS = [];

function loadOrdersFromStorage() {
  const stored = localStorage.getItem('saj_orders_v1');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        // Filter out old seed demo orders if present
        const realOrders = parsed.filter(o => !['SAJ-ORD-108492', 'SAJ-ORD-108493', 'SAJ-ORD-108494'].includes(o.id));
        realOrders.forEach(o => {
          if (!o.status || o.status.includes('WhatsApp')) {
            o.status = 'Processing';
          }
        });
        return realOrders;
      }
    } catch (e) {
      console.error('Error loading orders from storage:', e);
    }
  }
  return [];
}

let ORDERS = loadOrdersFromStorage();
saveOrdersToStorage();

function saveOrdersToStorage() {
  localStorage.setItem('saj_orders_v1', JSON.stringify(ORDERS));
}

// ==========================================
// Customer Checkout Handlers
// ==========================================
function openCheckoutModal() {
  if (cartItems.length === 0) {
    showToast('Your bag is empty! Add products to checkout.');
    return;
  }

  const subtotal = cartItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const totalCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);
  const isFree = subtotal >= FREE_SHIPPING_LIMIT;
  const grandTotal = subtotal;

  const totalValEl = document.getElementById('checkout-total-val');
  const itemCountEl = document.getElementById('checkout-item-count');
  const deliveryBreakdownEl = document.getElementById('checkout-delivery-breakdown');

  if (totalValEl) totalValEl.innerText = `₹${grandTotal.toLocaleString('en-IN')}`;
  if (itemCountEl) itemCountEl.innerText = `${totalCount} Item${totalCount > 1 ? 's' : ''}`;
  if (deliveryBreakdownEl) {
    if (isFree) {
      deliveryBreakdownEl.innerHTML = `<span class="text-emerald-700 font-bold">FREE Shipping</span>`;
    } else {
      deliveryBreakdownEl.innerText = `+ Shipping Charge`;
    }
  }

  closeCart();
  document.getElementById('checkout-modal')?.classList.add('active');
  document.getElementById('checkout-name')?.focus();
  if (window.lucide) lucide.createIcons();
}

function closeCheckoutModal() {
  document.getElementById('checkout-modal')?.classList.remove('active');
}

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function processCustomerCheckout(e) {
  if (e) e.preventDefault();

  if (cartItems.length === 0) {
    showToast('Your bag is empty!');
    closeCheckoutModal();
    return;
  }

  const name = escapeHTML(document.getElementById('checkout-name')?.value.trim());
  const phone = escapeHTML(document.getElementById('checkout-phone')?.value.trim());
  const address = escapeHTML(document.getElementById('checkout-address')?.value.trim());
  const payment = 'UPI Payment';
  const slot = '5-7 Working Days (Standard Nationwide Delivery)';

  // Security Hardening: Recalculate and verify each item's price against official PRODUCTS catalog
  const verifiedItems = cartItems.map(item => {
    const catalogProd = PRODUCTS.find(p => p.id === item.id);
    let authenticPrice = item.price;
    if (catalogProd && catalogProd.prices && catalogProd.prices[item.selectedWeight]) {
      authenticPrice = catalogProd.prices[item.selectedWeight];
    }
    return {
      id: item.id,
      name: item.name,
      selectedWeight: item.selectedWeight,
      quantity: Math.max(1, parseInt(item.quantity, 10) || 1),
      price: authenticPrice,
      image: item.image
    };
  });

  const subtotal = verifiedItems.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const orderId = 'SAJ-ORD-' + Math.floor(100000 + Math.random() * 900000);
  const isFreeShipping = subtotal >= FREE_SHIPPING_LIMIT;
  const deliveryFee = 0;
  const totalPayable = subtotal;

  const newOrder = {
    id: orderId,
    timestamp: new Date().toLocaleDateString('en-IN', { month: 'short', day: 'numeric' }) + ', ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    customerName: name,
    phone: phone,
    address: address,
    paymentMethod: payment,
    deliverySlot: slot,
    items: verifiedItems,
    subtotal: subtotal,
    deliveryCharge: deliveryFee,
    totalAmount: totalPayable,
    status: 'Processing'
  };

  ORDERS.unshift(newOrder);
  saveOrdersToStorage();

  // Sync real-time order record to Supabase Cloud Database
  if (supabaseClient) {
    supabaseClient.from('orders').insert([orderToDbRow(newOrder)]).then(({ error }) => {
      if (error) console.error('Supabase order sync error:', error);
      else console.log('Order synced to Supabase:', newOrder.id);
    });
  }

  logAdminActivity(`New customer WhatsApp order #${newOrder.id} generated by ${name} (₹${totalPayable})`);

  // Clear customer bag
  cartItems = [];
  renderCart();
  closeCheckoutModal();

  // Construct structured WhatsApp order invoice message
  let waMsg = `🌿 *NEW ORDER FROM SAJ ORGANICS* 🌿\n`;
  waMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  waMsg += `📋 *Order ID:* #${orderId}\n`;
  waMsg += `👤 *Customer Name:* ${name}\n`;
  waMsg += `📞 *Mobile Contact:* ${phone}\n`;
  waMsg += `📍 *Delivery Address:* ${address}\n`;
  waMsg += `💳 *Payment Preference:* ${payment}\n`;
  waMsg += `🚚 *Estimated Delivery:* 5-7 Working Days\n\n`;
  waMsg += `📦 *ORDERED ITEMS:*\n`;
  verifiedItems.forEach((item, idx) => {
    waMsg += `${idx + 1}. *${item.name}* (${item.selectedWeight}) x${item.quantity} — ₹${(item.price * item.quantity).toLocaleString('en-IN')}\n`;
  });
  waMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  waMsg += `💰 *Items Subtotal:* ₹${subtotal.toLocaleString('en-IN')}\n`;
  waMsg += isFreeShipping 
    ? `🚚 *Shipping Charges:* FREE Delivery (Unlocked over ₹${FREE_SHIPPING_LIMIT.toLocaleString('en-IN')})\n` 
    : `🚚 *Shipping Charges:* + Shipping Charge (Standard Delivery)\n`;
  waMsg += `📅 *Estimated Delivery Date:* 5-7 Working Days\n`;
  waMsg += `💵 *Total Payable:* ₹${totalPayable.toLocaleString('en-IN')}${isFreeShipping ? '' : ' (+ Shipping Charge)'}\n`;
  waMsg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  waMsg += `Please confirm my order and share your UPI payment QR code details. Thank you!`;

  const waUrl = `https://wa.me/917869066707?text=${encodeURIComponent(waMsg)}`;
  showToast(`🎉 Order #${orderId} generated! Opening WhatsApp... 📲`);

  // Open WhatsApp in new tab
  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 400);

  // Refresh Admin views if open
  renderAdminAnalytics();
  renderAdminOrdersList();
}

// ==========================================
// Local Image File Selector Handler (FileReader)
// ==========================================
function handleImageFileUpload(event, targetInputId, previewImgId) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    alert('Please select a valid image file.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const rawDataUrl = e.target.result;
    
    // Auto-compress image to fit comfortably in localStorage without exceeding browser quota
    const img = new Image();
    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        const maxDim = 800;
        let width = img.width;
        let height = img.height;

        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round((height * maxDim) / width);
            width = maxDim;
          } else {
            width = Math.round((width * maxDim) / height);
            height = maxDim;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);

        const targetInput = document.getElementById(targetInputId);
        if (targetInput) targetInput.value = compressedDataUrl;

        if (previewImgId) {
          const previewImg = document.getElementById(previewImgId);
          if (previewImg) previewImg.src = compressedDataUrl;
        }

        showToast('Image optimized and loaded! 📷');
      } catch (err) {
        // Fallback to raw dataUrl if canvas fails
        const targetInput = document.getElementById(targetInputId);
        if (targetInput) targetInput.value = rawDataUrl;
        if (previewImgId) {
          const previewImg = document.getElementById(previewImgId);
          if (previewImg) previewImg.src = rawDataUrl;
        }
        showToast('Local image loaded! 📷');
      }
    };
    img.onerror = function() {
      const targetInput = document.getElementById(targetInputId);
      if (targetInput) targetInput.value = rawDataUrl;
      if (previewImgId) {
        const previewImg = document.getElementById(previewImgId);
        if (previewImg) previewImg.src = rawDataUrl;
      }
      showToast('Local image loaded! 📷');
    };
    img.src = rawDataUrl;
  };
  reader.readAsDataURL(file);
}

// ==========================================
// Admin Portal Authentication & Security Hardening
// ==========================================
let adminInactivityTimer = null;

function isSessionActive() {
  const token = sessionStorage.getItem('saj_admin_session_token');
  const lastActive = parseInt(sessionStorage.getItem('saj_admin_last_active') || '0', 10);
  // Session expires after 15 minutes of inactivity (900,000 ms)
  const isExpired = !lastActive || (Date.now() - lastActive > 15 * 60 * 1000);
  if (token && !isExpired) {
    return true;
  }
  if (token && isExpired) {
    logoutAdmin();
  }
  return false;
}

function openAdminPortal() {
  if (isSessionActive()) {
    isAdminLoggedIn = true;
    showAdminPanelModal();
  } else {
    openAdminLoginModal();
  }
}

function openAdminLoginModal() {
  document.getElementById('admin-login-modal')?.classList.add('active');
  const input = document.getElementById('admin-pin-input');
  if (input) {
    input.value = '';
    input.focus();
  }

  const lockoutUntil = parseInt(localStorage.getItem('saj_admin_lockout') || '0', 10);
  const errEl = document.getElementById('admin-login-error');
  if (Date.now() < lockoutUntil && errEl) {
    const mins = Math.ceil((lockoutUntil - Date.now()) / 60000);
    errEl.innerText = `Console locked due to repeated attempts. Please retry in ${mins} min.`;
    errEl.classList.remove('hidden');
  } else if (errEl) {
    errEl.classList.add('hidden');
  }
}

function closeAdminLoginModal() {
  document.getElementById('admin-login-modal')?.classList.remove('active');
}

async function verifyAdminPin() {
  const lockoutUntil = parseInt(localStorage.getItem('saj_admin_lockout') || '0', 10);
  const errEl = document.getElementById('admin-login-error');

  if (Date.now() < lockoutUntil) {
    const mins = Math.ceil((lockoutUntil - Date.now()) / 60000);
    if (errEl) {
      errEl.innerText = `Console temporarily locked. Please retry in ${mins} minute(s).`;
      errEl.classList.remove('hidden');
    }
    return;
  }

  const input = document.getElementById('admin-pin-input');
  const pinVal = input ? input.value.trim() : '';
  if (!pinVal) return;

  const inputHash = await computeHash(pinVal);
  const targetHash = localStorage.getItem('saj_admin_hash') || DEFAULT_ADMIN_HASH;

  if (inputHash === targetHash) {
    // Correct passcode: reset brute-force counter & remove lockout
    sessionStorage.removeItem('saj_admin_fails');
    localStorage.removeItem('saj_admin_lockout');

    isAdminLoggedIn = true;
    const sessionToken = 'saj_sec_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
    sessionStorage.setItem('saj_admin_session_token', sessionToken);
    sessionStorage.setItem('saj_admin_last_active', Date.now().toString());

    closeAdminLoginModal();
    showAdminPanelModal();
    showToast('Admin Console Authenticated 🛡️');
    logAdminActivity('Admin console logged in (Secure Session)');

    startAdminInactivityTracker();
  } else {
    let fails = parseInt(sessionStorage.getItem('saj_admin_fails') || '0', 10) + 1;
    sessionStorage.setItem('saj_admin_fails', fails.toString());

    if (fails >= 5) {
      const lockUntil = Date.now() + (15 * 60 * 1000); // 15-minute lockout
      localStorage.setItem('saj_admin_lockout', lockUntil.toString());
      if (errEl) {
        errEl.innerText = 'Too many failed attempts! Admin console locked for 15 minutes.';
        errEl.classList.remove('hidden');
      }
    } else {
      if (errEl) {
        errEl.innerText = `Incorrect passcode. ${5 - fails} attempt(s) remaining.`;
        errEl.classList.remove('hidden');
      }
    }
    if (input) input.focus();
  }
}

function showAdminPanelModal() {
  // Security Guard: Prevent direct console hijacking
  if (!isSessionActive()) {
    openAdminLoginModal();
    return;
  }

  document.getElementById('admin-panel-modal')?.classList.add('active');
  handleNewProdCatChange();
  switchAdminTab('analytics');
  if (window.lucide) lucide.createIcons();
}

function closeAdminPanel() {
  document.getElementById('admin-panel-modal')?.classList.remove('active');
  renderProducts();
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('saj_admin_session_token');
  sessionStorage.removeItem('saj_admin_last_active');
  if (adminInactivityTimer) clearInterval(adminInactivityTimer);
  closeAdminPanel();
  logAdminActivity('Admin logged out');
  showToast('Admin Logged Out 🔒');
}

function startAdminInactivityTracker() {
  if (adminInactivityTimer) clearInterval(adminInactivityTimer);

  const adminModal = document.getElementById('admin-panel-modal');
  if (adminModal) {
    adminModal.onmousemove = adminModal.onkeydown = adminModal.onclick = () => {
      if (isAdminLoggedIn) {
        sessionStorage.setItem('saj_admin_last_active', Date.now().toString());
      }
    };
  }

  adminInactivityTimer = setInterval(() => {
    if (!isAdminLoggedIn) {
      clearInterval(adminInactivityTimer);
      return;
    }
    const lastActive = parseInt(sessionStorage.getItem('saj_admin_last_active') || '0', 10);
    if (Date.now() - lastActive > 15 * 60 * 1000) {
      logoutAdmin();
      showToast('Admin session expired due to inactivity 🔒');
    }
  }, 30000);
}

function switchAdminTab(tabName) {
  document.querySelectorAll('.admin-tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('active', 'bg-[#2C1A11]', 'text-[#FAF6F0]');
    btn.classList.add('bg-white', 'text-[#7A6248]');
  });

  const targetContent = document.getElementById(`admin-tab-${tabName}`);
  const targetBtn = document.getElementById(`admin-tab-btn-${tabName}`);

  if (targetContent) targetContent.classList.remove('hidden');
  if (targetBtn) {
    targetBtn.classList.add('active', 'bg-[#2C1A11]', 'text-[#FAF6F0]');
    targetBtn.classList.remove('bg-white', 'text-[#7A6248]');
  }

  if (tabName === 'analytics') renderAdminAnalytics();
  if (tabName === 'orders') renderAdminOrdersList();
  if (tabName === 'products') renderAdminProductsList();
  if (tabName === 'add-product') handleNewProdCatChange();
}

// Dynamic Analytics & KPI Cards
function renderAdminAnalytics() {
  const totalProds = PRODUCTS.length;
  const outOfStockCount = PRODUCTS.filter(p => p.inStock === false).length;
  const bestsellersCount = PRODUCTS.filter(p => p.bestseller === true).length;
  
  const totalRevenue = ORDERS.reduce((acc, o) => acc + (o.totalAmount || 0), 0);
  const totalOrders = ORDERS.length;
  const avgOrderVal = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;

  const kpiCardsEl = document.getElementById('admin-kpi-cards');
  if (kpiCardsEl) {
    kpiCardsEl.innerHTML = `
      <div class="bg-white rounded-2xl p-4 border border-[#E8DEC8] shadow-xs flex flex-col gap-1">
        <span class="text-[10px] uppercase font-bold text-[#7A6248] tracking-wider">Total Sales Revenue</span>
        <span class="font-serif text-2xl font-bold text-[#2C1A11]">₹${totalRevenue.toLocaleString('en-IN')}</span>
        <span class="text-[10px] text-emerald-600 font-semibold mt-1">Live customer checkout totals</span>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-[#E8DEC8] shadow-xs flex flex-col gap-1">
        <span class="text-[10px] uppercase font-bold text-[#7A6248] tracking-wider">Orders Processed</span>
        <span class="font-serif text-2xl font-bold text-[#2C1A11]">${totalOrders} Orders</span>
        <span class="text-[10px] text-[#8C5238] font-semibold mt-1">Avg ₹${avgOrderVal.toLocaleString('en-IN')} / order</span>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-[#E8DEC8] shadow-xs flex flex-col gap-1">
        <span class="text-[10px] uppercase font-bold text-[#7A6248] tracking-wider">Active Products</span>
        <span class="font-serif text-2xl font-bold text-[#2C1A11]">${totalProds} Items</span>
        <span class="text-[10px] text-[#C88E52] font-semibold mt-1">${bestsellersCount} Bestsellers</span>
      </div>
      <div class="bg-white rounded-2xl p-4 border border-[#E8DEC8] shadow-xs flex flex-col gap-1">
        <span class="text-[10px] uppercase font-bold text-[#7A6248] tracking-wider">Stock Status</span>
        <span class="font-serif text-2xl font-bold ${outOfStockCount > 0 ? 'text-red-600' : 'text-emerald-700'}">${outOfStockCount} Out of stock</span>
        <span class="text-[10px] text-[#7A6248] font-semibold mt-1">${totalProds - outOfStockCount} Available in stock</span>
      </div>
    `;
  }

  const categories = ['Mixes', 'Gift hampers'];
  const catBarsEl = document.getElementById('admin-category-bars');
  if (catBarsEl) {
    catBarsEl.innerHTML = categories.map(cat => {
      const count = PRODUCTS.filter(p => p.category === cat).length;
      const percent = Math.round((count / Math.max(1, totalProds)) * 100);
      return `
        <div class="space-y-1">
          <div class="flex items-center justify-between text-xs">
            <span class="font-semibold text-[#2C1A11]">${cat}</span>
            <span class="text-[#7A6248]">${count} Products (${percent}%)</span>
          </div>
          <div class="w-full h-2.5 bg-[#EFE7DA] rounded-full overflow-hidden">
            <div class="h-full bg-[#8C5238] rounded-full transition-all duration-500" style="width: ${percent}%"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  const activityLogEl = document.getElementById('admin-activity-log');
  if (activityLogEl) {
    if (adminActivityLogs.length === 0) {
      activityLogEl.innerHTML = `<p class="italic text-[#7A6248]">No admin activity logged yet.</p>`;
    } else {
      activityLogEl.innerHTML = adminActivityLogs.map(log => `
        <div class="p-2 bg-[#FAF6F0] rounded-lg border border-[#E8DEC8]/60 flex items-center justify-between">
          <span>${log}</span>
        </div>
      `).join('');
    }
  }
}

// Render Orders & Sales History Table
function renderAdminOrdersList() {
  const tbody = document.getElementById('admin-orders-tbody');
  const searchInput = document.getElementById('admin-orders-search');
  const countEl = document.getElementById('admin-orders-count');
  if (!tbody) return;

  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = q === '' 
    ? ORDERS 
    : ORDERS.filter(o => 
        o.id.toLowerCase().includes(q) || 
        o.customerName.toLowerCase().includes(q) || 
        o.phone.toLowerCase().includes(q)
      );

  if (countEl) countEl.innerText = `Total Orders: ${filtered.length}`;

  if (filtered.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="6" class="p-8 text-center text-[#7A6248] italic">
          No customer orders found matching "${escapeHTML(q)}".
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = filtered.map(o => {
    const itemsSummary = o.items.map(i => `${i.name} (${i.selectedWeight}) x${i.quantity}`).join(', ');
    
    let statusBadgeClass = 'bg-amber-100 text-amber-800 border-amber-300';
    if (o.status === 'Completed') statusBadgeClass = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    if (o.status === 'Delivered') statusBadgeClass = 'bg-blue-100 text-blue-800 border-blue-300';
    if (o.status === 'Cancelled') statusBadgeClass = 'bg-red-100 text-red-800 border-red-300';

    return `
      <tr class="hover:bg-[#FAF6F0]">
        <td class="p-4">
          <div class="font-mono font-bold text-[#2C1A11] text-xs">${o.id}</div>
          <div class="text-[11px] text-[#7A6248]">${o.timestamp}</div>
        </td>
        <td class="p-4">
          <div class="font-bold text-[#2C1A11]">${o.customerName}</div>
          <div class="text-[11px] text-[#8C5238]">${o.phone}</div>
          <div class="text-[10px] text-[#7A6248] max-w-xs truncate" title="${o.address}">${o.address}</div>
        </td>
        <td class="p-4 text-[11px] text-[#2C1A11] max-w-xs truncate" title="${itemsSummary}">${itemsSummary}</td>
        <td class="p-4 font-serif font-bold text-sm text-[#2C1A11]">₹${o.totalAmount.toLocaleString('en-IN')}</td>
        <td class="p-4 text-center">
          <select onchange="updateOrderStatus('${o.id}', this.value)" class="text-[11px] font-bold px-2.5 py-1 rounded-full border shadow-2xs ${statusBadgeClass} focus:outline-none cursor-pointer">
            <option value="Processing" ${(o.status === 'Processing' || !o.status) ? 'selected' : ''}>🟡 Processing</option>
            <option value="Completed" ${o.status === 'Completed' ? 'selected' : ''}>🟢 Completed</option>
            <option value="Delivered" ${o.status === 'Delivered' ? 'selected' : ''}>📦 Delivered</option>
            <option value="Cancelled" ${o.status === 'Cancelled' ? 'selected' : ''}>🔴 Cancelled</option>
          </select>
        </td>
        <td class="p-4 text-right">
          <button onclick="deleteOrderRecord('${o.id}')" title="Delete Order Record" class="p-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition-colors">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function updateOrderStatus(orderId, newStatus) {
  const o = ORDERS.find(item => item.id === orderId);
  if (!o) return;

  o.status = newStatus;
  saveOrdersToStorage();

  if (supabaseClient) {
    supabaseClient.from('orders').update({ status: newStatus }).eq('id', orderId).then(({ error }) => {
      if (error) console.error('Supabase update order status error:', error);
    });
  }

  logAdminActivity(`Updated order #${orderId} status to "${newStatus}"`);
  showToast(`Order #${orderId} status set to ${newStatus}`);
  renderAdminOrdersList();
  renderAdminAnalytics();
}

function deleteOrderRecord(orderId) {
  if (confirm(`Are you sure you want to delete order record #${orderId}?`)) {
    ORDERS = ORDERS.filter(item => item.id !== orderId);
    saveOrdersToStorage();

    if (supabaseClient) {
      supabaseClient.from('orders').delete().eq('id', orderId).then(({ error }) => {
        if (error) console.error('Supabase delete order error:', error);
      });
    }

    logAdminActivity(`Deleted order record #${orderId}`);
    showToast(`Order #${orderId} deleted`);
    renderAdminOrdersList();
    renderAdminAnalytics();
  }
}

function clearAllOrders() {
  if (confirm('Are you sure you want to clear all order history?')) {
    ORDERS = [];
    saveOrdersToStorage();

    if (supabaseClient) {
      supabaseClient.from('orders').delete().neq('id', '___empty___').then(({ error }) => {
        if (error) console.error('Supabase clear orders error:', error);
      });
    }

    logAdminActivity('Cleared customer orders history');
    showToast('Orders history cleared');
    renderAdminOrdersList();
    renderAdminAnalytics();
  }
}

// Products & Inventory List Rendering
function renderAdminProductsList() {
  const tbody = document.getElementById('admin-products-tbody');
  const searchInput = document.getElementById('admin-product-search');
  const countEl = document.getElementById('admin-products-count');
  if (!tbody) return;

  const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const filtered = q === '' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

  if (countEl) countEl.innerText = `Total Products: ${filtered.length}`;

  tbody.innerHTML = filtered.map(p => {
    const isOut = p.inStock === false;
    const priceKeys = (p.prices && typeof p.prices === 'object') ? Object.keys(p.prices) : [];
    const priceSummary = priceKeys.map(k => `${k}: ₹${p.prices[k]}`).join(', ');

    return `
      <tr class="hover:bg-[#FAF6F0]">
        <td class="p-4 flex items-center gap-3">
          <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-cover rounded-xl border border-[#E8DEC8] flex-shrink-0" onerror="this.src='./images/kido_mix_master.jpg'" />
          <div>
            <div class="font-bold text-[#2C1A11] flex items-center gap-1.5">
              ${p.name}
              ${p.bestseller ? '<span class="text-[9px] bg-[#EFE7DA] text-[#8C5238] px-1.5 py-0.5 rounded-full font-bold">STAR</span>' : ''}
            </div>
            <div class="text-[11px] text-[#7A6248]">${p.subtitle || ''}</div>
          </div>
        </td>
        <td class="p-4 font-semibold text-[#8C5238]">${p.category}</td>
        <td class="p-4 text-[11px] text-[#7A6248] max-w-xs truncate" title="${priceSummary}">${priceSummary}</td>
        <td class="p-4 text-center">
          <button onclick="toggleAdminProductStock('${p.id}')" class="stock-toggle-btn px-3 py-1.5 rounded-full text-[11px] font-bold border shadow-2xs ${isOut ? 'out-of-stock' : 'in-stock'}">
            ${isOut ? '🔴 OUT OF STOCK' : '🟢 IN STOCK'}
          </button>
        </td>
        <td class="p-4 text-right">
          <div class="flex items-center justify-end gap-2">
            <button onclick="viewProductOnStore('${p.id}')" title="View live on website" class="p-1.5 rounded-lg bg-[#EFE7DA] text-[#2C1A11] hover:bg-[#8C5238] hover:text-white transition-colors">
              <i data-lucide="eye" class="w-4 h-4"></i>
            </button>
            <button onclick="openAdminEditModal('${p.id}')" title="Edit details, prices & image" class="p-1.5 rounded-lg bg-[#EFE7DA] text-[#2C1A11] hover:bg-[#8C5238] hover:text-white transition-colors">
              <i data-lucide="edit-3" class="w-4 h-4"></i>
            </button>
            <button onclick="promptReplaceProductImage('${p.id}')" title="Replace Image URL" class="p-1.5 rounded-lg bg-[#EFE7DA] text-[#2C1A11] hover:bg-[#8C5238] hover:text-white transition-colors">
              <i data-lucide="image" class="w-4 h-4"></i>
            </button>
            <button onclick="deleteAdminProduct('${p.id}')" title="Delete Product" class="p-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-600 hover:text-white transition-colors">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function viewProductOnStore(productId) {
  closeAdminPanel();
  filterCategory('All');
  setTimeout(() => {
    const card = document.getElementById(`product-card-${productId}`) || document.getElementById('product-catalog-grid');
    if (card) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      card.classList.add('ring-4', 'ring-[#8C5238]', 'transition-all');
      setTimeout(() => card.classList.remove('ring-4', 'ring-[#8C5238]'), 3000);
    }
  }, 250);
}

function toggleAdminProductStock(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  p.inStock = !(p.inStock === false);
  saveProductsToStorage();

  if (supabaseClient) {
    supabaseClient.from('products').update({ in_stock: p.inStock }).eq('id', p.id).then(({ error }) => {
      if (error) console.error('Supabase stock update error:', error);
    });
  }

  logAdminActivity(`Updated stock for "${p.name}": ${p.inStock ? 'In Stock' : 'Out of Stock'}`);
  showToast(`Stock updated for ${p.name}`);
  renderProducts();
  renderAdminProductsList();
  renderAdminAnalytics();
}

function deleteAdminProduct(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  if (confirm(`Are you sure you want to delete "${p.name}" from the catalog?`)) {
    PRODUCTS = PRODUCTS.filter(item => item.id !== productId);
    saveProductsToStorage();

    if (supabaseClient) {
      supabaseClient.from('products').delete().eq('id', productId).then(({ error }) => {
        if (error) console.error('Supabase delete product error:', error);
      });
    }

    logAdminActivity(`Deleted product "${p.name}"`);
    showToast(`Removed ${p.name} from catalog`);
    renderProducts();
    renderAdminProductsList();
    renderAdminAnalytics();
  }
}

function promptReplaceProductImage(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  const newUrl = prompt(`Enter new Image URL or path for "${p.name}":`, p.image);
  if (newUrl && newUrl.trim() !== '') {
    p.image = newUrl.trim();
    saveProductsToStorage();

    if (supabaseClient) {
      supabaseClient.from('products').update({ image: p.image }).eq('id', p.id).then(({ error }) => {
        if (error) console.error('Supabase image update error:', error);
      });
    }

    logAdminActivity(`Replaced image for "${p.name}"`);
    showToast(`Updated image for ${p.name}`);
    renderProducts();
    renderAdminProductsList();
  }
}

function handleNewProdCatChange() {
  const catSelect = document.getElementById('new-prod-category');
  const pricesGrid = document.getElementById('new-prod-prices-grid');
  if (!catSelect || !pricesGrid) return;

  const cat = catSelect.value;
  if (cat === 'Gift hampers') {
    pricesGrid.className = 'grid grid-cols-1 gap-3';
    pricesGrid.innerHTML = `
      <div>
        <label class="block text-[10px] font-bold text-[#7A6248] uppercase">Gift Box Price (₹)</label>
        <input id="new-price-1" required type="number" value="999" class="w-full px-2.5 py-1.5 bg-white border border-[#E8DEC8] rounded-lg text-xs" />
      </div>
    `;
  } else {
    // Mixes (default)
    pricesGrid.className = 'grid grid-cols-3 gap-3';
    pricesGrid.innerHTML = `
      <div>
        <label class="block text-[10px] font-bold text-[#7A6248] uppercase">7 Days Pack (₹)</label>
        <input id="new-price-1" required type="number" value="499" class="w-full px-2.5 py-1.5 bg-white border border-[#E8DEC8] rounded-lg text-xs" />
      </div>
      <div>
        <label class="block text-[10px] font-bold text-[#7A6248] uppercase">15 Days Pack (₹)</label>
        <input id="new-price-2" required type="number" value="1049" class="w-full px-2.5 py-1.5 bg-white border border-[#E8DEC8] rounded-lg text-xs" />
      </div>
      <div>
        <label class="block text-[10px] font-bold text-[#7A6248] uppercase">30 Days Pack (₹)</label>
        <input id="new-price-3" required type="number" value="2070" class="w-full px-2.5 py-1.5 bg-white border border-[#E8DEC8] rounded-lg text-xs" />
      </div>
    `;
  }
}

function handleAdminAddProduct(e) {
  if (e) e.preventDefault();
  
  const rawName = document.getElementById('new-prod-name')?.value?.trim();
  if (!rawName) {
    alert('Please enter a product name');
    return;
  }
  const name = escapeHTML(rawName);
  const subtitle = escapeHTML(document.getElementById('new-prod-subtitle')?.value?.trim() || 'Signature Blend');
  const category = escapeHTML(document.getElementById('new-prod-category')?.value || 'Mixes');
  const bestseller = document.getElementById('new-prod-bestseller')?.value === 'true';
  const image = document.getElementById('new-prod-image')?.value?.trim() || './images/kido_mix_master.jpg';
  const description = escapeHTML(document.getElementById('new-prod-desc')?.value?.trim() || 'Wholesome signature mix crafted with care.');

  const p1 = parseInt(document.getElementById('new-price-1')?.value, 10) || 0;
  const p2 = parseInt(document.getElementById('new-price-2')?.value, 10) || 0;
  const p3 = parseInt(document.getElementById('new-price-3')?.value, 10) || 0;

  let prices = {};
  let defaultWeight = '7 Days';

  if (category === 'Gift hampers') {
    prices = { 'Gift Box': p1 || p2 || p3 || 999 };
    defaultWeight = 'Gift Box';
  } else {
    // Mixes
    prices = { '7 Days': p1 || 499, '15 Days': p2 || 1049, '30 Days': p3 || 2070 };
    defaultWeight = '7 Days';
  }

  const newProduct = {
    id: 'prod-' + Date.now(),
    name: name,
    subtitle: subtitle,
    category: category,
    bestseller: bestseller,
    description: description,
    prices: prices,
    defaultWeight: defaultWeight,
    image: image,
    inStock: true
  };

  PRODUCTS.unshift(newProduct);
  saveProductsToStorage();

  // Sync new product to Supabase Cloud Database
  if (supabaseClient) {
    supabaseClient.from('products').insert([productToDbRow(newProduct)]).then(({ error }) => {
      if (error) {
        console.error('Supabase add product error:', error);
        showToast('Supabase sync notice: ' + error.message);
      } else {
        console.log('Product added to Supabase:', newProduct.name);
      }
    });
  }

  // Reset store filter to 'All' so new product is front-and-center
  filterCategory('All');

  renderProducts();
  renderAdminProductsList();
  renderAdminAnalytics();

  logAdminActivity(`Added new product "${newProduct.name}" (${category})`);
  showToast(`Added ${newProduct.name} to store! 🎉`);

  // Reset add product form and restore default preview
  document.getElementById('admin-add-product-form')?.reset();
  const imgInput = document.getElementById('new-prod-image');
  if (imgInput) imgInput.value = './images/kido_mix_master.jpg';
  const imgPreview = document.getElementById('new-prod-img-preview');
  if (imgPreview) imgPreview.src = './images/kido_mix_master.jpg';
  handleNewProdCatChange();

  switchAdminTab('products');
}

function openAdminEditModal(productId) {
  const p = PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  document.getElementById('edit-prod-id').value = p.id;
  document.getElementById('edit-prod-name').value = p.name;
  document.getElementById('edit-prod-image').value = p.image;
  document.getElementById('edit-prod-img-preview').src = p.image;
  document.getElementById('edit-prod-instock').value = p.inStock === false ? 'false' : 'true';
  document.getElementById('edit-prod-bestseller').value = p.bestseller ? 'true' : 'false';
  document.getElementById('edit-prod-desc').value = p.description;

  const pricesGrid = document.getElementById('edit-prod-prices-grid');
  if (pricesGrid && p.prices) {
    const keys = Object.keys(p.prices);
    pricesGrid.innerHTML = keys.map((weightKey, idx) => `
      <div>
        <label class="block text-[10px] font-bold text-[#7A6248] uppercase truncate">${weightKey} (₹)</label>
        <input id="edit-price-${idx}" data-weight="${weightKey}" required type="number" value="${p.prices[weightKey]}" class="edit-price-input w-full px-2.5 py-1.5 bg-white border border-[#E8DEC8] rounded-lg text-xs text-[#2C1A11]" />
      </div>
    `).join('');
  }

  document.getElementById('admin-edit-modal')?.classList.add('active');
  if (window.lucide) lucide.createIcons();
}

function closeAdminEditModal() {
  document.getElementById('admin-edit-modal')?.classList.remove('active');
}

function handleAdminSaveEdit(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('edit-prod-id')?.value;
  const p = PRODUCTS.find(item => item.id === id);
  if (!p) return;

  p.name = escapeHTML(document.getElementById('edit-prod-name')?.value.trim());
  p.image = document.getElementById('edit-prod-image')?.value.trim();
  p.inStock = document.getElementById('edit-prod-instock')?.value === 'true';
  p.bestseller = document.getElementById('edit-prod-bestseller')?.value === 'true';
  p.description = escapeHTML(document.getElementById('edit-prod-desc')?.value.trim());

  // Save modified pack prices
  const editPriceInputs = document.querySelectorAll('.edit-price-input');
  editPriceInputs.forEach(input => {
    const weight = input.dataset.weight;
    const priceVal = parseInt(input.value, 10);
    if (weight && !isNaN(priceVal)) {
      p.prices[weight] = priceVal;
    }
  });

  saveProductsToStorage();

  // Sync edited product to Supabase Cloud Database
  if (supabaseClient) {
    supabaseClient.from('products').update(productToDbRow(p)).eq('id', p.id).then(({ error }) => {
      if (error) console.error('Supabase edit product error:', error);
      else console.log('Product updated in Supabase:', p.name);
    });
  }

  logAdminActivity(`Updated product details and prices for "${p.name}"`);
  showToast(`Updated ${p.name}`);

  closeAdminEditModal();
  renderProducts();
  renderAdminProductsList();
  renderAdminAnalytics();
}

async function changeAdminPin() {
  const newPin = document.getElementById('new-admin-pin')?.value.trim();
  if (newPin && newPin.length >= 4) {
    const newHash = await computeHash(newPin);
    localStorage.setItem('saj_admin_hash', newHash);
    localStorage.removeItem('saj_admin_pin');
    logAdminActivity('Updated security passcode (Cryptographic SHA-256 Hash).');
    showToast('Admin passcode updated securely! 🛡️');
    document.getElementById('new-admin-pin').value = '';
  } else {
    alert('Passcode must be at least 4 characters');
  }
}

function resetCatalogToFactory() {
  if (confirm('Are you sure you want to reset the store catalog back to factory defaults? All custom products and stock changes will be reset.')) {
    localStorage.removeItem('saj_products_v3');
    localStorage.removeItem('saj_products_v2');
    PRODUCTS = JSON.parse(JSON.stringify(DEFAULT_PRODUCTS));
    saveProductsToStorage();

    if (supabaseClient) {
      supabaseClient.from('products').upsert(DEFAULT_PRODUCTS.map(productToDbRow)).then(({ error }) => {
        if (error) console.error('Supabase factory reset error:', error);
      });
    }

    logAdminActivity('Factory catalog reset executed.');
    showToast('Catalog reset to factory defaults!');
    renderProducts();
    renderAdminProductsList();
    renderAdminAnalytics();
  }
}
