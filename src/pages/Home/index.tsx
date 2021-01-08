import React from "react";

import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";

import "./styles.css";

function Home() {
  return (
    <div id="home-page" className="display-flex-center-center">
      <form id="login-form" className="display-flex-center-center">
			<div className="display-flex-center-center flex-direction-column">
				<div id="login-header">Bem vindo de volta!</div>
				<div id="login-header-secondary">Estamos muito animados em vê-lo novamente!</div>
				<div id="login-body">
					<div className="login-inputs">
						<Input name="email" type="text" label="EMAIL" placeholder=""/>
						<Input name="password" type="password" label="SENHA" placeholder=""/>
					</div>
					<div className="">
						<Button type="button" fill onlyText colorful alignLeft>Esqueceu sua senha?</Button>
					</div>
					<Link to="/Games/BattleAngles">
						<Button type="submit" fill>Login</Button>
					</Link>
					<div id="login-register">
						<span className="">Precisa de uma conta?</span>
						<Button type="button" onlyText colorful alignLeft>Registrar</Button>
					</div>
				</div>
			</div>
		</form>
    </div>
  );
}

export default Home;
