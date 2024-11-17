import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Navbar />
      <div className="min-h-[calc(100vh-60px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
