import type { FC } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

/** ###  */
const MarkdownText: FC<{ children: string }> = ({ children: markdownStr }) => (
  <Markdown remarkPlugins={[remarkGfm]}>{markdownStr}</Markdown>
);

export default MarkdownText;
