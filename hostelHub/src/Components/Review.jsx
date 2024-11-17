import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";

import Rating from "react-rating";
import { useRef } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Review = ({ open, close, isOpen, setIsOpen, email, fodId }) => {
  const formRef = useRef(null);
  const ratingRef = useRef(5);
  const axiosSecure = useAxiosSecure();

  const handleRating = (value) => {
    ratingRef.current = value;
  };
  const handleReview = async () => {
    if (formRef.current) {
      const reviewText = formRef.current.elements["reviewText"].value;
      const rating = ratingRef.current;
      console.log({ rating, reviewText, email, fodId });
      const reviewData = { rating, reviewText, email, fodId };
      const { data } = await axiosSecure.post("/reviews", reviewData);
      if (data.insertedId) {
        toast.success("Thanks for your review");
      }
    }
  };

  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-black/60 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 text-center font-medium text-white"
              >
                Rate Us
              </DialogTitle>

              <form ref={formRef}>
                <div className="justify-center flex my-3">
                  <Rating
                    onChange={handleRating}
                    placeholderRating={5}
                    emptySymbol={
                      <CiStar className="border-green-600 size-6 w-full" />
                    }
                    placeholderSymbol={
                      <FaStar className="size-6 text-amber-400" />
                    }
                    fullSymbol={<FaStar className="size-6 text-amber-400" />}
                  />
                </div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-white/60">
                      Write about us!
                    </span>
                  </div>
                  <textarea
                    name="reviewText"
                    className="textarea textarea-bordered h-24"
                  ></textarea>
                </label>
              </form>
              <div className="flex gap-4">
                <button className="btn my-4" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn my-4"
                  onClick={() => {
                    handleReview();
                    setIsOpen(false);
                  }}
                >
                  Review
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default Review;
