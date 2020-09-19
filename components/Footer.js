import React from 'react'
import CA from './CustomAnchor'

export default function Footer() {
    return (
        <div className="footer">
            <p>made by Juno Nguyen with <CA link="https://nextjs.org/">NextJS</CA></p>
            <p>this site is uncopyrighted and <CA link="https://github.com/JunoNgx/junongxdotcom">open source</CA></p>
        </div>
    )
}
