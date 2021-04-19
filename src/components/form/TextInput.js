import React from "react";

function TextInput(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.id} className="form-label">
        {props.label}
      </label>
      <input
        name={props.name}
        type="text"
        className="form-control"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TextInput;
