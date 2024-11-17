import { IoCartOutline } from "react-icons/io5";

const MenuCard = () => {
  return (
    <div className="flex justify-around group">
      <div className="relative ">
        <img
          className="rounded-full size-20"
          src="https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-319.jpg"
          alt=""
        />
        <div className="absolute size-16 bg-themeColor group-hover:flex hidden  z-10 rounded-full top-2 left-2">
          <div className="translate-x-1/2 translate-y-1/2 text-3xl text-white ">
            <IoCartOutline />
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">Vagitable Platter</h2>
          <hr />
        </div>
        <p className="font-bold text-gray-500">
          Welcome to Mereda , where culinary excellence meets…
        </p>
      </div>
      <div>
        <h2 className="text-2xl items-center flex text-themeColor">$32.0</h2>
      </div>
    </div>
  );
};

export default MenuCard;
