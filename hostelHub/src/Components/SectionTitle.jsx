const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="my-12 text-center space-y-2">
      <p className="font-semibold text-themeColor">{subHeading}</p>
      <h2 className="font-bold text-xl lg:text-4xl uppercase">{heading}</h2>
    </div>
  );
};

export default SectionTitle;
