import { BsStars } from "react-icons/bs";

const Suggestion = () => {
  const data = [
    {
      topText: "Q -1-12",
      time: "40",
      format: "Sec",
      type: "Easy",
      text: "#1CB9B4",
    },
    {
      topText: "Q-12-32",
      time: "1.5",
      format: "Min",
      type: "Medium",
      text: "#EBB819",
    },
    {
      topText: "Q-32-49",
      time: "3",
      format: "Min",
      type: "Hard",
      text: "#B91C1C",
    },
  ];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <BsStars />
        </h4>
        <h4 className="text-xl font-semibold">Suggestions</h4>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-around ">
            <h2 className="bg-secondColor rounded-md text-white font-bold">
              {item.topText}
            </h2>
            <div className="text-black p-2 border-dashed rounded-lg border-gray-500 bg-gray-100 border-2 my-4 py-4">
              <span className="text-2xl font-semibold">{item.time}</span>
              {/* <span className="font-bold text-gray-600">{item.format}</span> */}
            </div>
            <h2
              style={{ color: item.text }}
              className="text-2xl text-center font-semibold text-secondColor"
            >
              {item.type}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Suggestion;
