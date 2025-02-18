import { useEffect } from "react";
import AboutTheBuilding from "../components/HomeSections/AboutTheBuilding";
import ApartmentLocation from "../components/HomeSections/ApartmentLocation";
import Slider from "../components/HomeSections/Banner/Slider";
import Coupons from "../components/HomeSections/Coupons";
import ExploreApartments from "../components/HomeSections/ExploreApartments";
import Newsletter from "../components/HomeSections/Newsletter";
import NewsFeeds from "../components/HomeSections/NewsFeeds";
import Facilities from "../components/HomeSections/Facilities";

const HomeLayout = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <div>
      <div className="pb-20 w-11/12 mx-auto max-w-screen-2xl">
        <Slider></Slider>
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <AboutTheBuilding />
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <ExploreApartments />
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <Coupons></Coupons>
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <Facilities />
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <NewsFeeds />
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <Newsletter />
      </div>
      <div className="pb-20 w-10/12 mx-auto max-w-screen-2xl">
        <ApartmentLocation />
      </div>
    </div>
  );
};

export default HomeLayout;
