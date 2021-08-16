let canvas = document.getElementById("logoCanvas");
let ctx = canvas.getContext("2d");
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

// function update(deltaTime) {

// }

window.onload = setup;

/** @typedef {{pos: Vector, base: number, height: number, angle: number, speed: number}} Parallelogram */
/** @type { Parallelogram [] } */
let shapes;

/** @typedef {{cooldown: number, pos: Vector, interval: number, base: number, height: number, speed: number, color: String}} Spawner */
/** @type { Spawner [] } */
let spawners;



function setup() {
    canvas.width = 720;
    canvas.height = 360;

    const G = {
        BASE: canvas.width * 0.20,
        HEIGHT: canvas.height * 0.37
    }

    window.requestAnimationFrame(loop);
    shapes = [];
    spawners = [
        {
            pos: vec(canvas.width * 0.32, canvas.height * -0.5),
            cooldown: 0,
            interval: 160,
            base: G.BASE,
            height: G.HEIGHT,
            speed: canvas.height * 0.003,
            isDown: true,
            color: '#99e0af'
            // color: '#445'
        },
        {
            pos: vec(canvas.width * 0.05, canvas.height * 1.2),
            cooldown: 0,
            interval: 60,
            base: G.BASE,
            height: G.HEIGHT,
            speed: canvas.height * 0.008,
            isDown: false,
            color: '#d968b1'
            // color: '#445'
        },
        {
            pos: vec(canvas.width * 0.85, canvas.height * -0.8),
            cooldown: 0,
            interval: 160,
            base: G.BASE,
            height: G.HEIGHT,
            speed: canvas.height * 0.003,
            isDown: true,
            color: '#e6df97'
            // color: '#445'
        },
        {
            pos: vec(canvas.width * 0.42, canvas.height * 1.5),
            cooldown: 0,
            interval: 120,
            base: G.BASE,
            height: G.HEIGHT,
            speed: canvas.height * 0.004,
            isDown: false,
            color: '#3ba1cc'
            // color: '#445'
        },
    ];
}

function draw() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    spawners.forEach(s => {
        s.cooldown--;
        if (s.cooldown <= 0) {
            shapes.push(paral(
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

    shapes.forEach((s) => {
        s.pos.y += s.speed * Math.sin(s.angle);
        s.pos.x += s.speed * Math.cos(s.angle);

        const tl = vec(s.pos.x, s.pos.y);
        const tr = vec(s.pos.x + s.base, s.pos.y);
        const bl = vec(s.pos.x - s.height*Math.tan(s.angle-Math.PI/2), s.pos.y + s.height);
        const br = vec(bl.x + s.base, s.pos.y + s.height);

        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.moveTo(tl.x, tl.y);
        ctx.lineTo(tr.x, tr.y);
        ctx.lineTo(br.x, br.y);
        ctx.lineTo(bl.x, bl.y);
        ctx.closePath();
        ctx.fill();
    });
    
    shapes = shapes.filter(s =>
        canvas.height * -1.0 < s.pos.y
        && s.pos.y < canvas.height * 2.0
    );
    
    const fontSize = canvas.width * 0.13;
    ctx.font = fontSize + 'px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#eee';
    ctx.fillText("hello world", canvas.width/2, canvas.height/2);
}

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

function vec(_x, _y) {
    return { x: _x, y: _y };
}