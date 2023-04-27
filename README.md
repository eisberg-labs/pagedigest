[![Continuous Integration](https://github.com/eisberg-labs/pagedigest/actions/workflows/ci.yml/badge.svg)](https://github.com/eisberg-labs/pagedigest/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/eisberg-labs/pagedigest/branch/master/graph/badge.svg?token=GQCS6ZEVU3)](https://codecov.io/gh/eisberg-labs/pagedigest)
[![Follow me](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anamarjanica/)

# PageDigest

> Get a quick summary of any web page with PageDigest: word count, characters, read time, text to HTML ratio. 
> Chrome Extension Written in React and Material UI.

![Image](./thumbnail.png)

## Table of Contents

- [How to](#how-to)
- [Changelog](#changelog)
- [Code of Conduct](#code-of-conduct)
- [Contributing and Suggestions](#contributing-and-suggestions)
- [Sponsors](#sponsors)
- [Contact](#contact)
- [License](#license)

## How to
You can use the app directly from [Google Chrome store](https://chrome.google.com/webstore/detail/pagedigest/maalbmdhcneklfnppmlbhileahnmflpa),
or you can build it from sources.
### How to build
- `npm i && npm run build`
- include it by going to chrome://extensions
- enable developer mode
- load unpacked from `dist` directory.

## Motivation
I wanted to try out creating my first Chrome extension and needed a simple SEO utility.
Turns out there are not many utilities out there that count text to html ratio. 
I calculate text to html ratio as `textContent/bodyInnerHtml`. 
I don't think text content should include a `style` or a `script` tag.
There may be some differences in metrics compared to other apps,
due to different content scopes and formulas.
Read more on [how to create a chrome extension with React](https://www.amarjanica.com/first-attempt-at-building-a-simple-chrome-extension) at my blog.

## Changelog

All notable changes to this project will be documented in [this file](./CHANGELOG.md).
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## Code of Conduct

I follow the [Rust Code of Conduct](http://www.rust-lang.org/conduct.html).

## Contributing and Suggestions

Everyone is welcome to contribute. Send me your suggestions, report issues, fix issues.
This can turn out to be a more complex app, but I'd like to keep the UI feel as clean as possible.
You can read more about [contributing here](./CONTRIBUTING.md).

## Sponsors

If you find this project useful, give it a star. You could also consider supporting us through the following platforms:
- [Become a GitHub Sponsor](https://github.com/sponsors/amarjanica)
- [Support me on Patreon](https://www.patreon.com/amarjanica)

As this project grows, I will showcase sponsors' logos and links in this section. Thank you for your support!

## Contact

Feel free to reach out to me on [LinkedIn](https://www.linkedin.com/in/anamarjanica/).

## License
[MIT](./LICENSE-MIT) © [Eisberg Labs](http://www.eisberg-labs.com)
