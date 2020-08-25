import React from 'react'
import { URL } from './URL'
import CA from './CustomAnchor'

export default function ContactContactLinknks() {
    return (
        // <div>
            <ul className="contacts">
                <ContactLink link={URL.twitter}>Twitter</ContactLink>
                <ContactLink link={URL.github}>GitHub</ContactLink>
                <ContactLink link={URL.itchio}>Itch.io</ContactLink>
                {/* <ContactLink link={URL.instagram}>Instagram</ContactLink> */}
                <ContactLink link={URL.flickr}>Flickr</ContactLink>
                <ContactLink link={URL.email}>Email</ContactLink>
                <ContactLink link={URL.linkedin}>LinkedIn</ContactLink>
            </ul>
        // </div>

    )
}

function ContactLink({children, link}) {
    return (
        <li className="contacts__item"><CA link={link}>{children}</CA></li>
    )
}