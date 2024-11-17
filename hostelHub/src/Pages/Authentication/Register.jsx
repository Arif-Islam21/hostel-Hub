import { useState } from "react";
import logo from "/wer.svg";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../Hooks/useAxiosCommon";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { emailSignUp } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageURl, setImageURL] = useState("");
  const [loading, setLoading] = useState(false);
  const axiosCommon = useAxiosCommon();

  const handleRegister = async (data) => {
    const image = data.photo[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
    setLoading(true);

    try {
      const response = await axiosCommon.post(imgbbUrl, formData);
      setImageURL(response.data.data.display_url);

      const { user } = await emailSignUp(data.email, data.password);

      // await updateUser(data.name, imageURl);

      await updateProfile(user, {
        displayName: data.name,
        photoURL: response.data.data.display_url,
      });

      // send data to server

      const filteredData = {
        displayName: user.displayName,
        email: user.email,
        metadata: user.metadata,
        photoURL: user.photoURL,
        uid: user.uid,
        badge: "bronge",
      };

      const { data: successData } = await axiosCommon.post(
        "/users",
        filteredData
      );
      console.log(successData);
      if (successData.insertedId) {
        toast.success("Successfully Signed Up!");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

    // console.log(data, image);
  };

  return (
    <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md mt-[5vh]">
      <div className="flex justify-center mx-auto">
        <img className="w-auto h-12 sm:h-8" src={logo} alt="" />
      </div>

      <form onSubmit={handleSubmit(handleRegister)} className="mt-6">
        <div className="relative flex items-center mt-8">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </span>

          <input
            type="text"
            {...register("name")}
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Username"
          />
        </div>
        <label
          htmlFor="dropzone-file"
          className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
            />
          </svg>

          <h2 className="mx-3 text-gray-400">Profile Photo</h2>

          <input
            {...register("photo", { required: true })}
            id="dropzone-file"
            type="file"
            className="hidden"
          />
        </label>
        <div className="relative flex items-center mt-6">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>

          <input
            type="email"
            required
            {...register("email", { required: true })}
            className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Email address"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type="password"
            {...register("password", { required: true })}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Password"
          />
        </div>

        <div className="relative flex items-center mt-4">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-3 text-gray-300 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </span>

          <input
            type="password"
            {...register("confirmPass")}
            className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
            placeholder="Confirm Password"
          />
        </div>

        <div className="mt-6">
          <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </form>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        {" "}
        Already have an account?{" "}
        <Link
          to={"/login"}
          href="#"
          className="font-medium text-gray-700  hover:underline"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default Register;
