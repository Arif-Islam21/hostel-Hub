import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCard from "./TabCard";
import useLoadMeal from "../../../Hooks/useLoadMeal";

const MealTab = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [data] = useLoadMeal();
  const breakFast = data?.filter((item) => item.category === "Breakfast");
  const Lunch = data?.filter((item) => item.category === "Lunch");
  const Dinner = data?.filter((item) => item.category === "Dinner");
  const tabData = ["All Measl", "BreakFast", "Lunch", "Dinner"];
  // console.log(breakFast);
  return (
    <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <div className="max-w-[50vw] mx-auto">
        <TabList className={`flex justify-around my-6 gap-4`}>
          {tabData.map((item, index) => (
            <Tab
              key={index}
              className={`w-full cursor-pointer shadow-xl shadow-themeColor text-center ${
                tabIndex === index
                  ? " bg-gradient-to-r from-themeColor to-themeSecendary font-bold text-white"
                  : "bg-white text-black"
              } px-4 py-2 rounded`}
            >
              {item}
            </Tab>
          ))}
        </TabList>
      </div>
      {/* FOR ALL MEALS */}
      <TabPanel
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8"
        }
      >
        {data?.map((item) => (
          <TabCard key={item._id} item={item} />
        ))}
      </TabPanel>
      {/* FOR BREAKFAST */}
      <TabPanel
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8"
        }
      >
        {breakFast?.map((item) => (
          <TabCard key={item._id} item={item} />
        ))}
      </TabPanel>
      {/* FOR LUNCH */}
      <TabPanel
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8"
        }
      >
        {Lunch?.map((item) => (
          <TabCard key={item._id} item={item} />
        ))}
      </TabPanel>
      {/* FOR DINNER */}
      <TabPanel
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-8"
        }
      >
        {Dinner?.map((item) => (
          <TabCard key={item._id} item={item} />
        ))}
      </TabPanel>

      {/* <TabPanel>tab panel 2</TabPanel>
      <TabPanel>tab panel 3</TabPanel>
      <TabPanel>tab panel 4</TabPanel> */}
    </Tabs>
  );
};

export default MealTab;
