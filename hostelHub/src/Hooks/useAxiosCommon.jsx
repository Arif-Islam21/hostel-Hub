import axios from "axios";

const axiosCommon = axios.create({
  // baseURL: "https://hostel-hub-server-chi.vercel.app",
  baseURL: "http://localhost:5000",
});
const useAxiosCommon = () => {
  return axiosCommon;
};

export default useAxiosCommon;
