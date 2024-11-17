import { Link } from "react-router-dom";
import logo from "/wer.svg";

const ThemeLogo = () => {
  return (
    <Link to={"/"} className="btn h-20 btn-ghost text-xl">
      <img
        className="h-16 w-16 rounded-xl bg-transparent"
        src={logo}
        alt="hostel hub logo"
      />
      <span className="text-2xl text-themeColor">Hostel Hub</span>
    </Link>
  );
};

export default ThemeLogo;
