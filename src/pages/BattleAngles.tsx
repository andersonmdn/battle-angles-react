
import styles from "../styles/pages/BattleAngles.module.css"
import { Stage, Layer, Text } from 'react-konva';
import Map from "../components/BattleAngles/Map";
import { useEffect, useState } from "react";

interface typeSpaceship {
	life: number
	type: number
	angle: number
	radius: number
}

class Spaceship {
	life: number
	type: number
	angle: number
	radius: number

	constructor(life:number, type:number, angle:number, raius:number) {
		this.life = life
		this.type = type
		this.angle = angle
		this.radius = raius
	}
}

export default function BattleAngles() {
	const [starFleetP1, setStarFleetP1] = useState<typeSpaceship[]>([]);
	const [starFleetP2] = useState<typeSpaceship[]>([]);

	useEffect(() => {
		const newStarFleet : Array<Spaceship> = [];

		while (newStarFleet.length < 12) {
			newStarFleet.push(new Spaceship(100, 0, newStarFleet.length * 30, 150))
		}
		
		setStarFleetP1(newStarFleet)
	}, [])

	const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight

	const windowWidthHalf = window.innerWidth / 2
	const windowHeightHalf = window.innerHeight / 2

	return (
		<div className={styles.gameContainer}>
			<Stage width={windowWidth} height={windowHeight}>
				<Layer>
					<Text y={windowHeight - (16*1)} text={`windowWidth: ${windowWidth.toString()}`} fill="#fff"></Text>
					<Text y={windowHeight - (16*2)} text={`windowHeight: ${windowHeight.toString()}`} fill="#fff"></Text>
					<Text y={windowHeight - (16*3)} text={`windowWidthHalf: ${windowWidthHalf.toString()}`} fill="#fff"></Text>
					<Text y={windowHeight - (16*4)} text={`windowHeightHalf: ${windowHeightHalf.toString()}`} fill="#fff"></Text>
					
					<Map player={"Mudynho"} colorScheme="green" x={0} y={0} width={windowWidthHalf} height={windowHeight} starFleet={starFleetP1}></Map>
					<Map player={"Talgamon"} colorScheme="red" x={windowWidthHalf} y={0} width={windowWidthHalf} height={windowHeight} starFleet={starFleetP2}></Map>
				</Layer>
			</Stage>
		</div>
	)
}