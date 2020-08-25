import React from 'react'
import CA from './CustomAnchor'
import { URL } from './URL'

export default function Gamedev() {
    return (
        <div className="section section--gamedev">
            <h2 className="section__header"><a className="pal--g">manafarm</a></h2>
            <img className="section__img" src="/manafarm_white_512.png" alt="manafarm logo"/>
            <p>Growing up with a Nintendo Famicom, I have always been a videogame enthusiast and this is my medium of choice for creative expression.</p>
            <p>I have been a hobbyist videogame developer since 2013, under the moniker <em>Aureoline Tetrahedron</em>, making a wide range of videogames in different frameworks and engines (in chronological order: <CA link="https://www.construct.net/">Construct</CA>, <CA link="http://phaser.io/">Phaser</CA>, <CA link="https://love2d.org/">love2d</CA>, <CA link="https://haxeflixel.com/">HaxeFlixel</CA>, <CA link="https://luxeengine.com/">Luxe</CA>, <CA link="https://unity.com/">Unity</CA> and <CA link="https://www.lexaloffle.com/pico-8.php">Pico8</CA>) on different platforms. The <em>manafarm</em> rebranding was made in 2019, after several years of hiatus.</p>

            <p>My major releases can be found on my <CA link={URL.itchio}>Itch.io page</CA>.</p>
        </div>
    )
}
