import Priceing from "../../Components/Priceing";
import Banner from "./Banner/Banner";
import Membership from "./Membership/Membership";
import Menu from "./Menu/Menu";
import OurChefs from "./OurChefs/OurChefs";
import MealTab from "./Tab/MealTab";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-auto my-6">
        <MealTab />
      </div>
      <Menu />
      <OurChefs />
      {/* <Membership /> */}
      <Priceing />
    </div>
  );
};

export default Home;
