import  { useState } from "react";
import "./HeaderMenu.scss";
import Logo from "../../svg/Logo";

const HeaderMenu = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="header__menu">
      <div className="menu__container">
        <div className="menu__content">
          <div className="logo">
            <Logo />
          </div>

          <nav className="menu__list">
            {["Home", "About", "Testimonials", "Pricing Plans", "Contact"].map(
              (item) => (
                <div
                  key={item}
                  className={`menu__item ${
                    activeItem === item ? "active" : ""
                  }`}
                  onClick={() => handleMenuItemClick(item)}
                >
                  <div className="dot"></div>
                  <a href="#">{item}</a>
                </div>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
