import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://hostel-hub-server-chi.vercel.app",
  // baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
