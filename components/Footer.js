import React from 'react'
import CA from './CustomAnchor'

export default function Footer() {
    return (
        <div className="footer">
            <p>made with <CA link="https://nextjs.org/">NextJS</CA> and <CA link="https://sass-lang.com/">SASS</CA></p>
            <p>uncopyrighted and <CA link="https://github.com/JunoNgx/junongxdotcom">open source</CA></p>
        </div>
    )
}
