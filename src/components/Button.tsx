import React from "react";

import styles from "../styles/components/Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function Button({ children, ...rest } : ButtonProps) {
	return (
		<button
			className={styles.button}
			{...rest}
		>
      {children}
    </button>
	)
}