import React from 'react';

import { TextBit } from './TextBit';

export interface BackgroundAnimationProps {
	width: number;
	height: number;
	textBits: Array<string>;
	bitWidth?: number;
	fontColor?: string;
	backgroundColor?: string;
}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = (
	props: BackgroundAnimationProps
) => {
	const ref = React.useRef<HTMLCanvasElement>(null);

	const bitWidth = props.bitWidth ?? 30;

	const [bits, setBits] = React.useState<Array<TextBit>>([]);

	React.useEffect(() => {
		if (ref.current && bits.length < 1) {
			ref.current.width = props.width;
			ref.current.height = props.height;

			const context = ref.current.getContext('2d');

			if (context) {
				context.fillStyle = props.backgroundColor ?? 'black';
				context.fillRect(0, 0, props.width, props.height);
				generateBits();
			}
		}
	}, [ref]);

	React.useEffect(() => {
		if (ref.current) {
			ref.current.width = props.width;
			ref.current.height = props.height;
			generateBits();
		}
	}, [props.width, props.height]);

	React.useEffect(() => {
		const redraw = (): void => {
			const context = ref.current?.getContext('2d');

			if (context) {
				context.clearRect(0, 0, props.width, props.height);
				context.fillStyle = props.backgroundColor ?? 'black';
				context.fillRect(0, 0, props.width, props.height);

				for (const bit of bits) {
					bit.tick();
				}
			}

			window.requestAnimationFrame(redraw);
		};

		window.requestAnimationFrame(redraw);
	}, [bits.length]);

	const generateBits = (): void => {
		const randomText = (): string => {
			return props.textBits[Math.floor(Math.random() * props.textBits.length)];
		};

		const averageLength = Math.floor(
			props.textBits.reduce((sum, current) => sum + current.length, 0) /
				props.textBits.length
		);

		const generated: Array<TextBit> = [];
		const columns = props.width / ((bitWidth * averageLength) + 1);
		const rows = props.height / (bitWidth * averageLength);
		const context = ref.current?.getContext('2d');

		let x = bitWidth / 2;
		let y = 0;

		for (let i = 0; i < columns + 1; ++i) {
			for (let j = 0; j < rows; ++j) {
				if (context) {
					generated.push(
						new TextBit(
							randomText(),
							x,
							y,
							bitWidth,
							props.fontColor ?? 'darkorange',
							1,
							averageLength,
							context
						)
					);
				}

				y += bitWidth * averageLength;
			}

			x += bitWidth * averageLength;
			y = 0;
		}

		setBits(generated);
	};

	return <canvas ref={ref} />;
};
