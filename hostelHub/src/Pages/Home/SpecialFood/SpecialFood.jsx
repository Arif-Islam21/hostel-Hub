import ThemeBtn from "../../../Components/ThemeBtn";
import image from "/bannerImage/front-close-view-delicious-dinner-with-chickens-potatoes-greens-saucepan-gray-plate-dark-color-background-with-free-space.jpg";

const Users = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[50vh] shadow-lg rounded-lg p-4">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Chicken Biryani 🍛</h1>
            <p className="py-6 max-w-3xl">
              A flavorful blend of aromatic basmati rice, tender chicken
              marinated in rich spices, and saffron for a royal touch. Served
              with a side of cooling raita and tangy pickles, this dish is a
              favorite among our hostel residents.
            </p>
            <ThemeBtn text="Order Now"></ThemeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
