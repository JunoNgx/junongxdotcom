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
class LogoCanvas {

    static canvas;
    static ctx;

    static BASE;
    static HEIGHT;

    /** @typedef {{pos: Vector, base: number, height: number, angle: number, speed: number, color: string}} Parallelogram */
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

        this.BASE = this.canvas.width * 0.20;
        this.HEIGHT= this.canvas.height * 0.37;

        this.shapes = [];
        this.spawners = [
            {
                pos: vec(this.canvas.width * 0.32, this.canvas.height * -0.5),
                cooldown: 0,
                interval: 160,
                base: this.BASE,
                height: this.HEIGHT,
                speed: this.canvas.height * 0.003,
                isDown: true,
                color: '#99e0af'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.05, this.canvas.height * 1.2),
                cooldown: 0,
                interval: 60,
                base: this.BASE,
                height: this.HEIGHT,
                speed: this.canvas.height * 0.008,
                isDown: false,
                color: '#d968b1'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.85, this.canvas.height * -0.8),
                cooldown: 0,
                interval: 160,
                base: this.BASE,
                height: this.HEIGHT,
                speed: this.canvas.height * 0.003,
                isDown: true,
                color: '#e6df97'
                // color: '#445'
            },
            {
                pos: vec(this.canvas.width * 0.42, this.canvas.height * 1.5),
                cooldown: 0,
                interval: 120,
                base: this.BASE,
                height: this.HEIGHT,
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
                this.shapes.push(this.paral(
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
    paral(_pos, _base, _height, _speed, _isDown, _color) {
        return {
            pos: _pos,
            base: _base,
            height: _height,
            speed: _speed,
            angle: _isDown ? Math.PI/1.5 : Math.PI/1.5 + Math.PI,
            color: _color
        };
    }
}

// --== Class: BackgroundCanvas
class BackgroundCanvas {

    static canvas;
    static ctx;

    static CORE_RADIUS; 
    static AMT_OF_PLANETS_MIN; 
    static AMT_OF_PLANETS_MAX; 
    static PLANET_SIZE_MIN; 
    static PLANET_SIZE_MAX; 
    static PLANET_ROTATION_SPEED_MIN; 
    static PLANET_ROTATION_SPEED_MAX; 
    static PLANET_DISTANCE; 

    /**
     * @typedef {{
     * size: number,
     * rotation: number,
     * rotationSpd: number
     * }} Planet
     */
    /** @type { Planet [] } */
    static planets;

    /** @type { Vector } */
    static cursor;

    /** @type { Vector } */
    static core;

    /** @type { number } */
    static rotation;

    setup() {

        this.canvas = document.getElementById("backgroundCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.CORE_RADIUS = 32;
        this.AMT_OF_PLANETS_MIN = 3;
        this.AMT_OF_PLANETS_MAX = 7;
        this.PLANET_SIZE_MIN = 8;
        this.PLANET_SIZE_MAX = 18;
        this.PLANET_ROTATION_SPEED_MIN = -0.05;
        this.PLANET_ROTATION_SPEED_MAX = 0.05;
        this.PLANET_DISTANCE = 48;

        this.planets = [];
        const noOfPlanets = Math.floor(randomWithRange(this.AMT_OF_PLANETS_MIN,
            this.AMT_OF_PLANETS_MAX));
        for (let i = 0; i < noOfPlanets; i++) {
            this.planets.push({
                size: randomWithRange(this.PLANET_SIZE_MIN, this.PLANET_SIZE_MAX),
                rotation: Math.random() * Math.PI * 2,
                rotationSpd: randomWithRange(this.PLANET_ROTATION_SPEED_MIN,
                    this.PLANET_ROTATION_SPEED_MAX)
            });
        }

        this.cursor = vec(this.canvas.width/2, this.canvas.height/2);
        this.core = vec(this.canvas.width/2, this.canvas.height/2);
        window.addEventListener("mousemove", (e) => {
            const canvasRect = this.canvas.getBoundingClientRect();
            this.cursor.x = Math.round(e.clientX - canvasRect.left);
            this.cursor.y = Math.round(e.clientY - canvasRect.top);
        });
        window.addEventListener("resize", e => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.canvas.style.width = this.canvas.width + 'px';
            this.canvas.style.height = this.canvas.height + 'px';
        });
        this.rotation = 0;   
    }

    draw() {
        // Clear screen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.core.x = lerp(this.core.x, this.cursor.x, 0.5);
        this.core.y = lerp(this.core.y, this.cursor.y, 0.5);
        this.rotation += 0.04;
        
        this.ctx.lineWidth = 3;
        // Draw the core
        /** @type { Vector[] } */
        let corePoints = [];
        for (let i = 0; i < 4; i++) {
            corePoints[i] = vec(
                this.core.x + this.CORE_RADIUS * Math.cos(this.rotation + Math.PI/2 * i),
                this.core.y + this.CORE_RADIUS * Math.sin(this.rotation + Math.PI/2 * i),
            );
        }
        this.ctx.strokeStyle = "#887";
        this.ctx.beginPath();
        this.ctx.moveTo(corePoints[0].x, corePoints[0].y);
        this.ctx.lineTo(corePoints[1].x, corePoints[1].y);
        this.ctx.lineTo(corePoints[2].x, corePoints[2].y);
        this.ctx.lineTo(corePoints[3].x, corePoints[3].y);
        this.ctx.closePath();
        this.ctx.stroke();

        // Drawing the sattlelites
        for (let i = 0; i < this.planets.length; i++) {
            this.planets[i].rotation += this.planets[i].rotationSpd;

            const pPos = vec(
                this.core.x + (64 + i * this.PLANET_DISTANCE) * Math.cos(this.planets[i].rotation),
                this.core.y + (64 + i * this.PLANET_DISTANCE) * Math.sin(this.planets[i].rotation)
            );

            this.ctx.beginPath();
            this.ctx.arc(pPos.x, pPos.y, this.planets[i].size, 0, Math.PI*2);
            this.ctx.stroke();
        };
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

    backgroundCanvas = new BackgroundCanvas();
    backgroundCanvas.setup();

    window.requestAnimationFrame(loop);
}

function draw() {
    logoCanvas.draw();
    backgroundCanvas.draw();
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