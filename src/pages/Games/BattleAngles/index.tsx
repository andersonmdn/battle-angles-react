import React, { useState } from "react";
import Konva from 'konva';
import useImage from 'use-image';
import { Stage, Layer, Image, Rect, Circle, Line } from 'react-konva';
import { Spring, animated } from 'react-spring/renderprops-konva';

import "./styles.css";

interface IState {
	flag: boolean
}

interface IColorReact {
	
}

const ColoredRect: React.FC<IColorReact> = ({...rest}) => {
	const [image] = useImage('https://konvajs.github.io/assets/yoda.jpg');

	const [state, setState] = useState<IState>({flag: false});

	function handleClick() {
		setState(state => ({ flag: !state.flag }));
	}

	const { flag } = state;

	return (
		<Spring
			native
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
				height: flag ? 300 : (300 / 4),
				fillPatternScaleX: flag ? 1.26 : (1.26 / 4),
				fillPatternScaleY: flag ? 1.30 : (1.30 / 4),
				fillPatternRepeat: "no-repeat"
			}}
		>
		{props => (
			<animated.Rect {...props} fillPatternImage={image} onClick={handleClick} />
		)}
		</Spring>
	);
}

function BattleAngles() {
	const [image] = useImage('https://konvajs.github.io/assets/yoda.jpg');

	return (
		<div id="game-page" className="display-flex-center-center">
			<Stage width={window.innerWidth} height={window.innerHeight}>
				<Layer>
				
				
				{/* <Image image={image}/> */}
				<ColoredRect />

				<Rect 
					x={1500} 
					y={100}
					fillPatternImage={image}
					fillPatternX={0}
					fillPatternY={0}
					fillPatternScale={{x: 0.23, y: 0.23}}
					fillPatternRepeat="no-repeat"
					stroke="#7289da"
					width={50}
					height={50}
				/>

				<Circle x={window.innerWidth / 3} y={window.innerHeight / 2} radius={250} stroke="#7289da"/>
				<Circle x={window.innerWidth / 3} y={window.innerHeight / 2} radius={150} stroke="#7289da"/>
				<Circle x={window.innerWidth / 3} y={window.innerHeight / 2} radius={50} stroke="#7289da"/>

				<Line x={window.innerWidth / 3} y={window.innerHeight / 2} points={[-300, 0, 300, 0]}  stroke="#7289da"/>
				<Line x={window.innerWidth / 3} y={window.innerHeight / 2} points={[0, -300, 0, 300]}  stroke="#7289da"/>

				<Circle x={(window.innerWidth / 3) * 2} y={window.innerHeight / 2} radius={250} stroke="#7289da"/>
				<Circle x={(window.innerWidth / 3) * 2} y={window.innerHeight / 2} radius={150} stroke="#7289da"/>
				<Circle x={(window.innerWidth / 3) * 2} y={window.innerHeight / 2} radius={50} stroke="#7289da"/>
				
				</Layer>
			</Stage>
		</div>
	);
}

export default BattleAngles;
