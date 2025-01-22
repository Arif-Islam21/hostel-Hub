import { LuWatch } from "react-icons/lu";
import Ruler from "@scena/react-ruler";
import { useEffect, useRef } from "react";

const RulerComponent = () => {
  const rulerRef = useRef(null);

  useEffect(() => {
    if (rulerRef.current) {
      console.log("Current ruler red", rulerRef.current);
    }
  }, []);

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <LuWatch />
        </h4>
        <h4 className="text-xl font-semibold">Time Taken</h4>
      </div>
      <div>
        <div className="w-full relative">
          <Ruler
            ref={rulerRef}
            type="horizontal"
            width={150}
            height={30}
            unit={10}
            mainLineSize={15}
            direction="top"
            zoom={1.45}
            longLineSize={7}
            shortLineSize={2}
            backgroundColor="#f3f3f3"
            lineColor="#8385D6"
            // textColor="#333"
            textColor="transparent"
            range={[0, 100]}
            style={{ margin: "10px 0" }}
            textFormat={(scale) => (scale === 0 ? `${scale}Sec` : `${scale}`)}
          />
          <div className="absolute top-1/2 translate-y-[50%] rounded-r-sm w-8/12 h-4 bg-red-800" />
          <div className="absolute top-[75%] translate-y-[50%] rounded-r-sm w-6/12 h-4 bg-[#46E056]" />
          <div className="absolute left-1/2 top-0 translate-x-[50%] rounded-sm w-4 h-full bg-[#9598d490]" />
        </div>
        <h2 className="font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas
          dolor. dolore!
        </h2>
      </div>
      <div className="my-6">
        <div className="w-full relative">
          <Ruler
            ref={rulerRef}
            type="horizontal"
            width={150}
            height={30}
            unit={10}
            mainLineSize={15}
            direction="top"
            zoom={1.45}
            longLineSize={7}
            shortLineSize={2}
            backgroundColor="#f3f3f3"
            lineColor="#8385D6"
            // textColor="#333"
            textColor="transparent"
            range={[0, 100]}
            style={{ margin: "10px 0" }}
            textFormat={(scale) => (scale === 0 ? `${scale}Sec` : `${scale}`)}
          />
          <div className="absolute top-1/2 left-[52%] translate-y-[50%] rounded-r-sm w-3/12 h-4 bg-red-800" />
          <div className="absolute top-1/2 right-[52%] translate-y-[50%] rounded-l-sm w-4/12 h-4 bg-[#46E056]" />
          <div className="absolute left-1/2 top-0 translate-x-[-50%] rounded-sm w-4 h-full bg-[#9598d4a5]" />
        </div>
        <h2 className="font-semibold text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, voluptas
          dolor. dolore!
        </h2>
      </div>
    </div>
  );
};

export default RulerComponent;
