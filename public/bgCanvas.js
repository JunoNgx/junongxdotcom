/** @type { HTMLCanvasElement } */
// @ts-expect-error
let canvas = document.getElementById("backgroundCanvas");
/** @type { CanvasRenderingContext2D } */
// @ts-expect-error
let ctx = canvas.getContext("2d");
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

window.onload = setup;

const G = {
    CORE_RADIUS: 32,
    AMT_OF_PLANETS_MIN: 3,
    AMT_OF_PLANETS_MAX: 7,
    PLANET_SIZE_MIN: 8,
    PLANET_SIZE_MAX: 18,
    PLANET_ROTATION_SPEED_MIN: -0.05,
    PLANET_ROTATION_SPEED_MAX: 0.05,
    PLANET_DISTANCE: 48
}

/**
 * @typedef {{
 * x: number,
 * y: number
 * }} Vector
 */

/**
 * @typedef {{
 * size: number,
 * rotation: number,
 * rotationSpd: number
 * }} Planet
 */
/** @type { Planet [] } */
let planets;

/** @type { Vector } */
let cursor;

/** @type { Vector } */
let core;

/** @type { number } */
let rotation;


function setup() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    planets = [];
    const noOfPlanets = Math.floor(randomWithRange(G.AMT_OF_PLANETS_MIN,
        G.AMT_OF_PLANETS_MAX));
    for (let i = 0; i < noOfPlanets; i++) {
        planets.push({
            size: randomWithRange(G.PLANET_SIZE_MIN, G.PLANET_SIZE_MAX),
            rotation: Math.random() * Math.PI * 2,
            rotationSpd: randomWithRange(G.PLANET_ROTATION_SPEED_MIN,
                G.PLANET_ROTATION_SPEED_MAX)
        });
    }

    cursor = vec(canvas.width/2, canvas.height/2);
    core = vec(canvas.width/2, canvas.height/2);
    window.addEventListener("mousemove", (e) => {
        const canvasRect = canvas.getBoundingClientRect();
        cursor.x = Math.round(e.clientX - canvasRect.left);
        cursor.y = Math.round(e.clientY - canvasRect.top);
    });
    window.addEventListener("resize", e => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = canvas.width + 'px';
        canvas.style.height = canvas.height + 'px';
    });
    rotation = 0;

    window.requestAnimationFrame(loop);
}

function draw() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height) 
    core.x = lerp(core.x, cursor.x, 0.5);
    core.y = lerp(core.y, cursor.y, 0.5);
    rotation += 0.04;
    
    ctx.lineWidth = 3;
    // Draw the core
    /** @type { Vector[] } */
    let corePoints = [];
    for (let i = 0; i < 4; i++) {
        corePoints[i] = vec(
            core.x + G.CORE_RADIUS * Math.cos(rotation + Math.PI/2 * i),
            core.y + G.CORE_RADIUS * Math.sin(rotation + Math.PI/2 * i),
        );
    }
    ctx.strokeStyle = "#887";
    ctx.beginPath();
    ctx.moveTo(corePoints[0].x, corePoints[0].y);
    ctx.lineTo(corePoints[1].x, corePoints[1].y);
    ctx.lineTo(corePoints[2].x, corePoints[2].y);
    ctx.lineTo(corePoints[3].x, corePoints[3].y);
    ctx.closePath();
    ctx.stroke();

    // Drawing the sattlelites
    for (let i = 0; i < planets.length; i++) {
        planets[i].rotation += planets[i].rotationSpd;

        const pPos = vec(
            core.x + (64 + i * G.PLANET_DISTANCE) * Math.cos(planets[i].rotation),
            core.y + (64 + i * G.PLANET_DISTANCE) * Math.sin(planets[i].rotation)
        );

        ctx.beginPath();
        ctx.arc(pPos.x, pPos.y, planets[i].size, 0, Math.PI*2);
        ctx.stroke();
    };
}

/**
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
function randomWithRange(min, max) {
    return Math.random() * (max - min) + min;
}

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
 * @param {number} start 
 * @param {number} end 
 * @param {number} amt 
 * @returns 
 */
function lerp (start, end, amt){
    return (1-amt)*start+amt*end
}