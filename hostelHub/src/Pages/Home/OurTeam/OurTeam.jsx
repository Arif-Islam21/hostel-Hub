import { FaFacebook, FaGithub, FaReddit } from "react-icons/fa";

const OurTeam = () => {
  const chefsData = [
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "arthur melo",
      post: "design director",
      icons: [
        <FaReddit size={18} />,
        <FaFacebook size={18} />,
        <FaGithub size={18} />,
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      name: "arthur melo",
      post: "design director",
      icons: [
        <FaReddit size={18} />,
        <FaFacebook size={18} />,
        <FaGithub size={18} />,
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "arthur melo",
      post: "design director",
      icons: [
        <FaReddit size={18} />,
        <FaFacebook size={18} />,
        <FaGithub size={18} />,
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
      name: "arthur melo",
      post: "design director",
      icons: [
        <FaReddit size={18} />,
        <FaFacebook size={18} />,
        <FaGithub size={18} />,
      ],
    },
  ];

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-themeColor capitalize lg:text-3xl dark:text-white">
            Our Executive Chefes
          </h1>

          <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
            Our talented chefs are the heart and soul of our kitchen, blending
            passion, creativity, and expertise to craft dishes that delight your
            taste buds. With years of experience and a dedication to quality,
            they carefully select the finest ingredients to create meals that
            are as beautiful as they are delicious.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
            {chefsData?.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center p-8 shadow-lg bg-white transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-themeColor/80 dark:border-gray-700 dark:hover:border-transparent"
              >
                <img
                  className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                  src={item.image}
                  alt=""
                />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">
                  {item.name}
                </h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                  {item.post}
                </p>

                <div className="flex mt-3 -mx-2">
                  {item.icons.map((icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                      aria-label="Reddit"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
