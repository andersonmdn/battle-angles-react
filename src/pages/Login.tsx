import React from "react";

import { Link } from "react-router-dom";

import Input from "../components/Input";

import styles from "../styles/pages/Login.module.css";

import IconDark from '../assets/images/logo/Icon-BlueBox-Dark.svg';
import TextDark from '../assets/images/logo/Text-BlueBox-Dark.svg';
import Button from "../components/Button";
import Logo from "../components/Logo";

function Home() {
  return (
    <div className={styles.loginContainer}>
		<div className={styles.loginLogo}>
			<Logo style={{fontSize: 70}}/>
		</div>		
		<form className={styles.loginForm}>
			<div className={styles.loginHeaderSecondary}>Entrar na Sistema</div>
			<div className={styles.loginBody}>
				<div className={styles.loginInputs}>
					<Input name="email" type="text" placeholder="Email"/>
					<Input name="password" type="password" placeholder="Senha"/>
				</div>
				
				<div className={styles.loginButton}>
					<Link to="/Games">
						<Button type="submit">Entrar</Button>
					</Link>
				</div>
				
			</div>
			<div className={styles.loginFooter}>
				<a href="##">Esqueceu sua senha?</a>

				<a href="##">Criar uma conta</a>
			</div>
		</form>
    </div>
  );
}

export default Home;
