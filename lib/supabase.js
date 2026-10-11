import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// placeholder prevents build crash, real values come from Vercel at runtime
export const supabase = createClient(
  supabaseUrl || 'https://qltzbdaenrcvcebshddk.supabase.co',
  supabaseAnonKey || 'sb_publishable_0C2wdHm17yOdrLg10F2IKg_Hdo8dw1h'
)
