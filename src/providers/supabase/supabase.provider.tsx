import { SupabaseClient, createClient } from "@supabase/supabase-js";
import { createContext, useMemo } from "react";

export const SupaBaseContext = createContext<{
  supabase: SupabaseClient<any, "public", any>;
}>({} as any);

const SupaBaseProvider = ({ childern }: any) => {
  const supabase = useMemo(
    () =>
      createClient(
        import.meta.env.VITE_SUPABSE_PUBLIC_URL,
        import.meta.env.VITE_SUPABASE_CLIENT_KEY
      ),
    []
  );

  return (
    <SupaBaseContext.Provider value={{ supabase }}>
      {childern}
    </SupaBaseContext.Provider>
  );
};

export default SupaBaseProvider;
