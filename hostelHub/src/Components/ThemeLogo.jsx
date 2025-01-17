import { Link } from "react-router-dom";
import logo from "/wer.svg";

const ThemeLogo = () => {
  return (
    <Link
      to={"/"}
      className="btn bg-gradient-to-r from-themeColor to-themeSecendary font-bold text-xl"
    >
      <img
        className="size-10 rounded-xl bg-transparent"
        src={logo}
        alt="hostel hub logo"
      />
      <span className="text-2xl text-white">Hostel Hub</span>
    </Link>
  );
};

export default ThemeLogo;
