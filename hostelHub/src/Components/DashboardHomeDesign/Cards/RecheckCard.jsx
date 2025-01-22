import { TbFileSymlink } from "react-icons/tb";
import { TbInfoSquareRounded } from "react-icons/tb";

const RecheckCard = () => {
  return (
    <div className="card bg-white p-4 shadow-md w-full">
      <div>
        <h2 className="text-xl font-semibold text-black">Revisit Paper</h2>
        <p className="text-gray-400 font-bold text-sm">
          Challange your friend by simply shareing a link to the page
        </p>
      </div>
      <div className="flex justify-center items-center">
        <button className="btn max-w-56 min-w-40 bg-themeColor/80 text-white font-bold my-4 hover:text-white hover:border-themeColor">
          <TbFileSymlink size={20} />
          Visit
        </button>
      </div>
      <div className="flex justify-center items-start">
        <p className="text-lg">
          <TbInfoSquareRounded />
        </p>
        <p className=" text-gray-500 font-bold text-sm text-center">
          Instruction for how to upload your handwritten materials given
        </p>
      </div>
    </div>
  );
};

export default RecheckCard;
