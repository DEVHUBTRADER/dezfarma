@@ .. @@
 import { createClient } from '@supabase/supabase-js'

-const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
-const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
+const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
+const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo_key_placeholder'

 if (!supabaseUrl || !supabaseAnonKey) {
-  console.error('Supabase URL ou ANON KEY não configurados');
+  console.warn('Supabase URL ou ANON KEY não configurados - usando valores demo');
 }

-export const supabase = createClient(supabaseUrl, supabaseAnonKey)
+export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
+  auth: {
+    persistSession: false
+  }
+})