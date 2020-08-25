import React from 'react'
import { URL } from './URL'
import CA from './CustomAnchor'

export default function Banner() {
    return (
        <div className="section section--banner">
            <h3 class="section__subbrand">Hi, my name is</h3>
            <h1 className="section__brand pal--p">Juno Nguyen</h1>
            <p>I'm <a className="pal--g">a software developer</a> based in Singapore, best known as the creator of the website <CA link={URL.ebonymemo}>Ebony Memo</CA> and <a className="pal--b">the independent videogame developer</a> <CA link={URL.itchio}>manafarm</CA>. I am <a className="pal--r"L>a generalist</a>, having worked on videogames, full-stack web applications, command tools and still exploring.</p>
            
            <p>Most of my works are free and open source and can be found on my GitHub, with the notable ones being listed below.</p>
        </div>
    )
}
