import "./Business.scss";
import {businessData} from '../../../data/store';
import BusinessCard from "../BusinessCard/BusinessCard";

const Business = () => {
  return (
    <div className="business">
      <div className="business__container">

        <div className="business__list">
        {businessData.map((item) => (
          <BusinessCard
            key={item.id}
            title={item.title}
            type={item.type}
            image={item.image}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default Business;
