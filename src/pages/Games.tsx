
import React from "react";
import styles from "../styles/pages/Games.module.css"

//Router
import { Link } from "react-router-dom";

//Icons
import { FaSearch } from 'react-icons/fa';
import { GiBubbleField, GiSandsOfTime } from "react-icons/gi";
import IconDark from '../assets/images/logo/Icon-BlueBox-Dark.svg';
import TextDark from '../assets/images/logo/Text-BlueBox-Dark.svg';

//Components
import Input from "../components/Input";

export default function Games() {
	return (
		<div className={styles.gamesContainer}>
			<nav className={styles.navContainer}>
				<div className={styles.navLogo}>
					<img src={IconDark} alt="Logo BlueBox"/>
					<img src={TextDark} alt=""/>
				</div>

				<div className={styles.navSearch}>
					<Input name="busca" icon={FaSearch} placeholder="Buscar Jogos"></Input>
				</div>

				<div className={styles.navProfile}>
					<img src="https://avatars.githubusercontent.com/u/5140400?v=4" alt=""/>
					<span>Anderson André</span>
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
					<div className={styles.gameCard}><GiSandsOfTime/> <span>...</span></div>
				</section>
			</main>
		</div>
	)
}