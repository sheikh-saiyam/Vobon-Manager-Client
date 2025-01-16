// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <div className="py-4">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image="https://images.pexels.com/photos/6438762/pexels-photo-6438762.jpeg"
            text="Your Dream Home is Just
             a Step Away!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://static.vecteezy.com/system/resources/previews/027/789/855/large_2x/modern-luxury-apartment-with-bright-blue-light-free-photo.jpg"
            text={`Step Into Your Dream 
                 Home Now!`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image="https://static.vecteezy.com/system/resources/previews/027/789/854/non_2x/modern-luxury-apartment-with-bright-blue-light-free-photo.jpg"
            text="Luxury Living Awaits You!"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
