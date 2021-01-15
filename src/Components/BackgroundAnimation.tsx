import React from 'react';

import { TextBit } from './Background/TextBit';

export const BackgroundAnimation: React.FC = () => {
	const ref = React.useRef<HTMLCanvasElement>(null);
	const [bits, setBits] = React.useState<Array<TextBit>>([]);

	React.useEffect(() => {
		if (ref.current && bits.length < 1) {
			ref.current.width = window.innerWidth;
			ref.current.height = window.innerHeight;
			const context = ref.current.getContext('2d');

			if (context) {
				setBits([new TextBit('Hello', 15, 25, 1, context)]);
			}
		}
	});

	React.useEffect(() => {
		const redraw = (): void => {
			if (ref.current) {
				ref.current.getContext('2d')?.clearRect(0, 0, ref.current.width, ref.current.height);

				for (const bit of bits) {
					bit.tick();
				}
			}

			window.requestAnimationFrame(redraw);
		};

		window.requestAnimationFrame(redraw);
	}, [bits]);

	return <canvas ref={ref} />;
};
