import React from 'react'
import CA from './CustomAnchor'
import { URL } from './URL'

export default function Others() {
    return (
        <div className="section section--others">
            <h2 className="section__header">Other works</h2>
            <p>While not programming or playing videogames, you will find me brushing my cat, enjoying arthouse cinema flicks, taking photographs, composing new Lego models on Stud.io, watching professional StarCraft, dissecting film screenplays, covering Damien Rice's songs on my guitar, or soldering a new mechanical keyboard build.</p>
            <h3 className="section__subheader">Photography</h3>
            <img className="section__img" src="/pavilion.jpg" alt="Singapore Bayfront Pavillion"/>
            <p>A rare creative hobby in which I enjoy the process more than more outcome. I shoot exclusively with vintage manual focus lenses and Fujifilm mechanical-inspired bodies (and occasionally dabble into film photography). I think sceneries and stills in portrait mode are highly underrated.</p>
            <p><CA link={URL.flickr}>My Flickr page</CA> is a relatively incomplete compilation of my works (as a result of my old habit of not sharing), but is undergoing frequent updates.</p>
            <h3 className="section__subheader">Lego StarCraft</h3>
            <img className="section__img" src="/taccom.jpg" alt="StarCraft Goliath microscale"/>
            <p>Having been a lifelong admirer of StarCraft from a game designer's perspective, I have been in and out of the game in peculiar ways. Not until my mid-20s had I realised the creative potential and elegance in tiny Lego models of 30 pieces. My tiny curiosity crept into a relatively big project (and still ongoing) that you can find on <CA link="https://www.flickr.com/photos/junongx/albums/72157715396303363">my Flickr</CA>.</p>
            <p></p>
            <h3 className="section__subheader">Mechanical keyboards</h3>
            <img className="section__img" src="/keebs_in_film.jpg" alt="Ortholinear 40% mechanical keyboards shot with film photography"/>
            <p>Started off as a utilitarian need to improve my sitting posture, this, turned out to me, was an art form itself. Among the keycaps profiles, strange layouts, switch lubrication, the dangerous rabbit hole of artisans, and how an electric circuit works, mechanical keyboards offer a fascinating and endless world of self-expression.</p>
            <p><CA link="https://github.com/qmk/qmk_firmware/tree/master/layouts/community/ortho_4x12/junonum">My personalised keymap, "junonum"</CA>, having undergone years of updates and optimisation, has been contributed to QMK Firmware as a universal 4x12 ortholinear keymap.</p>
        </div>
    )
}
