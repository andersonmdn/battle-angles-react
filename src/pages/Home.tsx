import React from "react";

import { Link } from "react-router-dom";

import Input from "../components/Input";

import styles from "../styles/pages/Home.module.css";

import IconDark from '../assets/images/logo/Icon-BlueBox-Dark.svg';
import TextDark from '../assets/images/logo/Text-BlueBox-Dark.svg';
import Button from "../components/Button";

function Home() {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
			<div className={styles.loginHeader}>
				<img src={IconDark} alt=""/>
				<img src={TextDark} alt=""/>
			</div>
			<div className={styles.loginHeaderSecondary}>Entrar no Sistema</div>
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