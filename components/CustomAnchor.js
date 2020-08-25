import React from 'react'

export default function CustomAnchor ({children, link}) {
    return (
        <a href={link} target="_blank">{children}</a>
    )
}
