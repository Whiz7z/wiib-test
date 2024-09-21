import React from "react";
import PropTypes from "prop-types";
import './Header.scss';
import LeftArrow from "../../svg/LeftArrow";
import RightArrow from "../../svg/RightArrow";

const Slide = ({ title, image }) => {
  return (
    <div className="slide">
      <div className="image__container">
        <img src={image} alt="slide" />
      </div>
      
      <div className="slide__container">
        <div className="swiper-button-prev">
          <LeftArrow />
        </div>
        <div className="slide__content">
          <h1>{title}</h1>
          <button className="button">Read more</button>
        </div>

        <div className="swiper-button-next">
          <RightArrow />
        </div>

        {/* <div className="swiper-custom-nav-container"></div> */}
      </div>
    </div>
  );
};

Slide.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
};

export default Slide;
