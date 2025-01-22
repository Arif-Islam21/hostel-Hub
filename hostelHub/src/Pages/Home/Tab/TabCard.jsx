import { Link } from "react-router-dom";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
const TabCard = ({ item }) => {
  // console.log(item);
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
          <Rating
            readonly
            initialRating={item?.ratingInt}
            emptySymbol={<CiStar size={24} color="#ffbf00" />}
            fullSymbol={<FaStar size={24} color="#ffbf00" />}
          />
          <p className="font-semibold">Price: ${item?.priceInt}</p>
        </div>
        <div className=" mt-2">
          <Link className="" to={`/mealDetails/${item._id}`}>
            <button className="btn btn-outline w-full bg-gradient-to-r from-themeColor to-themeSecendary hover:bg-themeColor/70 text-white border-none">
              Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCard;
