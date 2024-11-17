import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { GiMeal } from "react-icons/gi";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const ServeMeal = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");
  const [allData, setAllData] = useState([]);

  const { data: requestedData = [], refetch } = useQuery({
    queryKey: ["mealRequests"],
    queryFn: async (req, res) => {
      const { data } = await axiosSecure.get("/mealRequests");
      return data;
    },
  });
  useEffect(() => {
    setAllData(requestedData);
  }, [requestedData]);

  const handleDeliver = async (id) => {
    const { data } = await axiosSecure.patch(`/mealRequests/${id}`);
    if (data.modifiedCount > 0) {
      refetch();
      toast.success("Food is serving to user");
    }
  };
  const handleSearch = async () => {
    const { data } = await axiosSecure.get(
      `/findMealsByUser?text=${searchText}`
    );
    setAllData(data);
  };

  return (
    <div>
      <div className="my-3 mx-8">
        <div className="join">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="User Name or Email"
            className="input input-bordered join-item"
          />
          <button onClick={handleSearch} className="btn border join-item">
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>User Email</th>
              <th>Use Name</th>
              <th>Status</th>
              <th>Serve</th>
            </tr>
          </thead>
          <tbody>
            {allData?.map((meal, idx) => (
              <tr key={meal._id}>
                <th>{idx + 1}</th>
                <td>{meal.title}</td>
                <td>{meal.email}</td>
                <td>{meal.displayName}</td>
                <td className="">
                  <span
                    className={`${
                      meal.status === "pending"
                        ? "bg-purple-400"
                        : "bg-green-400"
                    } text-white px-3 font-bold rounded-xl py-1`}
                  >
                    {meal.status}
                  </span>
                </td>
                <td>
                  <button
                    disabled={meal.status === "Delivered"}
                    onClick={() => handleDeliver(meal._id)}
                    className="btn btn-sm text-xl text-green-600"
                  >
                    <GiMeal />
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

export default ServeMeal;
