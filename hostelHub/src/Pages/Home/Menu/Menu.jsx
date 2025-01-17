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
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-320.jpg",
      mealName: "Chicken Parmesan",
      description: "A delightful classic with a crispy touch…",
      price: "$25.0",
    },
    {
      image:
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-321.jpg",
      mealName: "Grilled Salmon",
      description: "Freshly caught salmon grilled to perfection…",
      price: "$38.0",
    },
    {
      image:
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-322.jpg",
      mealName: "Beef Wellington",
      description:
        "Tender beef wrapped in flaky pastry for the ultimate treat…",
      price: "$45.0",
    },
    {
      image:
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-323.jpg",
      mealName: "Caesar Salad",
      description: "Crisp romaine lettuce tossed with our signature dressing…",
      price: "$18.0",
    },
    {
      image:
        "https://merida.themepul.com/wp-content/uploads/2024/08/Rectangle-324.jpg",
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
      {/* <div className="flex flex-col md:flex-row gap-4 my-8">
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
      </div> */}
    </div>
  );
};

export default Menu;
