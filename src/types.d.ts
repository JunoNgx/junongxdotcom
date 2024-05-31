declare type Entry = {
    title: string,
    imgSrc: string,
    imgAlt: string,
    summary: string,
    content: string,
    tags: string[],
    links: CtaLink[]
}

declare type CtaLink = {
    label: string,
    url: string
}

declare type TagData = {
    tag: string,
    isDisplayed: Boolean
}

declare module "src/data/content.yaml" {
    const entries: Entry[]
    export = entries
}

declare module "src/data/contacts.yaml" {
    const entries: CtaLink[]
    export = entries
}