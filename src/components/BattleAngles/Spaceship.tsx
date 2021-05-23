import { Image } from "react-konva";

import crosshair from '../../assets/images/crosshair/white/crosshair158.png';
import spaceshipBlue from '../../assets/images/spaceship/1.png';
import spaceshipOrange from '../../assets/images/spaceship/2.png';
import spaceshipPurple from '../../assets/images/spaceship/3.png';
import spaceshipGreen from '../../assets/images/spaceship/4.png';
import destroyedSpaceshipBlue from '../../assets/images/spaceship/5.png';
import destroyedSpaceshipOrange from '../../assets/images/spaceship/6.png';
import destroyedSpaceshipPurple from '../../assets/images/spaceship/7.png';
import destroyedSpaceshipGreen from '../../assets/images/spaceship/8.png';

import useImage from "use-image";
import Konva from "konva";
import { useState } from "react";

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
	life: number;
}

interface typeSpaceshipImage {
	x: number;
	y: number;
	width: number;
	height: number;
	life: number;
	imageDefault: CanvasImageSource | undefined;
	imageDestroyed: CanvasImageSource | undefined;
	onClick?(evt: Konva.KonvaEventObject<MouseEvent>): void;
}

function SpaceshipImage({x, y, width, height, life, imageDefault, imageDestroyed, onClick} : typeSpaceshipImage) {
	const [imgCrosshair] = useImage(crosshair)
	const [imageCrosshair, setImageCrosshair] = useState<HTMLImageElement | undefined>(imgCrosshair)
	let imageRotationSimples : number = 0;

	if (!imageDefault) {
		const hoverOn = (e : Konva.KonvaEventObject<MouseEvent>) => {
			setImageCrosshair(imgCrosshair)
			const imageRef = e.currentTarget;
			
			imageRef.to({
				duration: 1.5,
				rotation: 360,
				onFinish: () => {
					imageRef.to({
						duration: 1.5,
						rotation: 0
					})
				}
			})
			
			console.log("hoverOnImageDefault");
			setImageCrosshair(imgCrosshair)
		}

		const hoverOff = (e : Konva.KonvaEventObject<MouseEvent>) => {
			console.log("hoverOffImageDefault")
			setImageCrosshair(undefined)
		}
		
      return <Image rotation={imageRotationSimples} x={x + (45 / 2)} y={y + (45 / 2)} offsetX={45 / 2} offsetY={45 / 2} width={45} height={45} image={imageCrosshair} onMouseEnter={hoverOn} onMouseOut={hoverOff} />
	}

	if (life > 0) {
		return <Image x={x} y={y} image={imageDefault} width={width} height={height} onMouseDown={onClick} />
	}

	return <Image x={x} y={y} image={imageDestroyed} width={width} height={height} onMouseDown={onClick}/>
}

function SpaceshipBlue({x, y, width, height, life} : typeSpaceshipColor) {
	const [imgSpaceshipBlue] = useImage(spaceshipBlue)
	const [imgDestroyedSpaceshipBlue] = useImage(destroyedSpaceshipBlue)

	function teste(e: Konva.KonvaEventObject<MouseEvent>) {
		const image = e.target.attrs.image;
		
		if (image === imgDestroyedSpaceshipBlue) {
			e.target.attrs.image = imgSpaceshipBlue;
		}else{
			e.target.attrs.image = imgDestroyedSpaceshipBlue;
		}
	}

	return <SpaceshipImage 
				x={x}
				y={y}
				life={life}
				imageDefault={imgSpaceshipBlue}
				imageDestroyed={imgDestroyedSpaceshipBlue}
				width={width}
				height={height}
				onClick={teste}
			 />
}

function SpaceshipOrange({x, y, width, height, life} : typeSpaceshipColor) {
	const [imgSpaceshipOrange] = useImage(spaceshipOrange)
	const [imgDestroyedSpaceshipOrange] = useImage(destroyedSpaceshipOrange)

	return <SpaceshipImage x={x} y={y} life={life} imageDefault={imgSpaceshipOrange} imageDestroyed={imgDestroyedSpaceshipOrange} width={width} height={height} />
}

function SpaceshipPurple({x, y, width, height, life} : typeSpaceshipColor) {
	const [imgSpaceshipPurple] = useImage(spaceshipPurple)
	const [imgDestroyedSpaceshipPurple] = useImage(destroyedSpaceshipPurple)

	return <SpaceshipImage x={x} y={y} life={life} imageDefault={imgSpaceshipPurple} imageDestroyed={imgDestroyedSpaceshipPurple} width={width} height={height} />
}

function SpaceshipGreen({x, y, width, height, life} : typeSpaceshipColor) {
	const [imgSpaceshipGreen] = useImage(spaceshipGreen)
	const [imgDestroyedSpaceshipGreen] = useImage(destroyedSpaceshipGreen)

	return <SpaceshipImage x={x} y={y} life={life} imageDefault={imgSpaceshipGreen} imageDestroyed={imgDestroyedSpaceshipGreen} width={width} height={height} />
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

	const newY = y + ((windowHeightHalf) - (height / 2))
	const newX = x + (windowWidthHalf / 2) - (width / 2)

	if (type === 1) {		
		return <SpaceshipBlue x={newX} y={newY} width={width} height={height} life={life}/>;
	}

	if (type === 2) {
		return <SpaceshipOrange x={newX} y={newY} width={width} height={height} life={life}/>;
	}
	
	if (type === 3) {
		return <SpaceshipPurple x={newX} y={newY} width={width} height={height} life={life}/>;
	}

	if (type === 4) {
		return <SpaceshipGreen x={newX} y={newY} width={width} height={height} life={life}/>;
	}

	const newY2 = y + ((windowHeightHalf) - (45 / 2))
	const newX2 = x + (windowWidthHalf / 2) - (45 / 2)

	return <SpaceshipImage x={newX2} y={newY2} life={life} imageDefault={undefined} imageDestroyed={undefined} width={45} height={45} />
}