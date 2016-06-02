export default function drawPoint(ctx, canvas, pointState) {
	let position = pointState.position;
	let radius = Math.max(10, Math.min(canvas.width, canvas.height) / 100);
	ctx.beginPath();
	ctx.arc(position.x(0), position.x(1),
		radius, 0, 2 * Math.PI, false);
	ctx.closePath();
	ctx.fillStyle = "lightgray";
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = "black";
	ctx.stroke();
}
