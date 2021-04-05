
import styles from "../styles/pages/BattleAngles.module.css"
import { Stage, Layer, Text } from 'react-konva';
import Map from "../components/BattleAngles/Map";

interface typeSpaceship {
	life: number;
	type: number;
	angle: number;
	radius: number;
}

export default function BattleAngles() {
	const starFleet : Array<typeSpaceship> = [
		{life:0, type:1, angle:0, radius:250},
		{life:100, type:2, angle:30, radius:150},
		{life:100, type:3, angle:60, radius:50},
	]

	const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight

	const windowWidthHalf = window.innerWidth / 2
	const windowHeightHalf = window.innerHeight / 2

	return (
		<div className={styles.gameContainer}>
			<Stage width={windowWidth} height={windowHeight}>
				<Layer>
					<Text y={16*0} text={`windowWidth: ${windowWidth.toString()}`} fill="#fff"></Text>
					<Text y={16*1} text={`windowHeight: ${windowHeight.toString()}`} fill="#fff"></Text>
					<Text y={16*2} text={`windowWidthHalf: ${windowWidthHalf.toString()}`} fill="#fff"></Text>
					<Text y={16*3} text={`windowHeightHalf: ${windowHeightHalf.toString()}`} fill="#fff"></Text>
					
					<Map x={0} y={0} width={windowWidth} height={windowHeight} starFleet={starFleet}></Map>
					<Map x={windowWidthHalf} y={0} width={windowWidth} height={windowHeight} starFleet={starFleet}></Map>
				</Layer>
			</Stage>
		</div>
	)
}