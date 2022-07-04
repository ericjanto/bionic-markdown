# Bionic Markdown

bionic-markdown enabels the manipulation of Markdown files for [bionic reading](https://bionic-reading.com/). More specifically, it will parse Markdown into an AST and extract paragraph text nodes. Those text values get changed into bionic text by using [text-vide](https://github.com/Gumball12/text-vide).

## Installation

You can add this package to your project using npm or yarn:

```bash
npm install bionic-markdown
```

```bash
yarn add bionic-markdown
```

## Usage

```js
import bionicifyMarkdown from "bionic-markdown";

const md = "This is some markdown";

console.log(bionicifyMarkdown(md));
// log: '**Thi**s **i**s **som**e **markdo**wn\n'
```

## Caveats

The functionality of this package is tailored towards its authors needs. As such, any MAST nodes with text values containing any of the elements below will not be converted:

```js
const invalid_element_indicators = {
  table_1: "| -",
  table_2: "|-",
  math: "$",
  footnote: "[^",
};
```

The two table options account for the differences of formatting tools.

Frontmatter fields are ignored by default.

## Contributing

This package is not actively maintained. You are welcome to contribute but active development of this package cannot be guaranteed.

Good first pull requests:

- Add an option to use the real API endpoint (will require parsing a HAST, convert it to MDAST and serialise it)
- Migrate to TypeScript
