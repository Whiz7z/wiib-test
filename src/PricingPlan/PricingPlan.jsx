import PricingPlanItem from "./PricingPlanItem";
import {pricingPlans} from "../../data/store";
import './PricingPlan.scss';
const PricingPlan = () => {
  return (
    <div className="pricingPlan">
      <div className="pricingPlan__container">
        <h1>Pricing Plan</h1>
        <div className="pricingPlan__list">
          {pricingPlans.map((item) => (
            <PricingPlanItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
