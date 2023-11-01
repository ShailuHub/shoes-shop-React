import React from "react";
import InputComponent from "./InputComponent";

function AddProductForm() {
  return (
    <React.Fragment>
      <div className="form-container">
        <form action="">
          <InputComponent
            id="productName"
            type="text"
            value="Product Name"
            labelName="Product Name"
          />
          <InputComponent
            id="description"
            type="text"
            value="description"
            labelName="Description"
          />
          <InputComponent
            id="price"
            type="number"
            value={0}
            labelName="Price"
          />
          <InputComponent id="large" type="number" value={0} labelName="L" />
          <InputComponent id="medium" type="number" value={0} labelName="M" />
          <InputComponent id="small" type="number" value={0} labelName="S" />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </React.Fragment>
  );
}

export default AddProductForm;
