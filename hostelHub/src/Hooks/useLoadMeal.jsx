import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useLoadMeal = () => {
  const axiosCommon = useAxiosCommon();

  const { data } = useQuery({
    queryKey: ["meals"],
    queryFn: async () => {
      const mealsData = await axiosCommon.get("/meals");
      return mealsData.data;
    },
  });

  return [data];
};

export default useLoadMeal;
