import { useState } from "react";
import Konva from "konva";
import { Circle, Group, Line, Text } from "react-konva";

import Spaceship from "./Spaceship";

interface typeMap {
	x: number;
	y: number;
	width: number;
	height: number;
	starFleet: Array<typeSpaceship>;
}

interface typeSpaceship {
	life: number;
	type: number;
	angle: number;
	radius: number;
}

export default function Map(typeMap:typeMap) {
	const lineAngles : Array<number> = [0, 30, 60, 90, 120, 150]
	const windowWidthHalf = typeMap.width / 2
	const windowHeightHalf = typeMap.height / 2

	const [mouseX, setMouseX] = useState(0)
	const [mouseY, setMouseY] = useState(0)

	function mouseUpdate(e: Konva.KonvaEventObject<MouseEvent>) {
		setMouseX(e.evt.clientX)
		setMouseY(e.evt.clientY)
	}

	function getSin(angle: any) : number{
		return Number(Math.sin(angle * Math.PI/180).toFixed(4));
	}

	function getCos(angle: any) : number{
		return Number(Math.cos(angle * Math.PI/180).toFixed(4));
	}

	return (
		<Group x={typeMap.x} y={typeMap.y} width={typeMap.width / 2} height={typeMap.height} rotation={0} visible onMouseMove={mouseUpdate}>
			<Text y={16*4} text={`X: ${mouseX.toString()} | Y: ${mouseY.toString()}`} fill="#fff"></Text>

			<Text y={16*6} align="center" text={`Mudynho`} fill="#09a01d" fontStyle="bold" width={typeMap.width / 2}></Text>

			<Text x={windowWidthHalf / 4} y={windowHeightHalf / 2} text={`X- Y-`} fill="#fff" fontSize={16}></Text>
			<Text x={windowWidthHalf / 4} y={(windowHeightHalf / 2) + (windowHeightHalf / 1) } text={`X- Y+`} fill="#fff" fontSize={16}></Text>
			<Text x={(windowWidthHalf / 2) + (windowWidthHalf / 4)} y={windowHeightHalf / 2} text={`X+ Y-`} fill="#fff" fontSize={16}></Text>
			<Text x={(windowWidthHalf / 2) + (windowWidthHalf / 4)} y={(windowHeightHalf / 2) + (windowHeightHalf / 1)} text={`X+ Y+`} fill="#fff" fontSize={16}></Text>
			
			<Circle x={windowWidthHalf / 2} y={windowHeightHalf} radius={50} stroke="#fff" on></Circle>
			<Circle x={windowWidthHalf / 2} y={windowHeightHalf} radius={150} stroke="#fff"></Circle>
			<Circle x={windowWidthHalf / 2} y={windowHeightHalf} radius={250} stroke="#fff"></Circle>
			
			{lineAngles.map((angle: number) => {
				let sin = (getSin(angle) * 250);
				let cos = (getCos(angle) * 250);
				
				let points: number[] = [0, 0, 0,0];
				
				if(angle === 0 || angle === 30 || angle === 60 || angle === 90 || angle === 120 || angle === 150) {
					points = [cos, sin * -1, cos * -1, sin];
				}
				
				if(cos === Infinity){
					cos = 0
				}
				
				return <Line key={angle} x={windowWidthHalf / 2} y={typeMap.height / 2} points={points} stroke="#fff"></Line>
			})}
			
			{typeMap.starFleet.map(({life, angle, radius, type}: typeSpaceship) => {
				return <Spaceship key={angle} life={life} angle={angle} radius={radius} type={type} />
			})}
		</Group>
	)
}