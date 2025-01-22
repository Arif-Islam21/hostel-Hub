import { Link } from "react-router-dom";

const PriceingCard = ({ item }) => {
  const { name, price, details, features, isActive } = item;
  return (
    <div
      className={`px-6 relative group py-4 transition-colors ${
        isActive && "bg-gray-700 text-gray-100 hover:text-gray-800"
      } shadow-lg shadow-gray-600 duration-300 transform rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800`}
    >
      <p className="text-lg font-medium  dark:text-gray-100">{name}</p>
      <h4 className="mt-2 text-3xl font-semibold dark:text-gray-100">
        ${price}{" "}
        <span className="text-base font-normal  dark:text-gray-400">
          / Month
        </span>
      </h4>
      <p className="mt-4 dark:text-gray-300">{details}</p>
      <div className="mt-8 space-y-8">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-themeColor"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>

            <span
              className={`mx-4 ${
                isActive
                  ? "text-gray-200 group-hover:text-gray-800"
                  : "text-gray-700"
              } dark:text-gray-300`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="absolute  bottom-4 w-[95%] left-2  right-2">
        <Link to={`/checkout/${name}/${price}`}>
          <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-themeColor to-themeSecendary rounded-md hover:bg-themeColor/50 focus:outline-none focus:bg-themeColor/50">
            {isActive ? "Best Value" : "Get Started"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PriceingCard;
