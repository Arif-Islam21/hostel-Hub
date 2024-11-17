import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Rating from "react-rating";
import { FaRegStar, FaRegThumbsUp, FaStar, FaThumbsUp } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { GiHotMeal } from "react-icons/gi";
import { MdReviews } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";
import Review from "../../../Components/Review";
import { useState } from "react";
import toast from "react-hot-toast";
import useUserBadge from "../../../Hooks/useUserBadge";

const DisplayMeal = () => {
  const { user, loading } = useAuth();
  const { email, displayName, photoURL } = user;
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { badge } = useUserBadge();

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: mealData = {}, refetch } = useQuery({
    queryKey: [id, "mealDetails"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/meals/${id}`);
      return data;
    },
  });
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const {
    _id,
    category,
    priceInt,
    likes,
    review,
    adminEmail,
    photo,
    description,
    ratingInt,
    ingredient,
    title,
    adminName,
    postTime,
  } = mealData;

  const likedUsers = mealData?.likedUser;
  const isLiked = likedUsers?.includes(email);

  // handle reaction
  const handleReaction = async () => {
    const email = user?.email;
    await axiosSecure.put(`/reacts/${id}`, { email });
    refetch();
  };

  const handleMealRequest = async () => {
    const requestTime = new Date();
    const requestData = {
      mealId: _id,
      category,
      priceInt,
      likes,
      review,
      adminEmail,
      photo,
      description,
      ratingInt,
      ingredient,
      title,
      adminName,
      postTime,
      email,
      displayName,
      requestTime,
      photoURL,
      status: "pending",
    };
    if (badge === "bronge") {
      return toast.error("Please subscribe a plan to like");
    }
    const { data } = await axiosSecure.post("/mealRequest", requestData);
    console.log(data);
    if (data.insertedId) {
      toast.success("Please wait for your meal");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-[70vh]">
        <div className="hero-content  w-full flex-col lg:flex-row-reverse">
          <div className="text-center pl-6 lg:w-2/3 w-full lg:text-left">
            <h1 className="text-3xl uppercase font-bold">{title}</h1>
            <p className="py-2">{description}</p>
            <div className="flex gap-3 items-center">
              <Rating
                className=""
                readonly
                fractions={2}
                initialRating={ratingInt}
                emptySymbol={<FaRegStar className="gap-2 border-themeColor" />}
                fullSymbol={<FaStar className="gap-2 text-themeColor" />}
              />{" "}
              ({ratingInt})
            </div>
            <p className="my-2">
              <span className="font-bold text-lg mr-2">Ingredients: </span>{" "}
              {ingredient}
            </p>
            <p className="my-2">
              <span className="font-bold text-lg mr-2">Distributor: </span>
              {adminName}
            </p>
            <p className="my-2">
              <span className="font-bold text-lg mr-2">Post Time: </span>
              {new Date(postTime).toLocaleDateString()}
            </p>
            <div className="my-8">
              <span className="text-xl mr-2 pb-2">{likedUsers?.length}</span>
              <button
                onClick={handleReaction}
                data-tip="Like"
                className="btn mr-6 tooltip text-2xl btn-sm px-4"
              >
                {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
              </button>
              <button
                onClick={handleMealRequest}
                data-tip="Request Meal"
                className="btn mr-6 tooltip text-2xl btn-sm px-4"
              >
                <GiHotMeal />
              </button>
              <button
                onClick={open}
                data-tip="Review"
                className="btn tooltip text-2xl btn-sm px-4"
              >
                <Review
                  open={open}
                  close={close}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  email={email}
                  fodId={_id}
                />
                <MdReviews />
              </button>
            </div>
          </div>
          <div className="card bg-base-100 w-full lg:w-1/3 max-w-sm shrink-0 shadow-2xl">
            <img className="rounded-lg" src={photo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMeal;
