import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { createContext, useMemo } from "react";

export const SupaBaseContext = createContext<{
  supabase: SupabaseClient<any, "public", any>;
}>({} as any);

const supabase = createClient(
  import.meta.env.VITE_SUPABSE_PUBLIC_URL,
  import.meta.env.VITE_SUPABASE_CLIENT_KEY
);

const SupaBaseProvider = ({ children }: any) => {
  return (
    <SupaBaseContext.Provider value={{ supabase }}>
      {children}
    </SupaBaseContext.Provider>
  );
};

export default SupaBaseProvider;
