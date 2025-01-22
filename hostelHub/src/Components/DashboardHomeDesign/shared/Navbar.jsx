import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { PiCastleTurretDuotone } from "react-icons/pi";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";

const Navbar = () => {
  const navitems = [
    {
      id: 1,
      title: "Dashboard",
      icon: <IoHomeOutline size={20} />,
    },
    {
      id: 2,
      title: "FirstGuru",
      icon: <BsStars size={20} />,
    },
    {
      id: 3,
      title: "TownHall",
      icon: <PiCastleTurretDuotone size={20} />,
    },
    {
      id: 4,
      title: "AI Evalution",
      icon: <AiTwotoneThunderbolt size={20} />,
    },
    {
      id: 5,
      title: "Performence",
      icon: <AiOutlineStock size={20} />,
    },
    {
      id: 6,
      title: "Mock Test",
      icon: <LuClipboardList size={20} />,
    },
  ];

  const links = (
    <>
      {navitems.map((item) => (
        <li key={item.id} className="font-bold hover:text-blue-400">
          <a>
            {item.icon}
            {item.title}
          </a>
        </li>
      ))}
    </>
  );

  return (
    <div className="bg-[#303947] text-[#B4B9C0]">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <span className="rubic italic text-[#30C7C2] text-3xl">F</span>
            <span className="text-white">Firstbench</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-8">
            <FaRegBell size={26} />
            <div className="flex items-center gap-4 bg-[#1D2633] rounded-md p-2 font-bold">
              <h2 className="text-xl p-2 px-4 font-bold text-center rounded-md text-[#303947] bg-[#F8C2B3]">
                p
              </h2>
              <h3>Profile</h3>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
