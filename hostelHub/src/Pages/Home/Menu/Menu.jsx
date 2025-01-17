import SectionTitle from "../../../Components/SectionTitle";
import MenuCard from "./MenuCard";
import menuBg from "/menuBg.jfif";

const Menu = () => {
  const meals = [
    {
      image:
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-319.jpg",
      mealName: "Vegetable Platter",
      description: "Welcome to Mereda, where culinary excellence meets…",
      price: "$32.0",
    },
    {
      image:
        "https://img.freepik.com/free-photo/food-mix-salad-noodles-grillea-chicken-garlic-greena-top-view_141793-15488.jpg?semt=ais_incoming",
      mealName: "Chicken Parmesan",
      description: "A delightful classic with a crispy touch…",
      price: "$25.0",
    },
    {
      image:
        "https://img.freepik.com/free-photo/grilled-chicken-steak-vegetables-dark-background_1150-45259.jpg?semt=ais_incoming",
      mealName: "Grilled Salmon",
      description: "Freshly caught salmon grilled to perfection…",
      price: "$38.0",
    },
    {
      image:
        "https://img.freepik.com/free-photo/pieces-chicken-fillet-with-mushrooms-stewed-tomato-sauce-with-boiled-broccoli-rice-proper-nutrition-healthy-lifestyle-dietetic-menu-top-view_2829-20015.jpg?semt=ais_incoming",
      mealName: "Beef Wellington",
      description:
        "Tender beef wrapped in flaky pastry for the ultimate treat…",
      price: "$45.0",
    },
    {
      image:
        "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?semt=ais_incoming",
      mealName: "Caesar Salad",
      description: "Crisp romaine lettuce tossed with our signature dressing…",
      price: "$18.0",
    },
    {
      image:
        "https://img.freepik.com/free-photo/side-view-christmas-food-appetizing-christmas-dish-with-seeds-pomegranate-plate-grey-table_140725-111290.jpg?semt=ais_incoming",
      mealName: "Spaghetti Bolognese",
      description: "A traditional Italian favorite with rich meat sauce…",
      price: "$22.0",
    },
  ];

  return (
    <div>
      <SectionTitle subHeading={"Our Menus"} heading="Main Food Dishes" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {meals.map((meal, index) => (
          <MenuCard key={index} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
