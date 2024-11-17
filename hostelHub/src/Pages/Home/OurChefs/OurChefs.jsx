import SectionTitle from "../../../Components/SectionTitle";
import ChefBanner from "./ChefBanner";

const OurChefs = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"TASTY tandard and  CRUNCHY"}
        heading={"Our Special Chefs"}
      />
      <div className="sm:max-w-fit md:min-w-full">
        <ChefBanner />
      </div>
    </div>
  );
};

export default OurChefs;
