import React from "react";
import { Pagination,Autoplay } from 'swiper';
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import './banner.css'
const Banner = () => {
  return (
    <div className="banner">
      <Swiper
       modules={[Autoplay,Pagination]}
        spaceBetween={20} // Update spacing between slides
        slidesPerView={1} // Update number of slides per view
        loop // Enable loop mode
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }} 
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src={img1} alt="hackathons" className="banner-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} alt="intenships" className="banner-img"  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img3} alt="scholarships" className="banner-img"  />
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Banner;
