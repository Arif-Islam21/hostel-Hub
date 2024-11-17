import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import NothingPage from "../../../../Components/NothingPage";

const UserTransections = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: transectionData = [] } = useQuery({
    queryKey: ["userTransections"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/transections/${user?.email}`);
      return data;
    },
  });
  if (transectionData.length === 0) {
    return <NothingPage />;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Amount</th>
            <th>Created At</th>
            <th>Currency</th>
            <th>Transection Id</th>
          </tr>
        </thead>
        <tbody>
          {transectionData?.map((meal, idx) => (
            <tr key={meal._id}>
              <th>{idx + 1}</th>
              <td>${meal.amount}</td>
              <td>{new Date(meal.created * 1000).toLocaleDateString()}</td>
              <td>{meal.currency}</td>
              <td>{meal.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTransections;
