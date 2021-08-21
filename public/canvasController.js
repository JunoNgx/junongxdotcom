// import { LogoCanvas } from "./logoCanvas";

const FPS = 60;
const INTERVAL = 1000/FPS;

let lastTime = (new Date()).getTime();

function loop() {
    let currentTime = (new Date()).getTime();
    let deltaTime = currentTime - lastTime;
    if (deltaTime > INTERVAL) {
        // update(deltaTime);
        draw();
        lastTime = currentTime - (deltaTime % INTERVAL)
    }
    window.requestAnimationFrame(loop);
}

// --== Class: Logo Canvas
class LogoCanvas {

    static canvas;
    static ctx;

    /** @typedef {{pos: Vector, base: number, height: number, angle: number, speed: number}} Parallelogram */
    /** @type { Parallelogram [] } */
    static shapes;

    /** @typedef {{cooldown: number, pos: Vector, interval: number, base: number, height: number, speed: number, color: String}} Spawner */
    /** @type { Spawner [] } */
    static spawners;

    setup() {

        this.canvas = document.getElementById("logoCanvas");
        this.ctx = this.canvas.getContext("2d");
        
        this.canvas.width = 720;
        this.canvas.height = 360;
    
        const G = {
            BASE: this.canvas.width * 0.20,
            HEIGHT: this.canvas.height * 0.37
        }
    
        window.requestAnimationFrame(loop);
        this.shapes = [];
        this.spawners = [
            {
                pos: vec(this.canvas.width * 0.32, this.canvas.height * -0.5),
                cooldown: 0,
                interval: 160,
                base: G.BASE,
                height: G.HEIGHT,
                speed: this.canvas.height * 0.003,
                isDown: true,
                color: '#99e0af'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.05, this.canvas.height * 1.2),
                cooldown: 0,
                interval: 60,
                base: G.BASE,
                height: G.HEIGHT,
                speed: this.canvas.height * 0.008,
                isDown: false,
                color: '#d968b1'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.85, this.canvas.height * -0.8),
                cooldown: 0,
                interval: 160,
                base: G.BASE,
                height: G.HEIGHT,
                speed: this.canvas.height * 0.003,
                isDown: true,
                color: '#e6df97'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.42, this.canvas.height * 1.5),
                cooldown: 0,
                interval: 120,
                base: G.BASE,
                height: G.HEIGHT,
                speed: this.canvas.height * 0.004,
                isDown: false,
                color: '#3ba1cc'
                // color: '#445'
            },
        ];
    }
    
    draw() {
        // Clear screen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    
        this.spawners.forEach(s => {
            s.cooldown--;
            if (s.cooldown <= 0) {
                this.shapes.push(paral(
                    vec(s.pos.x, s.pos.y),
                    s.base,
                    s.height,
                    s.speed,
                    s.isDown,
                    s.color
                ));
                s.cooldown = s.interval;
            }
        });
    
        this.shapes.forEach((s) => {
            s.pos.y += s.speed * Math.sin(s.angle);
            s.pos.x += s.speed * Math.cos(s.angle);
    
            const tl = vec(s.pos.x, s.pos.y);
            const tr = vec(s.pos.x + s.base, s.pos.y);
            const bl = vec(s.pos.x - s.height*Math.tan(s.angle-Math.PI/2), s.pos.y + s.height);
            const br = vec(bl.x + s.base, s.pos.y + s.height);
    
            this.ctx.fillStyle = s.color;
            this.ctx.beginPath();
            this.ctx.moveTo(tl.x, tl.y);
            this.ctx.lineTo(tr.x, tr.y);
            this.ctx.lineTo(br.x, br.y);
            this.ctx.lineTo(bl.x, bl.y);
            this.ctx.closePath();
            this.ctx.fill();
        });
        
        this.shapes = this.shapes.filter(s =>
            this.canvas.height * -1.0 < s.pos.y
            && s.pos.y < this.canvas.height * 2.0
        );
        
        const fontSize = this.canvas.width * 0.13;
        this.ctx.font = fontSize + 'px monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = '#eee';
        this.ctx.fillText("hello world", this.canvas.width/2, this.canvas.height/2);
    }
}


// --== Primary driver

/** @type { LogoCanvas } */
let logoCanvas;
/** @type { BackgroundCanvas } */
let backgroundCanvas;

window.onload = setup;

function setup() {
    logoCanvas = new LogoCanvas();
    logoCanvas.setup();

    // backgroundCanvas = new backgroundCanvas();
    // backgroundCanvas.setup();
}

function draw() {
    logoCanvas.draw();
    // backgroundCanvas.draw();
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
 * @param {Vector} _pos 
 * @param {number} _base 
 * @param {number} _height 
 * @param {number} _speed 
 * @param {boolean} _isDown 
 * @param {string} _color 
 * @returns {Parallelogram}
 */
function paral(_pos, _base, _height, _speed, _isDown, _color) {
    return {
        pos: _pos,
        base: _base,
        height: _height,
        speed: _speed,
        angle: _isDown ? Math.PI/1.5 : Math.PI/1.5 + Math.PI,
        color: _color
    };
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