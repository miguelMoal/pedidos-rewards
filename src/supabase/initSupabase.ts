import { createClient } from "@supabase/supabase-js";

import type { Database } from "./database.types";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error(
    "Las variables de entorno VITE_SUPABASE_URL y VITE_SUPABASE_KEY deben estar configuradas"
  );
}

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
