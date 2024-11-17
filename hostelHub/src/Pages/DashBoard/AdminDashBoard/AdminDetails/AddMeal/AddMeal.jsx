import SectionTitle from "../../../../../Components/SectionTitle";
import ThemeBtn from "../../../../../Components/ThemeBtn";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../Hooks/useAuth";
import useAxiosCommon from "../../../../../Hooks/useAxiosCommon";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddMeal = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [imageURl, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  // TODO: USE THIS API AS AXIOSSECURE
  const axiosCommon = useAxiosCommon();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleAddMeal = async (data) => {
    const { title, category, photo, ingredient, price, rating, description } =
      data;
    const postTime = new Date();
    const likes = 0;
    const review = 0;
    const priceInt = parseFloat(price);
    const ratingInt = parseFloat(rating);
    const adminName = user?.displayName || "Guast";
    const adminEmail = user?.email || "Guast";

    const image = photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
    setLoading(true);

    try {
      const imageResponse = await axiosCommon.post(imgbbUrl, formData);
      setImageURL(imageResponse.data.data.display_url);

      const newData = {
        title,
        category,
        ingredient,
        priceInt,
        ratingInt,
        description,
        postTime,
        photo: imageResponse.data.data.display_url,
        likes,
        review,
        adminName,
        adminEmail,
      };

      const { data } = await axiosCommon.post("/meals", newData);
      console.log(data);
      if (data.insertedId) {
        toast.success("meal added Successfully");
        // navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div>
      <SectionTitle subHeading={"Add Meal Here"} heading={"Please add meal"} />
      <form
        onSubmit={handleSubmit(handleAddMeal)}
        className="border-2 border-dashed rounded-md mx-4 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Title</span>
            </div>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: true })}
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <select
              defaultValue={"selected"}
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled value={"selected"}>
                Pick one
              </option>
              <option>Breakfast</option>
              <option>Lunch</option>
              <option>Dinner</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Image</span>
            </div>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input w-full input-bordered"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Ingredients</span>
            </div>
            <input
              type="text"
              {...register("ingredient", { required: true })}
              placeholder="Ingredients"
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              type="text"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="number"
              {...register("rating", { required: true })}
              min={0}
              max={5}
              placeholder="Rating"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control lg:col-span-2 col-span-1  w-full">
            <div className="label">
              <span className="label-text">Description</span>
            </div>
            <input
              type="text"
              {...register("description", { required: true })}
              placeholder="Description"
              className="input input-bordered w-full"
            />
          </label>
          <div className="lg:col-span-2 col-span-1 mx-auto ">
            <ThemeBtn text={"Add Meal"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMeal;
