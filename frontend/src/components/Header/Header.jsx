import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>So speedy, so savory, so tasty.</h2>
        <p>
          FoodFlare brings a variety of
          cuisines right to your doorstep, ensuring fast, reliable, and
          delicious service with just a few clicks.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
