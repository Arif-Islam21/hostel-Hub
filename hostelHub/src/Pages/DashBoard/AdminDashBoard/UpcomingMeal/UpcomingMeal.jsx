import { useEffect, useState } from "react";
import UpcomingMealModal from "../../../../Components/UpcomingMealModal";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdPublish } from "react-icons/md";
import toast from "react-hot-toast";

const UpcomingMeal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [allMeals, setAllMeals] = useState([]);

  const { data: upcomingMealData = [], refetch } = useQuery({
    queryKey: ["upcomingMeals"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/upcomingMeals");
      return data;
    },
  });

  useEffect(() => {
    setAllMeals(upcomingMealData);
  }, [upcomingMealData]);

  const handleSortByLike = async (e) => {
    const { data: likeingSort = [] } = await axiosSecure.get(
      `/sortByLikes?likes=${e.target.value}`
    );
    setAllMeals(likeingSort);
  };
  const handleUplodMeal = async (id) => {
    try {
      const { data: upcomingMealInsert } = await axiosSecure.post(
        `/upload-upcoming-meal/${id}`
      );
      console.log(upcomingMealInsert);
      if (upcomingMealInsert.insertedId) {
        refetch();
        toast.success("Meal inserted successfully");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <div className="justify-between mx-8 flex mr-6 my-3">
        <div>
          <select
            defaultValue={"value"}
            onChange={handleSortByLike}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value={"value"}>
              Sort By Likes
            </option>
            <option>Hign to low</option>
            <option>Low to high</option>
          </select>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)} className="btn btn-outline">
            Add Upcoming Meal
          </button>
          <UpcomingMealModal
            refetch={refetch}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Likes</th>
              <th>Price</th>
              <th>Publish</th>
            </tr>
          </thead>
          <tbody>
            {allMeals?.map((meal, idx) => (
              <tr key={meal._id}>
                <th>{idx + 1}</th>
                <td>{meal.title}</td>
                <td>{meal.category}</td>
                <td>{meal.likes}</td>
                <td>{meal.priceInt}</td>
                <td>
                  <button
                    onClick={() => handleUplodMeal(meal._id)}
                    className="btn btn-sm text-xl text-purple-600"
                  >
                    <MdPublish />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingMeal;
