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

## Options
Running the package without options will return the default response from the [textVide](https://www.npmjs.com/package/text-vide) package, but this doesn't always play well with markdown parsers. 

You can pass optional flags to run custom regex functions that will switch out the textVide default response with a slightly improved underscore strategy or with an asterick strategy. 
```js
import bionicifyMarkdown from "bionic-markdown";

const md = "This is some markdown";

// Optional flags to use either 
options = {
  useAsterick: true,
  useUnderscore: false
}

const markdown = bionicifyMarkdown(md, options);
```

This is what these options are doing under the hood:
```js
// bionic-markdown/index.js
if (useUnderscore) {
  const markdownContent = vFile.value
    .replace(/\\\_/g, "_")
    .replace(/\\\[/g, "[");
  return markdownContent;
}

if (useAsterick) {
  const markdownContent = vFile.value
    .replace(/\\\_/g, "*")
    .replace(/\\\[/g, "[");
  return markdownContent;
}
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
