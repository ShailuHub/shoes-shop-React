import React from "react";
import Button from "./Button";

export const ItemCard = () => {
  return (
    <React.Fragment>
      <div className="item-card-container">
        <h2>Blue Shoes</h2>
        <p>
          <span>100%</span> <span>Cotton</span>
        </p>
        <p>Rs. 1298.23</p>
        <Button buttonName="Large" />
        <p>
          <span>Left</span> <span>28</span>
        </p>
        <Button buttonName="Medium" />
        <p>
          <span>Left</span> <span>28</span>
        </p>
        <Button buttonName="Small" />
        <p>
          <span>Left</span> <span>28</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default ItemCard;
