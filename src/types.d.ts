declare type Entry = {
    imageSrc: String,
    title: String,
    summary: String,
    content: String,
    tags: String[],
    links: CtaLink[]
}

declare type CtaLink = {
    label: String,
    link: String
}

declare module "*.yaml" {
    const entries: Entry[]
    export = entries
}