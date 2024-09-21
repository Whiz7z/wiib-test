import "./BusinessCard.scss";
import PropTypes from "prop-types";
import Plus from '../../svg/Plus'

const BusinessCard = ({ title, type, image }) => {
  return (
    <div className="business__card">
      <div className="business__image">
        <img src={image} alt="business" />

        <div className="plus">
          <Plus />
        </div>
      </div>

      <div className="business__content">
        <h3 className="business__type">{type}</h3>

        <h2 className="business__title" dangerouslySetInnerHTML={{ __html: title }}></h2>
      </div>
    </div>
  );
};

BusinessCard.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired,
};

export default BusinessCard;
