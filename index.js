import { unified } from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";

import mdToBionic from "./local-plugins/md-to-bionic.js";

function bionicifyMarkdown(md) {
  const vFile = unified()
    .use(remarkParse)
    .use(mdToBionic)
    .use(remarkStringify)
    .use(remarkFrontmatter)
    .processSync(md);

  const markdownContent = vFile.value
    .replace(/\\\*/g, "*")
    .replace(/\\\[/g, '[')
    .replace(/\*\*\*/g, '_**')
    .replace(/(?<!\*)\*{1}(?!\*)/g, '_');
  return markdownContent;
}

export default bionicifyMarkdown;
