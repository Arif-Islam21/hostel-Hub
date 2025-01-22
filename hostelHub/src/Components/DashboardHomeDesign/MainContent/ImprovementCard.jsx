import { AiOutlineStock } from "react-icons/ai";

const ImprovementCard = () => {
  const subjects = [
    {
      name: "Geography",
      color: "#1CB9B4",
    },
    {
      name: "Politics",
      color: "#EAB308",
    },
    {
      name: "Current Affairs",
      color: "#1CB9B4",
    },
    {
      name: "General Studies",
      color: "#B91C1C",
    },
    {
      name: "Mathmatics",
      color: "#1CB9B4",
    },
    {
      name: "Social Studies",
      color: "#C6CAD0",
    },
    {
      name: "English Studies",
      color: "#B91C1C",
    },
    {
      name: "Indian History",
      color: "#EAB308",
    },
    {
      name: "Economics",
      color: "#1CB9B4",
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
      <h2 className="text-xl text-black font-semibold mt-2">
        Subject Understanding
      </h2>
      <div className="flex gap-[2px] flex-wrap my-3">
        {subjects.map((item, idx) => (
          <div
            className="rounded-lg px-2 mt-[2px]"
            style={{
              backgroundColor: item.color,
            }}
            key={idx}
          >
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImprovementCard;
