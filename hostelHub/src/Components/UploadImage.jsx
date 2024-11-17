import useAxiosCommon from "../Hooks/useAxiosCommon";

const UploadImage = ({ image }) => {
  const axiosCommon = useAxiosCommon();
  const [imageURl, setImageURL] = useState("");

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", image);
    const imgbbApiKey = import.meta.env.VITE_IMGBB_API_KEY;
    const imgbbUrl = `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`;

    try {
      const response = await axiosCommon.post(imgbbUrl, formData);
      setImageURL(response.data.data.display_url);
    } catch (error) {
      console.error(error);
    }
  };

  return imageURl;
};

export default UploadImage;
