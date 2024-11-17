import { Link } from "react-router-dom";

const TabCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={item?.photo || item?.uploadedImage}
          className="rounded-md w-full max-h-56 rounded-b-none rounded-t-md mt-4"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">{item?.title}</h2>
        <div className="flex justify-between items-center text-center">
          <p>Rating: {item?.ratingInt}</p>
          <p>Price: {item?.priceInt}</p>
        </div>
        <div className="card-actions mt-2 justify-center">
          <Link to={`/mealDetails/${item._id}`}>
            <button className="btn btn-outline bg-themeColor text-white border-none">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
