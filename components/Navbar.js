import React, { useState } from 'react'
import { useSpring, animated} from 'react-spring'
import { URL } from './URL'
import CA from './CustomAnchor'

export default function ContactContactLinknks() {

    const [isExpanded, setIsExpanded] = useState(false)
    // const labelFontSizeProps = useSpring({
    //     // font-size: isExpanded ? 2rem : 1.2rem
    //     fontSize: '2rem'
    // })

    // // const props = useSpring ({
    // //     width: isExpanded ? width: 0
    // // })
    // const navbarContentClipPathProps = useSpring({
    //     clipPath: 'circle(1000px at 90% 5%)'
    // })
    const springProps = useSpring({
        fontSize: isExpanded ? '2rem' : '1.2rem',
        transform: isExpanded ? 'rotate(225deg)' : 'rotate(45deg)',
        transformOrigin: isExpanded ? '65% 65%' : '100% 100%',
        clipPath: isExpanded ? 'circle(1000px at 90% 5%)' : 'circle(0px at 90% 5%)',

        config: {
            duration: 400,
            // mass: 1,
            // tension: 400,
            // friction: 10
            easing: t => 1-(--t)*t*t*t
        }
    })

    let navbarControlClass = "navbar__control"
    let navbarControlIconClass = "navbar__control__icon"
    let navbarControlLabelClass = "navbar__control__label"
    let navbarContentClass = "navbar__content"

    // if (isExpanded) {
    //     navbarControlClass += " " + navbarControlClass + "--expanded"
    //     navbarControlIconClass += " " + navbarControlIconClass + "--expanded"
    //     navbarControlLabelClass += " " + navbarControlLabelClass + "--expanded"
    //     navbarContentClass += " " + navbarContentClass + "--expanded"
    // }

    return (
        <div className="navbar">
            <div
            className={navbarControlClass}
            onClick={()=>setIsExpanded(isExpanded=>!isExpanded)}>
                <animated.p
                className={navbarControlLabelClass}
                style={{fontSize: springProps.fontSize}}>
                    My contacts
                </animated.p>
                <animated.div
                className={navbarControlIconClass}
                style={{transform: springProps.transform, transformOrigin: springProps.transformOrigin}}
                />
            </div>
            <animated.div
            className={navbarContentClass}
            style={{clipPath: springProps.clipPath}}
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