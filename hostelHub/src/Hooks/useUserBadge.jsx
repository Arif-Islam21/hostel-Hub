import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useUserBadge = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data } = useQuery({
    queryKey: ["userBadge"],
    enabled: !loading,
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${user?.email}`);
      return data;
    },
  });

  const badge = data?.badge;

  return { badge };
};

export default useUserBadge;
