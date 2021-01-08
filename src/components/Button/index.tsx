import React from "react";

import "./styles.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean;
  dark?: boolean;
  darkLight?: boolean;
  onlyText?: boolean;
  colorful ?: boolean;
  alignLeft ?: boolean;
}

const Button: React.FC<ButtonProps> = ({ dark, darkLight, onlyText, alignLeft, fill, colorful, children, ...rest }) => {
  return (
    <button
      className={`button ${fill ? "fill" : ""}  ${dark ? "dark" : ""}  ${onlyText ? "only-text" : ""} ${alignLeft ? "align-left" : ""}  ${colorful ? "colorful" : ""} ${
        darkLight ? "dark-light" : ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
