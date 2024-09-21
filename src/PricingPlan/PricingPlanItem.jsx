import "./PricingPlan.scss";
import PropTypes from "prop-types";

const PricingPlanItem = ({ item }) => {
  const { title, price, description, features, promotion } = item;
  return (
    <div className="pricing__item">
      <h2>{title}</h2>
      <div className="price__container">
        <span className="price">{price}</span>
        <span className="month">/ month</span>
      </div>

      <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>

      <div className="features">
        {features.map((feature) => (
          <div className="feature" key={feature}>
            {feature}
          </div>
        ))}
      </div>

      <div className="promotion" dangerouslySetInnerHTML={{ __html: promotion }}></div>

      <button type="button" className="subscribe__button">Subscribe Now</button>
    </div>
  );
};

PricingPlanItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PricingPlanItem;
