import { useEffect, useState } from "react";
import useSupabase from "./use-supabase";
import { useUserData } from "./use-user-data";

interface IBranch {
  address: string;
  city: string;
  country: string;
  id: string;
  name: string;
  parent_organization: string;
  state: string;
}
export const useManageBranch = () => {
  const { supabase } = useSupabase();
  const { userData } = useUserData();

  const [loading, setLoading] = useState(false);
  const [branchList, setBranchList] = useState<IBranch[]>([]);
  const [error, setError] = useState();
  const fetchBranchList = async () => {
    setLoading(true);
    try {
      let { data, error }: any = await supabase
        .from("oragnization_branch")
        .select("*");
      console.log(data);
      if (!error) {
        setBranchList(data);
      } else {
        setError(error);
      }
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  console.log(userData);

  const addBranch = async (branch: Partial<IBranch>) => {
    try {
      const { data, error }: any = await supabase
        .from("oragnization_branch")
        .insert([{ ...branch }])
        .select();
      console.log(data, error);
      if (data) {
        fetchBranchList();
      }
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    fetchBranchList();
  }, []);

  return { addBranch, loading, error, branchList, refetch: fetchBranchList };
};
