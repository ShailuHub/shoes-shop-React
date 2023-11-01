import React from "react";

function InputComponent(props) {
  return (
    <React.Fragment>
      <label htmlFor={props.id}>{props.labelName}</label>
      <input
        type={props.type}
        name={props.id}
        id={props.id}
        value={props.value}
      />
    </React.Fragment>
  );
}

export default InputComponent;
