# Portfolio Website

My centralised portfolio website, where my works across fields and medium gather in one single place.

## Current deployment

The website is currently deployed at [JunoNgx.com](https://junongx.com/) via Vercel.

## Tech stack

* [Vite](https://vitejs.dev/)
* [Svelte](https://svelte.dev/)
* [SASS](https://sass-lang.com/) (using BEM naming convention and indented syntax)
* [TypeScript](https://www.typescriptlang.org/)

## Environment variables

This project doesn't require any environment variable and no setup is neccessary for deployment.

## Local deployment

First, clone the repository and move into the directory:

```bash
git clone git@github.com:JunoNgx/junongxdotcom.git
cd junongxdotcom
```

Then install the packages (`yarn` is required):
```bash
yarn
```

Then run the development server:
```bash
yarn dev
```

Alternatively, run the network-exposed development server with the flag `--host`:

```bash
yarn dev --host
```

Open [http://localhost:3000](http://localhost:3000) (by default) with your browser to see the result.

This is a self-contained static site and doesn't require any data fetching.

## Previous versions

This website has gone through several major overhauls, including usage of other tech stacks. Previous versions can be found in other branches. Current domain is generally always deployed with the branch `production`.

## Acknowledgement

This website uses the typeface [Jost](https://indestructibletype.com/Jost.html) by [Owen Earl](https://indestructibletype.com/), who has also influenced its overall design. Icons are from the [Feather project](https://feathericons.com/). The layout in the current iteration is heavily inspired by [Tim Holman](https://tholman.com/).

## Contribution

For suggestions and  criticism, please feel free to open an issue for this repository.