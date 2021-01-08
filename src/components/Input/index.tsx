import React from "react";

import "./styles.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  placeholder?: string;
  borderless?: boolean;
}

const Input: React.FC<InputProps> = ({ label, name, placeholder, borderless, ...rest }) => {
	if (placeholder === "") {
	 return (
		<div className={`input-block ${borderless ? "borderless" : ""}`}>
			<label htmlFor={name}>{label}</label>
			<div className="input-div">
				<input type="text" name="" id={name} {...rest} />
			</div>
		</div>
	 );
  } else {
	 return (
		<div className={`input-block ${borderless ? "borderless" : ""}`}>
		  <input type="text" name="" id={name} {...rest} placeholder={placeholder} />
		</div>
	 );
  }
};

export default Input;
