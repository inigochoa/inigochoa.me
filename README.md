# inigochoa.me

## Overview

inigochoa.me source code. With a clean and simple design made with Tailwind CSS,
it compiles into a fast web page thanks to Eleventy.

![Pagespeed score](./img/pagespeed.svg)

### Setup

```console
yarn install # Install node modules
yarn dev     # Start a dev server
yarn prod    # Build for production
```

### Tech

The site uses [Eleventy] to compile markdown files to html. Styles are added
using [Tailwind CSS]. Compiled files can be found inside *_site*.

### Linting

Markdown files can be linted with:

```console
yarn lint:md
```

JavaScript can be linted with:

```console
yarn lint:js
```

[Eleventy]: https://www.11ty.dev/
[Tailwind CSS]: https://tailwindcss.com/
