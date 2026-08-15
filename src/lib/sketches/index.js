import * as col from './collisions.js';

function getCanvasWidth(container) {
	if (!container) return 600;
	return Math.min(container.clientWidth || 600, 600);
}

export const Introduction = (container) => (p) => {
	const numEach = 40;
	let cx, cy;
	const cr = 30;
	const circles = [];
	const rectangles = [];
	const lines = [];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		cx = p.width / 2;
		cy = p.height / 2;

		for (let i = 0; i < numEach; i++) {
			circles.push({
				x: p.random(p.width),
				y: p.random(-p.height, p.height),
				r: p.random(8, 20),
				speed: p.random(0.5, 2),
				hit: false
			});

			rectangles.push({
				x: p.random(p.width),
				y: p.random(-p.height, p.height),
				w: p.random(8, 20),
				h: p.random(8, 20),
				speed: p.random(0.5, 2),
				hit: false
			});

			const x = p.random(p.width);
			const y = p.random(-p.height, p.height);
			lines.push({
				x1: x,
				y1: y,
				x2: x + p.random(-20, 20),
				y2: y + p.random(-20, 20),
				speed: p.random(0.5, 2),
				hit: false
			});
		}
	};

	p.draw = () => {
		p.background(255);

		if (p.mouseX !== p.pmouseX || p.mouseY !== p.pmouseY) {
			cx = p.mouseX;
			cy = p.mouseY;
		}

		p.fill(0, 150);
		p.noStroke();
		p.ellipse(cx, cy, cr * 2, cr * 2);

		for (let i = circles.length - 1; i >= 0; i--) {
			const c = circles[i];
			c.y += c.speed;
			c.hit = col.circleCircle(c.x, c.y, c.r, cx, cy, cr);

			p.fill(c.hit ? [255, 150, 0, 150] : [0, 150, 255, 150]);
			p.noStroke();
			p.ellipse(c.x, c.y, c.r * 2, c.r * 2);

			if (c.y > p.height + 50) {
				circles.splice(i, 1);
				circles.push({
					x: p.random(p.width),
					y: p.random(-p.height, -50),
					r: p.random(8, 20),
					speed: p.random(0.5, 2),
					hit: false
				});
			}
		}

		for (let i = rectangles.length - 1; i >= 0; i--) {
			const r = rectangles[i];
			r.y += r.speed;
			r.hit = col.circleRect(cx, cy, cr, r.x, r.y, r.w, r.h);

			p.fill(r.hit ? [255, 150, 0, 150] : [0, 150, 255, 150]);
			p.noStroke();
			p.rect(r.x, r.y, r.w, r.h);

			if (r.y > p.height + 50) {
				rectangles.splice(i, 1);
				rectangles.push({
					x: p.random(p.width),
					y: p.random(-p.height, -50),
					w: p.random(8, 20),
					h: p.random(8, 20),
					speed: p.random(0.5, 2),
					hit: false
				});
			}
		}

		for (let i = lines.length - 1; i >= 0; i--) {
			const l = lines[i];
			l.y1 += l.speed;
			l.y2 += l.speed;
			l.hit = col.lineCircle(l.x1, l.y1, l.x2, l.y2, cx, cy, cr);

			p.stroke(l.hit ? [255, 150, 0, 150] : [0, 150, 255, 150]);
			p.strokeWeight(3);
			p.line(l.x1, l.y1, l.x2, l.y2);

			if (l.y1 > p.height + 50 && l.y2 > p.height + 50) {
				lines.splice(i, 1);
				const x = p.random(p.width);
				const y = p.random(-p.height, -50);
				lines.push({
					x1: x,
					y1: y,
					x2: x + p.random(-20, 20),
					y2: y + p.random(-20, 20),
					speed: p.random(0.5, 2),
					hit: false
				});
			}
		}
	};
};

export const PointPoint = (container) => (p) => {
	const targetX = 300;
	const targetY = 200;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.strokeWeight(8);
	};

	p.draw = () => {
		const px = p.mouseX;
		const py = p.mouseY;

		const colliding = col.pointPoint(px, py, targetX, targetY);
		p.background(colliding ? [255, 150, 0] : 255);

		p.stroke(0, 150, 255);
		p.point(targetX, targetY);

		p.stroke(0, 150);
		p.point(px, py);
	};
};

export const PointCircle = (container) => (p) => {
	const cx = 300;
	const cy = 200;
	const radius = 100;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.strokeWeight(8);
	};

	p.draw = () => {
		p.background(255);
		const px = p.mouseX;
		const py = p.mouseY;

		const hit = col.pointCircle(px, py, cx, cy, radius);

		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.noStroke();
		p.ellipse(cx, cy, radius * 2, radius * 2);

		p.stroke(0);
		p.point(px, py);
	};
};

export const CircleCircle = (container) => (p) => {
	const c1r = 30;
	const c2x = 300;
	const c2y = 200;
	const c2r = 100;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.noStroke();
	};

	p.draw = () => {
		p.background(255);
		const c1x = p.mouseX;
		const c1y = p.mouseY;

		const hit = col.circleCircle(c1x, c1y, c1r, c2x, c2y, c2r);

		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.ellipse(c2x, c2y, c2r * 2, c2r * 2);

		p.fill(0, 150);
		p.ellipse(c1x, c1y, c1r * 2, c1r * 2);
	};
};

export const PointRect = (container) => (p) => {
	const sx = 200;
	const sy = 100;
	const sw = 200;
	const sh = 200;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.strokeWeight(8);
	};

	p.draw = () => {
		p.background(255);
		const px = p.mouseX;
		const py = p.mouseY;

		const hit = col.pointRect(px, py, sx, sy, sw, sh);

		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.noStroke();
		p.rect(sx, sy, sw, sh);

		p.stroke(0);
		p.point(px, py);
	};
};

export const RectRect = (container) => (p) => {
	const s1w = 30;
	const s1h = 30;
	const s2x = 200;
	const s2y = 100;
	const s2w = 200;
	const s2h = 200;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.noStroke();
	};

	p.draw = () => {
		p.background(255);
		const s1x = p.mouseX;
		const s1y = p.mouseY;

		const hit = col.rectRect(s1x, s1y, s1w, s1h, s2x, s2y, s2w, s2h);

		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.rect(s2x, s2y, s2w, s2h);

		p.fill(0, 150);
		p.rect(s1x, s1y, s1w, s1h);
	};
};

export const CircleRect = (container) => (p) => {
	const r = 30;
	const sx = 200;
	const sy = 100;
	const sw = 200;
	const sh = 200;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		p.noStroke();
	};

	p.draw = () => {
		p.background(255);
		const cx = p.mouseX;
		const cy = p.mouseY;

		const hit = col.circleRect(cx, cy, r, sx, sy, sw, sh);

		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.rect(sx, sy, sw, sh);

		p.fill(0, 150);
		p.ellipse(cx, cy, r * 2, r * 2);
	};
};

export const LinePoint = (container) => (p) => {
	const x1 = 100;
	const y1 = 300;
	const x2 = 500;
	const y2 = 100;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const px = p.mouseX;
		const py = p.mouseY;

		const hit = col.linePoint(x1, y1, x2, y2, px, py);

		p.strokeWeight(5);
		p.stroke(hit ? [255, 150, 0] : [0, 150, 255]);
		p.line(x1, y1, x2, y2);

		p.strokeWeight(8);
		p.stroke(0, 150);
		p.point(px, py);
	};
};

export const LineCircle = (container) => (p) => {
	const r = 30;
	let x1, y1, x2, y2;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
		x1 = 100;
		y1 = p.height - 100;
		x2 = p.width - 100;
		y2 = 100;
	};

	p.draw = () => {
		p.background(255);
		const cx = p.mouseX;
		const cy = p.mouseY;

		const hit = col.lineCircle(x1, y1, x2, y2, cx, cy, r);

		p.strokeWeight(5);
		p.stroke(hit ? [255, 150, 0] : [0, 150, 255]);
		p.line(x1, y1, x2, y2);

		p.fill(0, 150);
		p.noStroke();
		p.ellipse(cx, cy, r * 2, r * 2);
	};
};

export const LineLine = (container) => (p) => {
	const x2 = 20;
	const y2 = 20;
	const x3 = 100;
	const y3 = 300;
	const x4 = 500;
	const y4 = 100;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const x1 = p.mouseX;
		const y1 = p.mouseY;

		const hit = col.lineLine(x1, y1, x2, y2, x3, y3, x4, y4);

		p.strokeWeight(5);
		p.stroke(hit ? [255, 150, 0] : [0, 150, 255]);
		p.line(x3, y3, x4, y4);

		p.stroke(0, 150);
		p.line(x1, y1, x2, y2);
	};
};

export const LineRect = (container) => (p) => {
	const x2 = 20;
	const y2 = 20;
	const sx = 200;
	const sy = 100;
	const sw = 200;
	const sh = 200;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const x1 = p.mouseX;
		const y1 = p.mouseY;

		const hit = col.lineRect(x1, y1, x2, y2, sx, sy, sw, sh);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.rect(sx, sy, sw, sh);

		p.strokeWeight(5);
		p.stroke(0, 150);
		p.line(x1, y1, x2, y2);
	};
};

export const PolyPoint = (container) => (p) => {
	const vertices = [
		{ x: 200, y: 100 },
		{ x: 400, y: 130 },
		{ x: 350, y: 300 },
		{ x: 250, y: 300 }
	];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const px = p.mouseX;
		const py = p.mouseY;

		const hit = col.polyPoint(vertices, px, py);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.beginShape();
		for (let v of vertices) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);

		p.strokeWeight(8);
		p.stroke(0, 150);
		p.point(px, py);
	};
};

export const PolyCircle = (container) => (p) => {
	const r = 30;
	const vertices = [
		{ x: 200, y: 100 },
		{ x: 400, y: 100 },
		{ x: 350, y: 300 },
		{ x: 250, y: 300 }
	];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const cx = p.mouseX;
		const cy = p.mouseY;

		const hit = col.polyCircle(vertices, cx, cy, r);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.beginShape();
		for (let v of vertices) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);

		p.fill(0, 150);
		p.ellipse(cx, cy, r * 2, r * 2);
	};
};

export const PolyRect = (container) => (p) => {
	const sw = 30;
	const sh = 30;
	const vertices = [
		{ x: 100, y: 100 },
		{ x: 400, y: 100 },
		{ x: 500, y: 300 },
		{ x: 200, y: 300 }
	];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const sx = p.mouseX;
		const sy = p.mouseY;

		const hit = col.polyRect(vertices, sx, sy, sw, sh);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.beginShape();
		for (let v of vertices) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);

		p.fill(0, 150);
		p.rect(sx, sy, sw, sh);
	};
};

export const PolyLine = (container) => (p) => {
	const x2 = 20;
	const y2 = 20;
	const vertices = [];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);

		const numSides = 16;
		const angle = (Math.PI * 2) / numSides;
		for (let i = 0; i < numSides; i++) {
			const a = angle * i;
			const x = 300 + Math.cos(a) * 100;
			const y = 200 + Math.sin(a) * 100;
			vertices.push({ x, y });
		}
	};

	p.draw = () => {
		p.background(255);
		const x1 = p.mouseX;
		const y1 = p.mouseY;

		const hit = col.polyLine(vertices, x1, y1, x2, y2);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.beginShape();
		for (let v of vertices) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);

		p.strokeWeight(5);
		p.stroke(0, 150);
		p.line(x1, y1, x2, y2);
	};
};

export const PolyPoly = (container) => (p) => {
	const pentagon = [];
	const randomPoly = [];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);

		const angle = (Math.PI * 2) / 5;
		for (let i = 0; i < 5; i++) {
			const a = angle * i;
			pentagon.push({
				x: 300 + Math.cos(a) * 100,
				y: 200 + Math.sin(a) * 100
			});
		}

		let a = 0;
		while (a < 360) {
			const rad = (a * Math.PI) / 180;
			const r = p.random(30, 50);
			randomPoly.push({
				x: Math.cos(rad) * r,
				y: Math.sin(rad) * r
			});
			a += p.random(15, 40);
		}
	};

	p.draw = () => {
		p.background(255);

		const mouseX = p.mouseX;
		const mouseY = p.mouseY;
		const diffX = mouseX - randomPoly[0].x;
		const diffY = mouseY - randomPoly[0].y;

		const movedPoly = randomPoly.map((v) => ({
			x: v.x + diffX,
			y: v.y + diffY
		}));

		const hit = col.polyPoly(pentagon, movedPoly);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.beginShape();
		for (let v of pentagon) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);

		p.fill(0, 150);
		p.beginShape();
		for (let v of movedPoly) {
			p.vertex(v.x, v.y);
		}
		p.endShape(p.CLOSE);
	};
};

export const TriPoint = (container) => (p) => {
	const x1 = 300,
		y1 = 100;
	const x2 = 450,
		y2 = 300;
	const x3 = 150,
		y3 = 300;

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);
	};

	p.draw = () => {
		p.background(255);
		const px = p.mouseX;
		const py = p.mouseY;

		const hit = col.triPoint(x1, y1, x2, y2, x3, y3, px, py);

		p.noStroke();
		p.fill(hit ? [255, 150, 0] : [0, 150, 255]);
		p.triangle(x1, y1, x2, y2, x3, y3);

		p.strokeWeight(8);
		p.stroke(0, 150);
		p.point(px, py);
	};
};

export const ObjectOrientedCollision = (container) => (p) => {
	class CircleObj {
		constructor(r) {
			this.x = 0;
			this.y = 0;
			this.r = r;
		}

		update() {
			this.x = p.mouseX;
			this.y = p.mouseY;
		}

		display() {
			p.fill(0, 150);
			p.noStroke();
			p.ellipse(this.x, this.y, this.r * 2, this.r * 2);
		}
	}

	class RectObj {
		constructor(x, y, w, h) {
			this.x = x;
			this.y = y;
			this.w = w;
			this.h = h;
			this.hit = false;
		}

		checkCollision(circle) {
			this.hit = col.circleRect(
				circle.x,
				circle.y,
				circle.r,
				this.x,
				this.y,
				this.w,
				this.h
			);
		}

		display() {
			p.fill(this.hit ? [255, 150, 0] : [0, 150, 255]);
			p.noStroke();
			p.rect(this.x, this.y, this.w, this.h);
		}
	}

	let circle;
	let rects = [];

	p.setup = () => {
		const w = getCanvasWidth(container);
		p.createCanvas(w, 400);

		circle = new CircleObj(30);
		for (let i = 0; i < 8; i++) {
			const x = Math.floor(p.random(50, p.width - 50) / 50) * 50;
			const y = Math.floor(p.random(50, p.height - 50) / 50) * 50;
			rects.push(new RectObj(x, y, 50, 50));
		}
	};

	p.draw = () => {
		p.background(255);
		circle.update();

		for (let r of rects) {
			r.checkCollision(circle);
			r.display();
		}

		circle.display();
	};
};
