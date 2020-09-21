import React, { useState } from 'react'
import { URL } from './URL'
import CA from './CustomAnchor'

export default function Navbar() {

    const [isExpanded, setIsExpanded] = useState(false)

    let navbarControlClass = "navbar__control"
    let navbarControlIconClass = "navbar__control__icon"
    let navbarControlLabelClass = "navbar__control__label"
    let navbarContentClass = "navbar__content"

    if (isExpanded) {
        navbarControlClass += " " + navbarControlClass + "--expanded"
        navbarControlIconClass += " " + navbarControlIconClass + "--expanded"
        navbarControlLabelClass += " " + navbarControlLabelClass + "--expanded"
        navbarContentClass += " " + navbarContentClass + "--expanded"
    }

    return (
        <div className="navbar">
            <div className={navbarControlClass} onClick={()=>setIsExpanded(isExpanded=>!isExpanded)}>
                <p className={navbarControlLabelClass}>My contacts</p>
                <div className={navbarControlIconClass}/>
            </div>
            <div className={navbarContentClass}>
                <ul className="navbar__content__contacts">
                    <ContactLink link={URL.twitter}>Twitter</ContactLink>
                    <ContactLink link={URL.github}>GitHub</ContactLink>
                    <ContactLink link={URL.itchio}>Itch.io</ContactLink>
                    <ContactLink link={URL.flickr}>Flickr</ContactLink>
                    <ContactLink link={URL.instagram}>Instagram</ContactLink>
                    <ContactLink link={URL.email}>Email</ContactLink>
                    <ContactLink link={URL.linkedin}>LinkedIn</ContactLink>
                </ul>
                <p className="navbar__content__contacts__close" onClick={()=>{setIsExpanded(false)}}>
                    ╳
                </p>
            </div>
        </div>

    )
}

function ContactLink({children, link}) {
    return (
        <li className="navbar__content__contacts__item"><CA link={link}>{children}</CA></li>
    )
}