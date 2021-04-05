
import { Image } from "react-konva";

import spaceshipBlue from '../../assets/images/spaceship/1.png';
import spaceshipOrange from '../../assets/images/spaceship/2.png';
import spaceshipPurple from '../../assets/images/spaceship/3.png';
import spaceshipGreen from '../../assets/images/spaceship/4.png';
import destroyedSpaceshipBlue from '../../assets/images/spaceship/5.png';
import destroyedSpaceshipOrange from '../../assets/images/spaceship/6.png';
import destroyedSpaceshipPurple from '../../assets/images/spaceship/7.png';
import destroyedSpaceshipGreen from '../../assets/images/spaceship/8.png';
import useImage from "use-image";

interface typePosition {
	x: number;
	y: number;
}

interface typeSpaceship {
	life: number;
	type: number;
	angle: number;
	radius: number;
}

interface typeSpaceshipColor {
	x: number;
	y: number;
	width: number;
	height: number;
	offsetX: number;
	offsetY: number;
}

function SpaceshipBlue({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgSpaceshipBlue] = useImage(spaceshipBlue)

	return <Image x={x} y={y} image={imgSpaceshipBlue} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function DestroyedSpaceshipBlue({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgDestroyedSpaceshipBlue] = useImage(destroyedSpaceshipBlue)

	return <Image x={x} y={y} image={imgDestroyedSpaceshipBlue} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function SpaceshipOrange({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgSpaceshipOrange] = useImage(spaceshipOrange)

	return <Image x={x} y={y} image={imgSpaceshipOrange} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function DestroyedSpaceshipOrange({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgDestroyedSpaceshipOrange] = useImage(destroyedSpaceshipOrange)

	return <Image x={x} y={y} image={imgDestroyedSpaceshipOrange} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function SpaceshipPurple({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgSpaceshipPurple] = useImage(spaceshipPurple)

	return <Image x={x} y={y} image={imgSpaceshipPurple} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function DestroyedSpaceshipPurple({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgDestroyedSpaceshipPurple] = useImage(destroyedSpaceshipPurple)

	return <Image x={x} y={y} image={imgDestroyedSpaceshipPurple} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function SpaceshipGreen({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgSpaceshipGreen] = useImage(spaceshipGreen)

	return <Image x={x} y={y} image={imgSpaceshipGreen} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

function DestroyedSpaceshipGreen({x, y, width, height, offsetX, offsetY} : typeSpaceshipColor) {
	const [imgDestroyedSpaceshipGreen] = useImage(destroyedSpaceshipGreen)

	return <Image x={x} y={y} image={imgDestroyedSpaceshipGreen} width={width} height={height} offsetX={offsetX} offsetY={offsetY}/>
}

export default function Spaceship({life, angle, radius, type}:typeSpaceship) {
	const windowWidthHalf = window.innerWidth / 2
	const windowHeightHalf = window.innerHeight / 2

	function getSin(angle: any) : number{
		return Number(Math.sin(angle * Math.PI/180).toFixed(4))
	}

	function getCos(angle: any) : number{
		return Number(Math.cos(angle * Math.PI/180).toFixed(4))
	}

	function getPosition(angle:number, radius:number) : typePosition {
		let y = (getSin(angle) * radius) * -1
      let x = (getCos(angle) * radius) || 0

		return {x, y}
	}

	const {y, x} = getPosition(angle, radius)
	const width = 37.2
	const height = 33.6
	const offsetX = ((windowWidthHalf / 2) - 18.6) * -1
	const offsetY = (windowHeightHalf - 16.8) * -1

	if (type === 1) {		
		if (life > 0) {
			return <SpaceshipBlue x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}else{
			return <DestroyedSpaceshipBlue x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}
	}

	if (type === 2) {
		if (life > 0) {
			return <SpaceshipOrange x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}else{
			return <DestroyedSpaceshipOrange x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}
	}

	if (type === 3) {
		if (life > 0) {
			return <SpaceshipPurple x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}else{
			return <DestroyedSpaceshipPurple x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
		}
	}

	if (life > 0) {
		return <SpaceshipGreen x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
	}else{
		return <DestroyedSpaceshipGreen x={x} y={y} width={width} height={height} offsetX={offsetX} offsetY={offsetY} />;
	}
}