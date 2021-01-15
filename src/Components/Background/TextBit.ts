/**
 * Background textbit holder. Redraws on given canvas every tick.
 */
export class TextBit {
	/**
	 * Drawn text
	 */
	text: string;
	/**
	 * X position. Read only.
	 */
	x: number;
	/**
	 * Y position. Changes every tick by speed.
	 */
	y: number;
	/**
	 * Speed of text fall.
	 */
	speed: number;
	/**
	 * Canvas to draw on.
	 */
	context: CanvasRenderingContext2D;

	constructor(text: string, x: number, y: number, speed: number, context: CanvasRenderingContext2D) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.context = context;
	}

	/**
	 * Draws the text on current position
	 */
	private draw(): void {
		this.context.fillStyle = 'darkorange';
		this.context.font = '14pt Roboto';

		this.context.fillText(this.text, this.x, this.y);
	}

	/**
	 * Moves the text and draws it.
	 *
	 * @returns {Boolean} Is the text outside visible area?
	 */
	tick(): boolean {
		console.log('here');
		this.y += this.speed;

		this.draw();

		return this.y > this.context.canvas.height;
	}
}
