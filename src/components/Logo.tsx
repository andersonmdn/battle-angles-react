
import { CSSProperties } from 'react';
import { IconType } from 'react-icons';
import styles from '../styles/components/Logo.module.css'

interface LogoProps extends React.HTMLAttributes<HTMLSpanElement> {
	style?: CSSProperties | undefined;
}

export default function Logo({ style, ...rest } : LogoProps) {
	return (
		<span className={styles.logo} style={style}><span>Blue</span>Box</span>
	);
}