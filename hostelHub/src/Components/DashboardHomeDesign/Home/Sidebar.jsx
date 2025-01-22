import ResultCard from "../Cards/ResultCard";
import RecheckCard from "../Cards/RecheckCard";
import image from "/dashboard.jpg";

const Sidebar = () => {
  return (
    <div className="card border bg-[#F7F6FC] w-full shadow-xl">
      <figure>
        <img src={image} alt="Marking image" />
      </figure>
      <div className="card-body">
        <h2 className="text-[#5A5FBC] text-center text-3xl font-bold">
          Your Impact!
        </h2>
        <p className="text-center">
          All your insights and your details in one place.
        </p>
        <div className="card-actions justify-end">
          <ResultCard />
          <RecheckCard />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
