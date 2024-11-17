import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isPending: isAdminPending } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.role || "guast";
    },
  });

  const { data: count = 0, refetch } = useQuery({
    queryKey: ["addedCount"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addedMeals/${user.email}`);
      //   console.log(res.data);
      return res.data;
    },
  });

  return [isAdmin, isAdminPending, count, refetch];
};

export default useAdmin;
