import { IoBagCheckOutline } from "react-icons/io5";

const StudentMarkCard = () => {
  return (
    <div className="flex items-center justify-around bg-gray-600 rounded-md py-3 ">
      <div className="bg-gray-400 p-2 rounded-md">
        <IoBagCheckOutline size={24} />
      </div>
      <div className="border-r-2 border-gray-600 pr-2">
        <h4 className="bg-secondColor rounded-full px-2 uppercase text-white">
          Your Orders
        </h4>
        <h2 className="text-gray-600 pl-4">
          <span className="text-xl text-black font-semibold">34</span>
        </h2>
      </div>
      {/* <div>
        <h3 className="bg-thirdColor p-2 rounded-xl font-bold text-white text-center">
          76%
        </h3>{" "}
        <span className="text-thirdColor text-center font-semibold">
          Accuracy
        </span>
      </div> */}
    </div>
  );
};

export default StudentMarkCard;
