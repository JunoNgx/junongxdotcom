import React from 'react'
import CA from './CustomAnchor'
import URL from './URL'

export default function Gamedev() {
    return (
        <div className="section section--gamedev">
            <h2 className="section__header">manafarm</h2>
            <img className="section__img" src="/manafarm_white_512.png" alt="manafarm logo"/>
            <p>Growing up with a Famicom, I have always been a videogame enthusiast and this is my medium of choice for creative expression.</p>
            <p>I have been a hobbyist videogame developer since 2013, under the moniker <em>Aureoline Tetrahedron</em>, making a wide range of videogames in different frameworks and engines (in chronological order: <CA link="https://www.construct.net/">Construct</CA>, <CA link="http://phaser.io/">Phaser</CA>, <CA link="https://love2d.org/">love2d</CA>, <CA link="https://haxeflixel.com/">HaxeFlixel</CA>, <CA link="https://luxeengine.com/">Luxe</CA>, <CA link="https://unity.com/">Unity</CA> and <CA link="https://www.lexaloffle.com/pico-8.php">Pico8</CA>) on different platforms.</p>

            <p>Unfortunately, a few of my early games did not survive the couple of storage failure disasters I have had (back when before git was integral to my workflow). Nevertheless, my major works can be found on my <CA link="URL.itchio">Itch.io page</CA>.</p>
        </div>
    )
}
