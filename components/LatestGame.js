import React from 'react'
import CA from './CustomAnchor'

export default function LatestGame() {
    return (
        <div className="section section--wonyun">
        <h2 className="section__header">Wonyun Trench Run</h2>
        <img className="section__img" src="/wonyun_5.gif" alt="Wonyun Trench Run screenshot"/>
        <p>My latest videogame, launched in June 2020, is my first major dive into videogame architecture. Implementing the <strong>entity-component-system</strong> pattern, the game is extremely scalable and flexible, and adding new features is a breeze. The minimalistic nature and limitations of <strong>Pico8</strong> (which uses a highly limited subset of Lua) made it an interesting challenge, both technically and artistically.</p>
        <p><CA link="https://github.com/JunoNgx/p8wonyun">View the source code</CA> // <CA link="https://junongx.itch.io/wonyun-trench-run">play the game</CA>.</p>
    </div>
    )
}
