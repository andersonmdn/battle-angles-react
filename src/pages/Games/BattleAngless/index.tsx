import React, { useState } from "react";
import Konva from 'konva';
import useImage from 'use-image';
import { Stage, Layer, Image, Rect, Circle, Line, Text, Group } from 'react-konva';
import { Spring, animated, config  } from 'react-spring/renderprops-konva';

import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import spaceship1 from '../../../assets/images/spaceship/1.png';

import "./styles.css";

interface IState {
	flag: boolean
}

interface IAnimatedRect {
	
}

const AnimatedRect: React.FC<IAnimatedRect> = ({...rest}) => {
	const [image] = useImage(spaceship1);
	
	const [state, setState] = useState<IState>({flag: false});

	function handleClick() {
		setState(state => ({ flag: !state.flag }));
	}

	const { flag } = state;
	//-- 93 - 84
	const height = (270*84)/93;
	const scaleX = (270*1)/93;
	const scaleY = (height*1)/84;

	return (
		<Spring
			native
			config={ config.wobbly }
			from={{ 
						x: 0,
						y: 0,
						shadowBlur: 0,
						stroke: 'rgb(10,50,19)'
					}}
			to={{
				x: flag ? 25 : 25,
				y: flag ? 25 : 25,
				shadowBlur: flag ? 25 : 5,
				stroke: flag ? 'seagreen' : '#7289da',
				width: flag ? 270 : (270 / 4),
				height: flag ? height : (height / 4),
				fillPatternScaleX: flag ? scaleX : (scaleX / 4),
				fillPatternScaleY: flag ? scaleY : (scaleY / 4),
				fillPatternRepeat: "no-repeat"
			}}
		>
		{props => (
			<animated.Rect {...props} fillPatternImage={image} onClick={handleClick} />
		)}
		</Spring>
	);
}

interface IAnimatedCircle {
	x: number,
	y: number,
	radius: number,
	delay?: number
}

const AnimatedCircle: React.FC<IAnimatedCircle> = ({x, y, radius, delay, ...rest}) => {
	return (
		<Spring
			delay={delay ? delay : 0}
			native
			config={ config.wobbly }
			from={{ 
						radius: 1
					}}
			to={{
				radius: radius 
			}}
		>
		{props => (
			<animated.Circle {...props} x={x} y={y} stroke="#7289da" />
		)}
		</Spring>
	);
}

interface IAnimatedLine {
	x: number,
	y: number,
	x1: number,
	y1: number,
	x2: number,
	y2: number,
	delay?: number
}

const AnimatedLine: React.FC<IAnimatedLine> = ({x, y, x1, y1, x2, y2, delay, ...rest}) => {
	return (
		// <Circle x={window.innerWidth / 3} y={window.innerHeight / 2} radius={250} stroke="#7289da"/>
		<Spring
			delay={delay ? delay : 0}
			native
			config={ config.gentle }
			from={{ 
						points: [0, 0, 0, 0]
					}}
			to={{
				points: [x1, y1, x2, y2]
			}}
		>
		{props => (
			<animated.Line {...props} x={x} y={y} stroke="#7289da" />
		)}
		</Spring>
	);	
}

function BattleAngless() {
	let angles : Array<number> = [30, 60];

	function getSin(angle: any) : number{
		return Number(Math.sin(angle * Math.PI/180).toFixed(4));
	}

	function getCos(angle: any) : number{
		return Number(Math.cos(angle * Math.PI/180).toFixed(4));
	}

	let initialX = window.innerWidth / 4
	let initialY = window.innerHeight / 2

	return (
		<div id="game-page" className="display-flex-center-center">
			<div>
				<CircularProgressbar value={0.6} text={`${0.6}%`} strokeWidth={10}/>
			</div>

			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
					<Group x={window.innerWidth / 2} y={100} width={130} height={25} rotation={0} >
						
					</Group>

					<AnimatedRect />
					<AnimatedCircle x={initialX} y={initialY} radius={250} delay={1500}/>
					<AnimatedCircle x={initialX} y={initialY} radius={150} delay={1000}/>
					<AnimatedCircle x={initialX} y={initialY} radius={50} delay={500}/>
					
					{angles.map((angle: number) => {
						let sin = (135 / getSin(angle));
						let cos = (135 / getCos(angle));

						return <AnimatedLine key={angle + "L1"} x={initialX} y={initialY} x1={sin} y1={cos} x2={sin * -1} y2={cos * -1} delay={250}/>
					})}

					{angles.map((angle: number) => {
						let sin = (135 / getSin(angle));
						let cos = (135 / getCos(angle));

						return <AnimatedLine key={angle + "L2"} x={initialX} y={initialY} x1={sin * -1} y1={cos} x2={sin} y2={cos * -1} delay={250}/>
					})}

					<AnimatedLine x={initialX} y={initialY}  x1={-300} y1={0} x2={300} y2={0} delay={250}/>
					<AnimatedLine x={initialX} y={initialY}  x1={0} y1={-300} x2={0} y2={300} delay={250}/>
				</Layer>
			</Stage>
		</div>
	);
}

export default BattleAngless;
