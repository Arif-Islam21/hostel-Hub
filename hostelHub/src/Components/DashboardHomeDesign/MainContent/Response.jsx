import { FaArrowUp } from "react-icons/fa";
import { IoTimerOutline } from "react-icons/io5";

const Response = () => {
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <IoTimerOutline />
        </h4>
        <h4 className="text-xl font-semibold">Response Time</h4>
      </div>
      <div className="bg-secondColor max-w-[10vw] py-[2px] text-white font-semibold maxw px-2 rounded-lg mt-2">
        Std Time - 2min
      </div>
      <div className="py-1 border-dashed border-2 border-gray-300 my-4 flex justify-between items-end rounded-md px-1 bg-gray-100">
        <h2>
          <span className="text-secondColor text-3xl">60</span>
          <span className="text-gray-600">% Ans. Took</span>
        </h2>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-red-600">
            <FaArrowUp />
          </h2>{" "}
          <h2 className="text-gray-600 font-bold">2 Min</h2>
        </div>
      </div>
      <div className="border-t-2 border-gray-400 mt-3s">
        <h2 className="text-center text-2xl my-2 font-semibold">
          You Are <span className="text-red-600">Slow</span> !
        </h2>
      </div>
    </div>
  );
};

export default Response;
