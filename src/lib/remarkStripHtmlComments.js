import { visit } from 'unist-util-visit';

const HTML_COMMENT = /^\s*<!--[\s\S]*?-->\s*$/;

/** Removes `<!-- ... -->` from the MDAST (does not touch comments inside fenced code blocks). */
export default function remarkStripHtmlComments() {
  return (tree) => {
    visit(tree, 'html', (node, index, parent) => {
      if (HTML_COMMENT.test(node.value)) {
        parent.children.splice(index, 1);
        return index;
      }
    });
  };
}
