
import "./TopBar.scss";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar__container">
        <ul className="topbar__list">
          <div className="list__group group--first">
            <li className="list__item">
              <div className="item__container">
                <span className="dot"></span>
                <span className="text">support@DOMAIN.com</span>
              </div>
            </li>
            <li className="list__item">
              <div className="item__container">
                <span className="dot"></span>
                <span className="text">+000 000 000 00</span>
              </div>
            </li>
          </div>

          <div className="list__group group--second">
            <li className="list__item">
              <div className="item__container">
                <span className="dot"></span>
                <span className="text">Support 24/7</span>
              </div>
            </li>
            <li className="list__item">
              <div className="item__container">
                <span className="dot"></span>
                <span className="text">CITY NAME, ADDRESS</span>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
