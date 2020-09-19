import React from 'react'
import CA from './CustomAnchor'

const URL_LOCAL = {
    backend_source: "https://github.com/JunoNgx/ebonymemo-backend-nodejs",
    backend_deployment: "https://scythian-rect-mrt-viking.netlify.app/.netlify/functions/server/games?limit=8&page=1&sortBy=dateAdded&sortOrder=asc",
    cma_source: "https://github.com/JunoNgx/ebonymemo-admin-reactjs",
    frontend_source: "https://github.com/JunoNgx/ebonymemo-frontend-next",
    cma_deployment: "https://eleum-loyce.netlify.app/",
    frontend_deployment: "http://ebonymemo.com/"
}

export default function EbonyMemo() {
    return (
        <div className="section section--ebonymemo">
            <h2 className="section__header">Ebony Memo</h2>
            <p><CA link={URL_LOCAL.frontend_deployment}>Ebony Memo</CA> is an arthouse videogame curator website for mobile devices. This is a custom content management system built with MERN stack, consisting of three parts:</p>
            <p><strong>Backend</strong> (NodeJS/Express, <CA link={URL_LOCAL.backend_source}>source</CA>, <CA link={URL_LOCAL.backend_deployment}>deployment</CA>): A serverless RESTful API handling CRUD operations and authorisations for data modification. The database is stored on MongoDB Atlas.</p>
            <p><strong>Content management application</strong> (ReactJS, <CA link={URL_LOCAL.cma_source}>source</CA>, <CA link={URL_LOCAL.cma_deployment}>deployment</CA>): A simple web application used by contributors to create and edit content. While most of the content is not locked behind credentials and authorisations, data-modifying actions are. Due to its purpose, it is not optimized for mobile or SEO.</p>
            <p><strong>Frontend</strong> (NextJS, <CA link={URL_LOCAL.frontend_source}>source</CA>, <CA link={URL_LOCAL.frontend_deployment}>deployment</CA>): The only publicised user-facing portion of the system. The vast majority of the content is server-side rendered and heavily optimized for SEO.</p>
        </div>
    )
}
