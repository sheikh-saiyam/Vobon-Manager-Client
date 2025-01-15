import { useEffect } from "react";
import AboutTheBuilding from "../components/HomeSections/AboutTheBuilding";
import ApartmentLocation from "../components/HomeSections/ApartmentLocation";
import Slider from "../components/HomeSections/Banner/Slider";

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
        <ApartmentLocation />
      </div>
    </div>
  );
};

export default HomeLayout;
