import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://vcgcryeuikzewukspsbt.supabase.co";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseURL || !supabaseAnonKey) {
  throw new Error("Supabase URL or Anon Key is missing!");
}

export const supabase = createClient(supabaseURL, supabaseAnonKey);
