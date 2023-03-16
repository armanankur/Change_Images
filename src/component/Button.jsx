import React from "react";
import "./Button.css";
const Button = ({ name, btnclick }) => {
  return <button onClick={btnclick}>{name}</button>;
};
export default Button;
