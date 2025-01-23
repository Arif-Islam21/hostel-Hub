import { CiStar } from "react-icons/ci";
import { FaComment, FaShare, FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import Rating from "react-rating";
import useUserBadge from "../../Hooks/useUserBadge";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { FaThumbsUp } from "react-icons/fa";
import toast from "react-hot-toast";

const UpcomingCard = ({ item, refetch }) => {
  const { _id, title, description, ratingInt, priceInt, uploadedImage } = item;
  const { badge } = useUserBadge();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const likedUsers = item?.likedUser;
  const isLiked = likedUsers?.includes(user?.email);

  const handleLike = async (id) => {
    const email = user.email;
    if (badge === "bronge") {
      return toast.error("Please subscribe a plan to like");
    }
    axiosSecure.put(`/upcomingLike/${id}`, { email });
    refetch();
  };

  return (
    <div className="mb-8">
      <div className="card card-compact bg-gray-200 w-96 shadow-xl">
        <figure>
          <img
            src={uploadedImage}
            alt="Shoes"
            className="w-full max-h-56 rounded-b-none rounded-t-md"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="flex justify-between mx-3 items-center">
            <Rating
              readonly
              placeholderRating={ratingInt}
              emptySymbol={
                <CiStar className="border-green-600 size-6 w-full" />
              }
              placeholderSymbol={<FaStar className="size-6 text-amber-400" />}
              fullSymbol={<FaStar className="size-6 text-amber-400" />}
            />
            <div>
              <p>Price: ${priceInt}</p>
            </div>
          </div>
          <div className="card-actions justify-around mt-4">
            <div>
              <span className="text-xl mr-3 mb-2">{likedUsers?.length}</span>
              <button
                onClick={() => handleLike(_id)}
                className="btn btn-sm text-2xl px-2"
              >
                {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </button>
            </div>
            <button className="btn btn-sm text-2xl px-2">
              <FaComment />
            </button>
            <button className="btn btn-sm text-2xl px-2">
              <FaShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
