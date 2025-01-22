import { AiOutlineStock } from "react-icons/ai";

const Approach = () => {
  const approachData = [
    {
      percent: "25",
      based: "Facts",
    },
    {
      percent: "32",
      based: "Analysis",
    },
    {
      percent: "19",
      based: "Elimination",
    },
    {
      percent: "24",
      based: "Guess",
    },
  ];
  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <AiOutlineStock />
        </h4>
        <h4 className="text-xl font-semibold">Improvements</h4>
      </div>
      <div>
        {approachData.map((item, idx) => (
          <div
            key={idx}
            className="border-2 flex my-1 gap-4 items-center border-gray-300 rounded-md p-1"
          >
            <h2 className="bg-[#837db7a4] text-[#2c16ec] p-2 rounded-md max-w-12">
              {item.percent}
              <span className="text-gray-800">%</span>
            </h2>
            <h2 className="font-bold">
              Based On <span className="text-secondColor">{item.based}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approach;
