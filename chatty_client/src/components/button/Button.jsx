import React from "react";
import './button.scss'

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn btn-primary button my-1 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
