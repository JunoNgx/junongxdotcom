import React from 'react'
import { URL } from './URL'
import CA from './CustomAnchor'

export default function Banner() {
    return (
        <div className="section section--banner">
            <h1 className="section__brand">Hi, I'm Juno Nguyen.</h1>
            <p>I am a <strong>software developer</strong> based in Singapore, best known as the creator of the website <CA link={URL.ebonymemo}>Ebony Memo</CA> and <strong>the independent videogame developer</strong> <CA link={URL.itchio}>manafarm</CA>.</p>
            
            <p>I am a <strong>generalist</strong>, having worked on videogames, full-stack web applications, command tools and still exploring. Most of my works are free and open source and can be found on <CA link={URL.github}>my GitHub</CA>, with the notable ones being listed below.</p>
        </div>
    )
}
