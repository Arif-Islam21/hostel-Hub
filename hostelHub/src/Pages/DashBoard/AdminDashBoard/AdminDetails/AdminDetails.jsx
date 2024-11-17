import useAuth from "../../../../Hooks/useAuth";

const AdminDetails = ({ text, value }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <p className="text-3xl text-red-700">Loading please wait</p>;
  }

  return (
    <div className="card my-4 bg-base-100">
      <figure>
        <div className="avatar my-2">
          <div className=" ring-offset-base-100 lg:w-16 rounded-full ring">
            <img src={user?.photoURL} />
          </div>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{user?.displayName}</h2>
        <p>{user?.email}</p>
        <div className="card-actions justify-start">
          {text} {value}
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;
