import Sidebar from "../../../Components/DashboardHomeDesign/Home/Sidebar";
import MainContent from "./MainContent";

const DashboardHome = () => {
  return (
    <div>
      <section className="grid grid-cols-12 gap-6 my-6 container mx-auto bg-[#F9FAFB]">
        <div className="col-span-3">
          <Sidebar />
        </div>
        <div className="col-span-9 ">
          <MainContent />
        </div>
      </section>
    </div>
  );
};

export default DashboardHome;
