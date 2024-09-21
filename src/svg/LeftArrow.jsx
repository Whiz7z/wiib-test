

import { useSwiper } from "swiper/react";
const LeftArrow = () => {
  const swiper = useSwiper();
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => swiper.slidePrev()}
    >
      <path d="M18.5 32H45.5" stroke="white" strokeWidth="2" />
      <path
        d="M18.5 32L30.5 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
      <path
        d="M18.5 32L30.5 44"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default LeftArrow
