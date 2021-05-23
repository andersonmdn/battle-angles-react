import { useState } from "react";
import Konva from "konva";
import { Circle, Group, Image, Line, Text } from "react-konva";

import Spaceship from "./Spaceship";
import useImage from "use-image";

import spaceshipBlue from '../../assets/images/spaceship/1.png';
import spaceshipOrange from '../../assets/images/spaceship/2.png';
import spaceshipPurple from '../../assets/images/spaceship/3.png';
import spaceshipGreen from '../../assets/images/spaceship/4.png';

interface typeMap {
	x: number;
	y: number;
	width: number;
	height: number;
	starFleet: Array<typeSpaceship>;
	player: string;
	colorScheme?: string;
}

interface typeSpaceship {
	life: number;
	type: number;
	angle: number;
	radius: number;
}

export default function Map(typeMap:typeMap) {
	const lineAngles : Array<number> = [0, 30, 60, 90, 120, 150]
	//--const windowWidth = window.innerWidth
	const windowHeight = window.innerHeight
	//--const windowWidthHalf = windowWidth / 2
	const windowHeightHalf = windowHeight / 2
	const groupWidthHalf = typeMap.width / 2
	const groupHeightHalf = typeMap.height / 2

	const [mouseX, setMouseX] = useState(0)
	const [mouseY, setMouseY] = useState(0)

	const [imgSpaceshipBlue] = useImage(spaceshipBlue)
	const [imgSpaceshipOrange] = useImage(spaceshipOrange)
	const [imgSpaceshipPurple] = useImage(spaceshipPurple)
	const [imgSpaceshipGreen] = useImage(spaceshipGreen)

	const imgSpaceshipWidth = 37.2
	const imgSpaceshipHeight = 33.6

	const colorScheme = typeMap.colorScheme
	let colorCircles : string = "#fff"
	let colorLines : string = "#fff"
	
	if (colorScheme === "green") {
		colorCircles = "#66bb6a"
		colorLines = "#66bb6a"
	}else if (colorScheme === "red") {
		colorCircles = "#ef5350"
		colorLines = "#ef5350"
	}

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
		<Group x={typeMap.x} y={typeMap.y} width={typeMap.width} height={typeMap.height} rotation={0} visible onMouseMove={mouseUpdate}>
			<Group x={groupWidthHalf} y={windowHeightHalf + 300} height={100} visible width={imgSpaceshipWidth * 8} offsetX={(imgSpaceshipWidth * 8) / 2}>
				<Group x={75 * 0} y={0} height={imgSpaceshipHeight}>
					<Image x={0} image={imgSpaceshipBlue} width={imgSpaceshipWidth} height={imgSpaceshipHeight}></Image>
					<Text x={imgSpaceshipWidth} text={"x 0"} fill={"#fff"} height={imgSpaceshipHeight} verticalAlign={"bottom"}/>
				</Group>
				<Group x={75 * 1} y={0} height={imgSpaceshipHeight}>
					<Image x={0} image={imgSpaceshipOrange} width={imgSpaceshipWidth} height={imgSpaceshipHeight}></Image>
					<Text x={imgSpaceshipWidth} text={"x 0"} fill={"#fff"} height={imgSpaceshipHeight} verticalAlign={"bottom"}/>
				</Group>
				<Group x={75 * 2} y={0} height={imgSpaceshipHeight}>
					<Image x={0} image={imgSpaceshipPurple} width={imgSpaceshipWidth} height={imgSpaceshipHeight}></Image>
					<Text x={imgSpaceshipWidth} text={"x 0"} fill={"#fff"} height={imgSpaceshipHeight} verticalAlign={"bottom"}/>
				</Group>
				<Group x={75 * 3} y={0} height={imgSpaceshipHeight}>
					<Image x={0} image={imgSpaceshipGreen} width={imgSpaceshipWidth} height={imgSpaceshipHeight}></Image>
					<Text x={imgSpaceshipWidth} text={"x 0"} fill={"#fff"} height={imgSpaceshipHeight} verticalAlign={"bottom"}/>
				</Group>
			</Group>
			<Text y={typeMap.height - (16*5)} text={`X: ${mouseX.toString()} | Y: ${mouseY.toString()}`} fill="#fff"></Text>

			<Text x={groupWidthHalf / 2} y={groupHeightHalf / 2} text={`X- Y-`} fill="#fff" fontSize={16}></Text>
			<Text x={groupWidthHalf / 2} y={(groupHeightHalf / 2) + groupHeightHalf } text={`X- Y+`} fill="#fff" fontSize={16}></Text>
			<Text x={(groupWidthHalf) + (groupWidthHalf / 2)} y={groupHeightHalf / 2} text={`X+ Y-`} fill="#fff" fontSize={16}></Text>
			<Text x={(groupWidthHalf) + (groupWidthHalf / 2)} y={(groupHeightHalf / 2) + (windowHeightHalf / 1)} text={`X+ Y+`} fill="#fff" fontSize={16}></Text>
			
			<Circle x={groupWidthHalf} y={windowHeightHalf} radius={50} stroke={colorCircles} on></Circle>
			<Circle x={groupWidthHalf} y={windowHeightHalf} radius={150} stroke={colorCircles}></Circle>
			<Circle x={groupWidthHalf} y={windowHeightHalf} radius={250} stroke={colorCircles}></Circle>
			
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
				
				return <Line key={angle} x={groupWidthHalf} y={groupHeightHalf} points={points} stroke={colorLines}></Line>
			})}
			
			{typeMap.starFleet.map(({life, angle, radius, type}: typeSpaceship) => {
				return <Spaceship key={angle} life={life} angle={angle} radius={radius} type={type} />
			})}
		</Group>
	)
}