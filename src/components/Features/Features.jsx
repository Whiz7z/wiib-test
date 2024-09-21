import "./Features.scss";
import macbookImg from '../../assets/images/macbook.png'
import Accordeon from "../Accordeon/Accordeon";

const Features = () => {
  return (
    <div className="features">
      <div className="features__container">
        <div className="features__content">
          <div className="feature__image">
            <img src={macbookImg} alt="feature" />
          </div>

          <Accordeon/>
        </div>
      </div>
    </div>
  );
};

export default Features;
