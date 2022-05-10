// Canvas controller scripts for JunoNgx.com by Juno Nguyen

// --== Core setup for canvas loop
const FPS = 60;
const INTERVAL = 1000/FPS;

let lastTime = (new Date()).getTime();

function loop() {
    let currentTime = (new Date()).getTime();
    let deltaTime = currentTime - lastTime;
    if (deltaTime > INTERVAL) {
        draw();
        lastTime = currentTime - (deltaTime % INTERVAL)
    }
    window.requestAnimationFrame(loop);
}

// --== Shared Type definitions

/**
 * @typedef {{
 * x: number,
 * y: number
 * }} Vector
 */

// --== Class: Logo Canvas

class ScrollCanvas {
    canvas;
    ctx;

    /** @type { {x: number, y: number} [] } */
    posList;

    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 720;
        this.canvas.height = 360;

        this.posList = [
            {x: this.canvas.width * 0.2, y: this.canvas.height * 0.5},
            {x: this.canvas.width * 0.5, y: this.canvas.height * 0.5},
            {x: this.canvas.width * 0.8, y: this.canvas.height * 0.5}
        ];
        shuffle(this.posList);
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        const primaryColor = "#eeeeee";
        this.ctx.lineWidth = 4;

        // // Background
        this.ctx.fillStyle = "#07748f";
        this.ctx.fillRect(0, 0, 720, 360);

        // Wavily-moving square
        this.ctx.fillStyle = primaryColor;

        const offsetX = 48 * Math.sin(window.scrollY/30 % 360);
        const offsetY = 120 * Math.sin(window.scrollY/100);
        const squareSize = 30;
        this.ctx.fillRect(
            this.posList[0].x + offsetX,
            this.posList[0].y + offsetY - squareSize/2,
            squareSize, squareSize
        );

        // Colour-shifting triangle
        this.ctx.fillStyle = hslToHex(window.scrollY/4 % 360, 70, 70);
        polygon(this.ctx, this.posList[1].x, this.posList[1].y, 75, 3, Math.PI/2, true);

        // Rotating circle
        this.ctx.strokeStyle = primaryColor;
        this.ctx.fillStyle = primaryColor;

        const circRadius = 75;
        const circRadiusInner = 20;
        const nodeRadius = 15;
        const circRotation = window.scrollY/100;
        const amountOfNodes = 7;
        const nodeAngle = Math.PI * 2 /7;

        this.ctx.beginPath();
        this.ctx.arc(this.posList[2].x, this.posList[2].y, circRadius, 0, Math.PI*2);
        this.ctx.stroke();

        this.ctx.beginPath();
        this.ctx.arc(this.posList[2].x, this.posList[2].y, circRadiusInner, 0, Math.PI*2);
        this.ctx.stroke();

        for (let i = 0; i < amountOfNodes; i++) {
            this.ctx.beginPath();
            this.ctx.arc(
                this.posList[2].x + circRadius * Math.cos(circRotation + nodeAngle * i),
                this.posList[2].y + circRadius * Math.sin(circRotation + nodeAngle * i),
                nodeRadius,
                0,
                Math.PI * 2
            )
            this.ctx.fill();
        }
    }
}

// --== Primary driver

/** @type { ScrollCanvas } */
let scrollCanvas;

// window.onload = setup;
window.addEventListener('DOMContentLoaded', () => setup());

function setup() {
    scrollCanvas = new ScrollCanvas("scroll-canvas");
    window.requestAnimationFrame(loop);
}

function draw() {
    scrollCanvas.draw();
}

// --== Other utility functions

/**
 * Create a simplistic 2D vector
 * @param {number} _x 
 * @param {number} _y 
 * @returns {Vector}
 */
function vec(_x, _y) {
    return { x: _x, y: _y };
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
 function randomWithRange(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * 
 * @param {number} start 
 * @param {number} end 
 * @param {number} amt 
 * @returns 
 */
function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Swapping values
        [array[currentIndex], array[randomIndex]] =
            [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function polygon(_ctx, _x, _y, _radius, _sides, _rotation, _isFilled) {

    if (_sides < 3) {
        console.error("Drawing polygon with less than 3 sides");
        return;
    }

    const a = (Math.PI * 2) / _sides;
    _ctx.beginPath();
    _ctx.moveTo(
        _x + _radius * Math.cos(_rotation),
        _y + _radius * Math.sin(_rotation)
    );
    for (let i = 1; i < _sides; i++) {
        _ctx.lineTo(
            _x + _radius * Math.cos(_rotation + a*i),
            _y + _radius * Math.sin(_rotation + a*i)
        );
    }
    if (_isFilled) _ctx.fill();
    else {
        _ctx.closePath();
        _ctx.stroke();
    }
}

// by icl7126 from StackOverflow
// https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex/54014428
function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Get the distance between two points
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 */
 function dist(x1, y1, x2, y2) {
    return Math.sqrt( (x1 - x2) ** 2 + (y1 - y2) ** 2);
}