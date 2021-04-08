# inigochoa.me

![Website](https://img.shields.io/website?label=inigochoa.me&style=flat-square&url=https%3A%2F%2Finigochoa.me%2F)
![GitHub package.json version](https://img.shields.io/github/package-json/v/inigochoa/inigochoa.me?style=flat-square)
![GitHub](https://img.shields.io/github/license/inigochoa/inigochoa.me?style=flat-square)
![Libraries.io dependency status for GitHub repo](https://img.shields.io/librariesio/github/inigochoa/inigochoa.me?style=flat-square)

inigochoa.me source code.

## Getting Started

These instructions will give you a copy of the project up and running on your
local machine for development and testing purposes. See deployment for notes on
deploying the project on a live system.

### Prerequisites

Requirements to build, test and push:

- Node.js 8 or greater
- yarn

### Installing

A step by step series of examples that tell you how to get a development
environment running.

1. Install dependencies

    ```console
    yarn install
    ```

2. Start the development environment

    ```console
    yarn dev
    ```

## Running the tests

### lint

lint tests check for code errors inside the markdown and the javascript files.
To run lint tests type:

```console
yarn lint
```

Alternatively you can launch the tests separately:

```console
yarn lint:js
yarn ling:md
```

### e2e

e2e tests ensure the site continueas to work after changes are made.
To run e2e tests type:

```console
yarn cy:run
```

This generates a report on the console with the results of the tests.

If, on the other hand, you prefer to see the tests while they are running, you
can type:

```console
yarn cy:open
```

## Deployment

Generate a production ready static site by typing:

```console
yarn prod
```

## Built with

- [Eleventy] with markdown-it
- [Tailwind CSS]
- [Cypress.io]
- [humans.txt]
- [Contributor Covenant]

## Contributing

Please read [CONTRIBUTING.md] for details on our code of conduct, and process
for submitting pull requests to us.

## Versioning

We use [Semantic Versioning] for versioning. For the versions available, see the
[tags on this repository].

## Authors

See [AUTHORS.md] for a list of authors who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md] file for
details.

[CONTRIBUTING.md]: https://github.com/inigochoa/inigochoa.me/blob/main/CONTRIBUTING.md
[Semantic Versioning]: http://semver.org/
[tags on this repository]: https://github.com/inigochoa/inigochoa.me/tags
[AUTHORS.md]: https://github.com/inigochoa/inigochoa.me/blob/main/AUTHORS.md
[LICENSE.md]: https://github.com/inigochoa/inigochoa.me/blob/main/LICENSE.md
[Eleventy]: https://www.11ty.dev/
[Tailwind CSS]: https://tailwindcss.com/
[Cypress.io]: https://www.cypress.io/
[humans.txt]: https://humanstxt.org/
[Contributor Covenant]: https://www.contributor-covenant.org/
