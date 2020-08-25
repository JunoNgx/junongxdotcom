import React from 'react'
import CA from './CustomAnchor'

export default function Wonyun() {
    return (
        <div className="section section--wonyun">
        <h2 className="section__header"><a className="pal--b">Wonyun Trench Run</a></h2>
        <img className="section__img" src="/wonyun_5.gif" alt="Wonyun Trench Run screenshot"/>
        <p>My latest videogame, launched in June 2020, is my first major dive into videogame architecture. Implementing <a className="pal--y">an entity-component-system</a>, the game is extremely scalable and flexible, and adding new features is a relatively simple task. The minimalistic nature and limitations of <a className="pal--r">Pico8</a> (which uses a highly limited subset of <a className="pal--b">Lua</a>) made it an interesting challenge, both technically and artistically.</p>
        <p><CA link="https://github.com/JunoNgx/p8wonyun">View the source code</CA> // <CA link="https://junongx.itch.io/wonyun-trench-run">play the game</CA>.</p>
    </div>
    )
}
