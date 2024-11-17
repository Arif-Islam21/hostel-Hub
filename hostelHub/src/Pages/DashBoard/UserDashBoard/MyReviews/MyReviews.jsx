import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const MyReviews = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { data: reviewData = [], refetch } = useQuery({
    queryKey: ["myReviews"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/reviews/${user?.email}`);
      return data;
    },
  });
  const handleMove = (id) => {
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
            <th>Edit</th>
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
              <td data-tip={meal.reviewText} className="tooltip">
                {meal.reviewText.length > 20
                  ? meal.reviewText.slice(0, 15) + "..."
                  : meal.reviewText}
              </td>
              <td>
                <button className="btn text-2xl text-black">
                  <MdEdit />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(meal._id)}
                  className="text-2xl btn text-red-700"
                >
                  <MdDeleteForever />
                </button>
              </td>

              <td>
                <button
                  onClick={() => handleMove(meal.mealsDetails._id)}
                  className="btn text-green-600"
                >
                  View Meal
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviews;
