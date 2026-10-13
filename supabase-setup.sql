-- ==============================================================================
-- SAJ Organics: Supabase Database Schema & Initial Data
-- Project: https://vczfwqcsbzrmmbzmntnh.supabase.co
-- How to apply: Copy and paste this script into your Supabase SQL Editor and click "Run"
-- ==============================================================================

-- 1. Create Products Table
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  subtitle TEXT,
  category TEXT NOT NULL,
  bestseller BOOLEAN DEFAULT false,
  description TEXT,
  prices JSONB NOT NULL,
  default_weight TEXT,
  image TEXT,
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Orders Table (Sync orders placed by customers across all devices)
CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT,
  customer_phone TEXT,
  customer_address TEXT,
  payment_method TEXT,
  delivery_slot TEXT,
  items JSONB,
  subtotal NUMERIC,
  delivery_charge NUMERIC,
  grand_total NUMERIC,
  status TEXT DEFAULT 'Processing',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies (Allow public to view products and place orders, allow admin to edit)
DROP POLICY IF EXISTS "Public can read products" ON public.products;
CREATE POLICY "Public can read products" ON public.products FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow product modifications" ON public.products;
CREATE POLICY "Allow product modifications" ON public.products FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Allow public to create orders" ON public.orders;
CREATE POLICY "Allow public to create orders" ON public.orders FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow read and update orders" ON public.orders;
CREATE POLICY "Allow read and update orders" ON public.orders FOR ALL USING (true) WITH CHECK (true);

-- 5. Seed Initial 11 Signature Mixes
INSERT INTO public.products (id, name, subtitle, category, bestseller, description, prices, default_weight, image, in_stock)
VALUES
  ('kido-mix', 'KidoMix', 'Kids Special Superfood', 'Mixes', true, 'Wholesome blend of almonds, cashews, dates, figs, seeds and raisins crafted specially for growing kids.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/kido_mix_master.jpg', true),
  ('berry-mix', 'BerryMix', 'Antioxidant Powerhouse', 'Mixes', true, 'Rich blend of cranberries, blueberries, roasted nuts, pumpkin & sunflower seeds.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/berry_mix_master.jpg', true),
  ('daily-dose', 'Daily Dose', 'Everyday Vitality Mix', 'Mixes', false, 'Balanced daily mix of almonds, cashews, walnuts, figs, flax seeds and raisins.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/daily_dose_master.jpg', true),
  ('slim-bites', 'SlimBites', 'Fitness & Fiber Crunch', 'Mixes', false, 'Low-calorie high-fiber blend of seeds, walnuts, almonds and cranberries for healthy snacking.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/slim_bites_master.jpg', true),
  ('nutri-glow', 'NutriGlow', 'Radiance & Wellness Mix', 'Mixes', false, 'Gourmet blend of pistachios, figs, almonds, cashews, and berries for natural skin radiance.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/nutri_glow_master.jpg', true),
  ('vitamix', 'Vitamix', 'Multi-Vitamin & Immune Booster', 'Mixes', true, 'Essential multi-vitamin blend of almonds, cashews, walnuts, figs, pumpkin & sunflower seeds.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/vitamix_master.jpg', true),
  ('gainora', 'Gainora', 'High-Energy Mass & Vitality Mix', 'Mixes', true, 'Calorie-rich superfood blend of almonds, cashews, walnuts, dates, figs, pumpkin seeds and golden raisins for natural energy.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/gainora_master.jpg', true),
  ('mothers-bloom', 'Mother''s Bloom', 'Nourishing Lactation & Wellness Mix', 'Mixes', true, 'Gentle, wholesome blend of almonds, cashews, dates, figs, and pumpkin seeds crafted for maternal strength and nourishment.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/mothers_bloom_master.jpg', true),
  ('overnight-dissolve', 'Overnight Dissolve', 'Oats, Chia & Berry Breakfast Bowl', 'Mixes', false, 'Instant nutrient-dense breakfast blend of chia seeds, rolled oats, almonds, dried berries, and banana crunch.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/overnight_dissolve_master.jpg', true),
  ('nutri-care', 'NutriCare', 'Holistic Vitality & Daily Wellness Mix', 'Mixes', true, 'Gourmet daily wellness mix of almonds, walnuts, pistachios, pumpkin seeds, and flax seeds for heart and immunity support.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/nutri_care_master.jpg', true),
  ('nutri5', 'Nutri5', '5 Super-Nut & 5 Super-Seed Blend', 'Mixes', true, 'Ultimate power blend of 5 premium nuts and 5 super seeds rich in omega-3, protein, magnesium, and healthy minerals.', '{"7 Days":499,"15 Days":1049,"30 Days":2070}'::jsonb, '7 Days', './images/nutri5_master.jpg', true)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  subtitle = EXCLUDED.subtitle,
  category = EXCLUDED.category,
  bestseller = EXCLUDED.bestseller,
  description = EXCLUDED.description,
  prices = EXCLUDED.prices,
  default_weight = EXCLUDED.default_weight,
  image = EXCLUDED.image,
  in_stock = EXCLUDED.in_stock;
