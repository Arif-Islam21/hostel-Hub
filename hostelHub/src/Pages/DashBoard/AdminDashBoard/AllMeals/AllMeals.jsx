import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { GrUpdate } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { GrView } from "react-icons/gr";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const AllMeals = () => {
  const axiosSecure = useAxiosSecure();
  const [allMeals, setAllMeals] = useState([]);

  const { data: initialMeals = [], refetch } = useQuery({
    queryKey: ["allMeals"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/meals");
      return data;
    },
  });

  useEffect(() => {
    if (initialMeals.length) {
      setAllMeals(initialMeals);
    }
  }, [initialMeals]);

  const handleDeleteMeal = (id) => {
    // console.log(id);
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
        const { data } = await axiosSecure.delete(`/meals/${id}`);
        if (data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          // TODO: UPDATE THE ADMIN PANEL ADDMEAL COUNT WHEN YOU DELETE
          refetch();
        }
      }
    });
  };

  const handleSortByLikes = async (sort) => {
    const { data } = await axiosSecure.get(`/searchByLikes?likes=${sort}`);
    // console.log(data);
    setAllMeals(data);
  };

  const handleSortByReview = async (sort) => {
    const { data } = await axiosSecure.get(`/searchByReviews?review=${sort}`);
    console.log(data);
    setAllMeals(data);
  };

  return (
    <div className="overflow-x-auto">
      <div className="my-4 flex ml-6 gap-6">
        <select
          onChange={(e) => handleSortByLikes(e.target.value)}
          defaultValue={"selected"}
          className="select select-bordered w-full max-w-40"
        >
          <option disabled value={"selected"}>
            Sort By Like
          </option>
          <option>Hign to low</option>
          <option>Low to high</option>
        </select>
        <select
          onChange={(e) => handleSortByReview(e.target.value)}
          defaultValue={"selected"}
          className="select select-bordered w-full max-w-40"
        >
          <option disabled value={"selected"}>
            Sort By Reviews
          </option>
          <option>Hign to low</option>
          <option>Low to high</option>
        </select>
      </div>
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Likes</th>
            <th>Reviews</th>
            <th>Distributor Name</th>
            <th>Update</th>
            <th>Delete</th>
            <th>View Meal</th>
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
              <td>
                <button className="btn text-green-700">
                  <GrUpdate />
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleDeleteMeal(meal._id)}
                  className="btn text-themeColor text-xl"
                >
                  <MdDeleteForever />
                </button>
              </td>
              <td>
                <button className="btn text-xl text-themeSecendary">
                  <GrView />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllMeals;
