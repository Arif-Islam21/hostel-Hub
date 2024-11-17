import { useState } from "react";
import useAxiosCommon from "./useAxiosCommon";

const useUploadImage = () => {
  const axiosCommon = useAxiosCommon();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (image) => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;
    setLoading(true);
    setError("");

    try {
      const response = await axiosCommon.post(imgbbUrl, formData);
      return response.data.data.display_url;
    } catch (error) {
      console.error(error);
      setError(error?.response?.data?.message || error.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { handleUpload, error, loading };
};

export default useUploadImage;
