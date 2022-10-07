import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button className={`btn btn-primary my-1 ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
