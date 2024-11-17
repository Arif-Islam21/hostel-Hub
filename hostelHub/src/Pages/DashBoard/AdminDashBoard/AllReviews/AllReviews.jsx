import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AllReviews = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: reviewData = [], refetch } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/reviews");
      return data;
    },
  });

  const handleViewMeal = (id) => {
    navigate(`/mealDetails/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/reviews/${id}`);
        if (data.deletedCount > 0) {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

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
            <th>Delete</th>
            <th>View Meal</th>
          </tr>
        </thead>
        <tbody>
          {reviewData?.map((meal, idx) => (
            <tr key={meal._id}>
              <th>{idx + 1}</th>
              <td>{meal.mealsDetails.title}</td>
              <td>{meal.mealsDetails.likes}</td>
              <td>{meal.mealsDetails.review}</td>
              <td>
                <button
                  onClick={() => handleDelete(meal._id)}
                  className="btn btn-sm text-xl text-red-600"
                >
                  <MdDeleteForever />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleViewMeal(meal.mealsDetails._id)}
                  className="btn btn-sm text-xl text-purple-600"
                >
                  <FaEye />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllReviews;
