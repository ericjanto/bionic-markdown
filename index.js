import { unified } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

import mdToBionic from "./local-plugins/md-to-bionic.js";

function bionicifyMarkdown(md, options) {
  const vFile = unified()
    .use(remarkParse)
    .use(mdToBionic)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .processSync(md);

  // It was originally defaulting to use underscores, but some parsers have a problem with this.
  // Adding both underscores and asterisks regex as a workaround.
  // The default is to use the normal textVide package, which uses underscores.
  if (options && Object.keys(options).length) {
    const useUnderscore = options?.useUnderscore ?? false;
    const useAsterick = options?.useAsterick ?? false;

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
  }
  return vFile.value
}

export default bionicifyMarkdown;
