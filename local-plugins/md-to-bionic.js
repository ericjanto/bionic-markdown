import { textVide } from "text-vide";
import { visit } from "unist-util-visit";

export default (options) => (tree) => {
  visit(
    tree,
    (node) => node.type === "text" && !containsInvalidElement(node.value),
    (node) => {
      node.value = textVide(node.value, { sep: "__" });
    }
  );
};

const invalid_element_indicators = {
  table_1: "| -",
  table_2: "|-",
  math: "$",
  footnote: "[^",
};

function containsInvalidElement(text) {
  let invalid = false;
  Object.entries(invalid_element_indicators).forEach(function ([_, val]) {
    if (text.includes(val)) {
      invalid = true;
    }
  });
  return invalid;
}
