import StudentMarkCard from "./StudentMarkCard";
import TopScoreCard from "./TopScoreCard";

const ResultCard = () => {
  return (
    <div className="card bg-white p-2 shadow-md w-full">
      <StudentMarkCard />
      <TopScoreCard />
      <div>
        <h2 className="text-xl font-semibold text-black">Improve Your Mark</h2>
        <p className="text-gray-400 font-bold text-sm">
          Improve your score by practiseing more
        </p>
      </div>
      <button className="btn btn-block bg-secondColor text-white font-bold my-4 hover:text-secondColor hover:border-secondColor">
        Practise More
      </button>
    </div>
  );
};

export default ResultCard;
