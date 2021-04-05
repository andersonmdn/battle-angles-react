
import { IconType } from 'react-icons';
import styles from '../styles/components/Input.module.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;
	placeholder?: string;
	icon?: IconType;
}

export default function Input({ name, placeholder, icon, ...rest } : InputProps) {
	const TheIcon = icon;
	return (
		<div className={styles.inputBlock}>
			{TheIcon &&
				<TheIcon className={styles.inputIcon}/>
			}
			<input type="text" name="" id={name} {...rest} placeholder={placeholder} />
		</div>
	);
}