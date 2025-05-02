import ApartmentCardSkeleton from "./ApartmentCardSkeleton";

const ApartmentSkeleton = () => {
  return (
    <div className="dark:bg-black">
      <div className="py-14 w-11/12 md:w-10/12 mx-auto max-w-screen-2xl">
        {/* Apartment Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-12">
          {[...Array(6)].map((_, i) => (
            <ApartmentCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApartmentSkeleton;
