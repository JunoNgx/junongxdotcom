import React from 'react'

export default function CustomAnchor ({children, link}) {
    return (
        <a className="custom-hyperlink" href={link} target="_blank">{children}</a>
    )
}
