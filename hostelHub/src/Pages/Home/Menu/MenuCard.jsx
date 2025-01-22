import { IoCartOutline } from "react-icons/io5";

const MenuCard = ({ meal }) => {
  return (
    <div className="flex justify-between gap-4 group border-2 border-gray-200 shadow-lg rounded-lg p-2">
      <div className="relative flex justify-center items-center ">
        <img
          className="rounded-full size-10 w-full lg:size-20"
          src={meal?.image}
          alt=""
        />
        <div className="absolute lg:size-20 bg-themeColor/40 group-hover:flex hidden duration-300 transition-all z-10 rounded-full top-0 left-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl text-white font-bold">
            <IoCartOutline />
          </div>
        </div>
      </div>
      <div className="md:min-w-fit flex flex-grow flex-col justify-center">
        <h2 className="text-2xl font-semibold">{meal?.mealName}</h2>

        <p className="font-bold text-gray-500">{meal?.description}</p>
      </div>
      <div className="text-center flex justify-center items-center pr-3">
        <h2 className="text-2xl text-themeColor">{meal?.price}</h2>
      </div>
    </div>
  );
};

export default MenuCard;
