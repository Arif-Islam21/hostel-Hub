import ThemeBtn from "../../../Components/ThemeBtn";
import image from "/bannerImage/top-view-fried-meat-slices-with-soup-vegetables-seasonings-dark-blue-desk-vegetable-meal-food-meat-dinner.avif";

const AnotherSpecial = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[50vh] shadow-lg rounded-lg p-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className="max-w-full lg:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Spicy Chicken Wings 🍗</h1>
            <p className="py-6 max-w-3xl">
              Crispy, juicy chicken wings coated in a flavorful blend of spicy
              and tangy sauce, perfectly paired with a side of creamy garlic
              dip. These wings are sure to satisfy your cravings!
            </p>
            <ThemeBtn text="Order Now"></ThemeBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnotherSpecial;
