import PriceingCard from "./PriceingCard";

const Priceing = () => {
  const priceingData = [
    {
      name: "Basic",
      price: 9,
      details: "For most businesses that want to optimaize web queries.",
      features: ["All limited links", "Own analytics platform", "Chat support"],
      isActive: false,
    },
    {
      name: "Standard",
      price: 19,
      details: "For most businesses that want to optimaize web queries.",
      isActive: true,
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Unlimited users",
      ],
    },
    {
      name: "Premium",
      price: 29,
      details: "For most businesses that want to optimaize web queries.",
      features: [
        "All limited links",
        "Own analytics platform",
        "Chat support",
        "Optimize hashtags",
        "Unlimited users",
        "Own analytics platform",
      ],
      isActive: false,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-8 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-gray-100">
              special offer to join us
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Simple payment system with stripe and paypal
            </p>
          </div>

          <div className="overflow-hidden p-0.5 mt-6 border rounded-lg dark:border-gray-700">
            <div className="sm:-mx-0.5 flex">
              <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-white bg-themeColor rounded-lg">
                Monthly
              </button>
              <button className=" focus:outline-none px-3 w-1/2 sm:w-auto py-1 sm:mx-0.5 text-gray-800 dark:text-gray-200 dark:hover:bg-gray-800 bg-transparent rounded-lg hover:bg-gray-200">
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 mt-16 -mx-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* <PriceingCard /> */}
          {priceingData.map((item, index) => (
            <PriceingCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Priceing;
