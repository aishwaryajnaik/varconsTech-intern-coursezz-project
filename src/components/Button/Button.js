import React from "react";
import "./Button.css";
const Button = ({ link, onClick, text, styleClass, icon }) => {
  return (
    <>
      <a href={link} onClick={onClick} className={`btn ₹{styleClass}`}>
        {icon} {text}
      </a>
    </>
  );
};

export default Button;
