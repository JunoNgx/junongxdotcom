import React from 'react'
import URL from './URL'
import CA from './CustomAnchor'

export default function Banner() {
    return (
        <div className="section section--banner">
            <h3 class="section__subbrand">Hi, my name is</h3>
            <h1 className="section__brand pal--p">Juno Nguyen</h1>
            <p>I'm a software developer, best known as the creator of the website <CA link={URL.ebonymemo}>Ebony Memo</CA> and the independent videogame developer <CA link={URL.itchio}>manafarm</CA>. Most of my works are free and open source and can be found on my GitHub, with major ones being listed below.</p>
        </div>
    )
}
