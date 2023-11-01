import React from "react";
import CartButton from "./CartButton";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="header-section">
        <div className="navbar-container">
          <div className="brand-logo">BrandLogo</div>
          <div className="nav-items">Nav Items</div>
          <CartButton />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navbar;
