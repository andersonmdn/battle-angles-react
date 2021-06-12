
import React from "react";
import styles from "../styles/pages/Games.module.css"

//Router
import { Link } from "react-router-dom";

//Icons
import { FaSearch } from 'react-icons/fa';
import { GiBubbleField, GiSandsOfTime } from "react-icons/gi";

//Components
import Input from "../components/Input";
import Logo from "../components/Logo";

export default function Games() {
	return (
		<div className={styles.gamesContainer}>
			<nav className={styles.navContainer}>
				<div className={styles.navLogo}>
					<Logo style={{fontSize: 50}}/>
				</div>

				<div className={styles.navSearch}>
					<Input name="busca" icon={FaSearch} placeholder="Buscar Jogos"></Input>
				</div>

				<div className={styles.navProfile}>
					<img src="https://www.osso.pt/wp-content/uploads/2013/03/765-default-avatar.png" alt=""/>
					<span>Usuário de Teste</span>
				</div>
			</nav>
			<main className={styles.mainContainer}>
				<section className={styles.gamesGrid}>
					<Link to="/Games/BattleAngles">
						<div className={styles.gameCard}><GiBubbleField/> <span>Batalha dos Ângulos</span></div>
					</Link>
					<div className={styles.gameCard}><GiSandsOfTime/> <span>...</span></div>
					<div className={styles.gameCard}><GiSandsOfTime/> <span>...</span></div>
					<div className={styles.gameCard}><GiSandsOfTime/> <span>...</span></div>
					<div className={styles.gameCard}><GiSandsOfTime/> <span>...</span></div>
				</section>
			</main>
		</div>
	)
}