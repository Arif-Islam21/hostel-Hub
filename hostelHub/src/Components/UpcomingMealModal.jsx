import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useForm } from "react-hook-form";
import ThemeBtn from "./ThemeBtn";
import useUploadImage from "../Hooks/useUploadImage";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";

const UpcomingMealModal = ({ isOpen, setIsOpen, refetch }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const { handleUpload, error, loading } = useUploadImage();

  const handleAddMeal = async (data) => {
    // console.log(data);

    const image = data.photo[0];
    const { title, rating, price, ingredient, description, category } = data;
    const createTime = new Date();
    const priceInt = parseFloat(price);
    const ratingInt = parseFloat(rating);
    const likes = 0;
    const review = 0;
    const adminName = user?.displayName;
    const adminEmail = user?.email;
    try {
      const uploadedImage = await handleUpload(image);

      if (!uploadedImage) {
        console.error("Failed to upload image");
        return;
      }

      const formData = {
        title,
        ingredient,
        description,
        category,
        createTime,
        priceInt,
        ratingInt,
        uploadedImage,
        likes,
        review,
        adminName,
        adminEmail,
      };

      const { data: mealsResponse } = await axiosSecure.post(
        "/upcomingMeals",
        formData
      );
      if (mealsResponse.insertedId) {
        refetch();
        reset();
        toast.success("Upcoming Meals added");
      }
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-3xl space-y-4 border rounded-xl bg-black/60 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 text-white/80">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
          <form
            onSubmit={handleSubmit(handleAddMeal)}
            className="border-2 text-black border-dashed rounded-md mx-4 py-8"
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
                <button className="btn btn-outline text-white hover:bg-white hover:text-black font-bold">
                  Add Meal
                </button>
              </div>
            </div>
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default UpcomingMealModal;
