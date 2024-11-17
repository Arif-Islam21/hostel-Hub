import SectionTitle from "../../../Components/SectionTitle";
import MenuCard from "./MenuCard";
import menuBg from "/menuBg.jfif";

const Menu = () => {
  return (
    <div>
      <SectionTitle subHeading={"Our Menus"} heading="Main Food Dishes" />
      <div className="flex flex-col md:flex-row gap-4 my-8">
        <div className="w-full md:w-1/2">
          <div
            className="py-3 mb-8 pl-12"
            style={{ backgroundImage: `url(${menuBg})` }}
          >
            <h2 className="text-3xl font-semibold">Breakfast Menu</h2>
          </div>
          <div className="space-y-8">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div
            className="py-3 mb-8 pl-12"
            style={{ backgroundImage: `url(${menuBg})` }}
          >
            <h2 className="text-3xl font-semibold">Lunch Menu</h2>
          </div>
          <div className="space-y-8">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
