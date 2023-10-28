import { useContext } from "react";
import { SupaBaseContext } from "../providers/supabase/supabase.provider";

const useSupabase = () => {
  const { supabase } = useContext(SupaBaseContext);
  return { supabase };
};
export default useSupabase;
