import SectionTitle from "../../../Components/SectionTitle";
import ChefBanner from "./ChefBanner";

const OurChefs = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"TASTY tandard and  CRUNCHY"}
        heading={"Our Special Chefs"}
      />
      <div className="max-w-full">
        <ChefBanner />
      </div>
    </div>
  );
};

export default OurChefs;
