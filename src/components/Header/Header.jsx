import  { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "./Slide";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import firstSlideImg from "../../assets/images/firstSlide.png";
import secondSlideImg from "../../assets/images/secondSlide.png";
import thirdSlideImg from "../../assets/images/thirdSlide.png";
import { Pagination, Navigation, EffectFade } from "swiper/modules";
import HeaderMenu from "../HeaderMenu/HeaderMenu";

const Header = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="header">
      <HeaderMenu/>
      <Swiper
        modules={[Pagination, Navigation, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        initialSlide={1}
        navigation={{
          prevEl: null,
          nextEl: null,
        }}
        pagination={{
          el: ".swiper-pagination", 
          clickable: true,
          bulletClass: "custom-bullet", 
          bulletActiveClass: "custom-bullet-active", 
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        style={{
          width: "100vw",
        }}
      >
        <SwiperSlide>
          <Slide image={firstSlideImg} title="Business Consultancy Services" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide image={secondSlideImg} title="Inspiring Insights and Skills" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={thirdSlideImg}
            title="Business Development Management"
          />
        </SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default Header;
