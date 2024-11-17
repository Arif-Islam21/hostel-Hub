import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import useAdmin from "../../../../Hooks/useAdmin";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const [isAdmin] = useAdmin();
  const [searchText, setSearchText] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  const handleMakeAdmin = (email) => {
    console.log(email);
    Swal.fire({
      title: "Are you sure?",
      text: "If you make him admin you can't retrive..",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF2400",
      cancelButtonColor: "#532810",
      confirmButtonText: "Yes, Make him Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(`/makeAdmin/${email}`);
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: `${email} is admin now`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Failed",
            text: `Some error ocoured`,
            icon: "error",
          });
        }
      }
    });

    // axiosSecure.patch();
  };

  const { data: userdata = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });
  useEffect(() => {
    setAllUsers(userdata);
  }, [userdata]);

  const handleSearchUser = async () => {
    const { data } = await axiosSecure.get(
      `/findUserByName?text=${searchText}`
    );
    setAllUsers(data);
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
          <button onClick={handleSearchUser} className="btn border join-item">
            Search
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Subscription</th>
              </tr>
            </thead>
            <tbody>
              {allUsers?.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>{user.displayName}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role === "admin" ? (
                      <button
                        data-tip="admin here"
                        className="btn tooltip  px-6 text-themeColor text-2xl"
                      >
                        <GrUserAdmin />
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user?.email)}
                        data-tip="Normal User"
                        className="btn tooltip px-6 text-themeColor text-2xl"
                      >
                        <FaRegUser />
                      </button>
                    )}
                  </td>
                  <td>{user.badge}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
