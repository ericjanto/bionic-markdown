# Bionic Markdown

bionic-markdown enabels the manipulation of Markdown files for [bionic reading](https://bionic-reading.com/). More specifically, it will extract. Its main functionality is centered around [text-vide](https://github.com/Gumball12/text-vide).

## Usage

```js
```

## Caveats

The functionality of this package is tailored towards its authors needs. As such, any MAST nodes with text values containing any of the elemtns below will not be converted:

```js
const invalid_element_indicators = {
  table_1: "| -",
  table_2: "|-",
  math: "$",
  footnote: "[^",
};
```

The two table options account for the differences of formatting tools.

## Contributing
This package is not actively maintained. You are welcome to contribute but active development of this package cannot be guaranteed.

Good first pull requests:
- Add an option to use the real API endpoint (will require parsing an HAST, convert it to MDAST and serialise it)
- Migrate to TypeScript