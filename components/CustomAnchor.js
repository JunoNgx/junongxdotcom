import React from 'react'

export default function CustomAnchor ({children, link}) {
    return (
        <a className="custom-hyperlink" href={link} rel="noopener" target="_blank">{children}</a>
    )
}
