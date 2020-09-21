import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { URL } from './URL'
import CA from './CustomAnchor'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {

    const [isExpanded, setIsExpanded] = useState(false)
    const isMobile = useMediaQuery({ maxDeviceWidth: 720 })

    // Expand animation is powered by react-spring
    const springProps = useSpring({
        fontSize: isExpanded ? '2rem' : '1.2rem',
        transform: isExpanded ? 'rotate(225deg)' : 'rotate(45deg)',
        transformOrigin: isExpanded ? '65% 65%' : '100% 100%',
        clipPath: isExpanded ? 'circle(1000px at 90% 5%)' : 'circle(0px at 90% 5%)',

        config: {
            duration: 400,
            // easeOutQuart
            easing: t => 1-(--t)*t*t*t
        }
    })

    // react-spring and animation are only used in mobile layout
    const navbarContentStyle = (isMobile)
        ? {clipPath: springProps.clipPath}
        : {}

    return (
        <div className="navbar">
            <div
            className={"navbar__control"}
            onClick={()=>setIsExpanded(isExpanded=>!isExpanded)}>
                <animated.p
                className={"navbar__control__label"}
                style={{fontSize: springProps.fontSize}}>
                    My contacts
                </animated.p>
                <animated.div
                className={"navbar__control__icon"}
                style={{transform: springProps.transform, transformOrigin: springProps.transformOrigin}}
                />
            </div>
            <animated.div
            className={"navbar__content"}
            style={navbarContentStyle}
            >
                <ul className="navbar__content__contacts">
                    <ContactLink link={URL.twitter}>Twitter</ContactLink>
                    <ContactLink link={URL.github}>GitHub</ContactLink>
                    <ContactLink link={URL.itchio}>Itch.io</ContactLink>
                    <ContactLink link={URL.flickr}>Flickr</ContactLink>
                    <ContactLink link={URL.instagram}>Instagram</ContactLink>
                    <ContactLink link={URL.email}>Email</ContactLink>
                    <ContactLink link={URL.linkedin}>LinkedIn</ContactLink>
                </ul>
                <p
                className="navbar__content__contacts__close"
                onClick={()=>{setIsExpanded(false)}}>
                    ╳
                </p>
            </animated.div>
        </div>

    )
}

function ContactLink({children, link}) {
    return (
        <li className="navbar__content__contacts__item"><CA link={link}>{children}</CA></li>
    )
}