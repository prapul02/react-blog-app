import React from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
  return (
    <label>
      {props.label}:
      <input
        name={props.name}
        placeholder={props.placeholder}
        value={props.value}
        type={props.type}
        required={props.required}
        onChange={props.onChange}
      ></input>
    </label>
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email"]).isRequired,
  required: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
