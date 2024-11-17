const BannerTitle = ({ title, shortDesc }) => {
  return (
    <div className="absolute top-0 w-full">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content justify-start  text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl text-themeColor font-bold">
            Hello there
          </h1>
          <p className="mb-5 text-themeSecendary">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default BannerTitle;
