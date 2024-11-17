import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdCancel } from "react-icons/md";
import { useEffect } from "react";
import toast from "react-hot-toast";
import NothingPage from "../../../../Components/NothingPage";

const RequestedMeal = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: allMeals = [], refetch } = useQuery({
    queryKey: ["requestedMeals"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/mealRequests/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (id) => {
    const { data } = await axiosSecure.delete(`/mealRequests/${id}`);
    if (data.deletedCount > 0) {
      refetch();
      toast.success("You have canceled this food");
    }
  };
  if (allMeals.length === 0) {
    return <NothingPage />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Likes</th>
            <th>Reviews</th>
            <th>Distributor Name</th>
            <th>Status</th>
            <th>Cancel</th>
          </tr>
        </thead>
        <tbody>
          {allMeals?.map((meal, idx) => (
            <tr key={meal._id}>
              <th>{idx + 1}</th>
              <td>{meal.title}</td>
              <td>{meal.likes}</td>
              <td>{meal.review}</td>
              <td>{meal.adminName}</td>
              <td>{meal.status}</td>
              <td>
                <button
                  onClick={() => handleDelete(meal._id)}
                  className="btn text-xl text-themeSecendary"
                >
                  <MdCancel />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestedMeal;
