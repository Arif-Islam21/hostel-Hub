import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UpcomingCard from "./UpcomingCard";

const UpcomingMeals = () => {
  const axiosSecure = useAxiosSecure();

  const { data: upcomingMeals = [], refetch } = useQuery({
    queryKey: ["showUpcomingMeals"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/upcomingMeals");
      return data;
    },
  });

  return (
    <div>
      <SectionTitle
        heading={"meals are cooking"}
        subHeading={"Please order your food"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {upcomingMeals.map((meal) => (
          <UpcomingCard key={meal._id} refetch={refetch} item={meal} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMeals;
