declare type Entry = {
    title: String,
    imageSrc: String,
    summary: String,
    content: String,
    tags: String[],
    links: CtaLink[]
}

declare type CtaLink = {
    label: String,
    url: String
}

declare module "*.yaml" {
    const entries: Entry[]
    export = entries
}