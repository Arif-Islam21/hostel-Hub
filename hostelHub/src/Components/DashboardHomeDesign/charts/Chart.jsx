import { FaRecycle } from "react-icons/fa";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "Page A",
      Slots: 40,
      pv: 1,
      amt: 2400,
    },
    {
      name: "Page B",
      Slots: 67,
      pv: 2,
      amt: 2210,
    },
    {
      name: "Page C",
      Slots: 20,
      pv: 3,
      amt: 2290,
    },
    {
      name: "Page D",
      Slots: 27,
      pv: 4,
      amt: 2000,
    },
    {
      name: "Page E",
      Slots: 76,
      pv: 5,
      amt: 2181,
    },
    {
      name: "Page F",
      Slots: 23,
      pv: 6,
      amt: 2500,
    },
    {
      name: "Page G",
      Slots: 34,
      pv: 7,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-white border-2 border-gray-300 rounded-lg min-h-[30vh] p-4">
      <div className="flex justify-start items-center gap-2 text-gray-400">
        <h4 className="text-xl font-semibold">
          <FaRecycle />
        </h4>
        <h4 className="text-xl font-semibold">Compare Accuracy</h4>
      </div>
      <div className="relative mx-4 my-8 ml-12">
        <div className="bg-[#1CB9B4] min-w-full h-2"></div>
        <div className="flex justify-around items-center absolute top-0 w-full translate-y-[-50%]">
          <button className="btn hover:bg-[#1CB9B4] hover:text-white font-bold bg-gray-200">
            10Min
          </button>
          <button className="btn hover:bg-[#1CB9B4] hover:text-white font-bold bg-[#1CB9B4]">
            15Min
          </button>
          <button className="btn hover:bg-[#1CB9B4] hover:text-white font-bold bg-gray-200">
            30Min
          </button>
          <button className="btn hover:bg-[#1CB9B4] hover:text-white font-bold bg-gray-200">
            45Min
          </button>
        </div>
      </div>
      <div className="mt-6 ">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart width={150} height={40} data={data}>
            <CartesianGrid vertical={false} />
            <Bar
              dataKey="Slots"
              fill="#8884d8"
              radius={[10, 10, 0, 0]}
              barSize={20}
            />
            <XAxis dataKey="pv">
              <Label
                value="Slots"
                // angle={-90}
                position="insideBottom"
                style={{
                  fontSize: 14,
                  fontWeight: "bold",
                  fill: "#999DA3",
                }}
              />{" "}
            </XAxis>
            <YAxis
              domain={[0, 100]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
              tickFormatter={(value) => `${value}%`}
            >
              <Label
                value="Accuracy"
                angle={-90}
                position="insideLeft"
                style={{ fontSize: 14, fontWeight: "bold", fill: "#999DA3" }}
              />
            </YAxis>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
