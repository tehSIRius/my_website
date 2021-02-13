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
	 * Y position.
	 */
	y: number;
	/**
	 * Font size
	 */
	fontSize: number;
	/**
	 * Rendered font color
	 */
	fontColor: string;
	/**
	 * Speed at which the text falls
	 */
	speed: number;
	/**
	 * Space between text bits
	 */
	spacing: number;
	/**
	 * Canvas to draw on.
	 */
	context: CanvasRenderingContext2D;

	constructor(
		text: string,
		x: number,
		y: number,
		fontSize: number,
		fontColor: string,
		speed: number,
		spacing: number,
		context: CanvasRenderingContext2D
	) {
		this.text = text;
		this.x = x;
		this.y = y;
		this.fontSize = fontSize;
		this.fontColor = fontColor;
		this.speed = speed;
		this.spacing = spacing;
		this.context = context;
	}

	/**
	 * Draws the text on current position
	 */
	private draw(): void {
		// Saves previous context state
		this.context.save();
		this.context.textBaseline = 'top';
		// Moves origin to the position of the TextBit
		this.context.translate(this.x, this.y);
		// Rotates the rendered text
		this.context.rotate((-20 * Math.PI) / 180);

		this.context.fillStyle = this.fontColor;
		this.context.font = `${this.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;
		this.context.fillText(this.text, 0, 0);

		// Restores to previous context state
		this.context.restore();
	}

	/**
	 * Moves the text and draws it.
	 *
	 */
	tick(): void {
		this.draw();

		this.y += this.speed;

		if (this.y > window.innerHeight + this.fontSize) {
			this.y = -(this.fontSize * this.spacing);
		}
	}
}
