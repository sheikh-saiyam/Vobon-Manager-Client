const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="text-center">
      <h3 className="text-primary mb-2 text-lg">----- {subHeading} -----</h3>
      <h1 className="text-2xl text-text md:text-3xl lg:text-4xl font-semibold tracking-wider">
        {heading}
      </h1>
      <hr className="my-4 border-accent w-2/3 mx-auto border-2" />
    </div>
  );
};

export default SectionHeader;
