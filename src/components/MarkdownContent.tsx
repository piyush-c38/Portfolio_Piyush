import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";

type MarkdownContentProps = {
  content: string;
  className?: string;
  preserveLineBreaks?: boolean;
};

const MarkdownContent = ({
  content,
  className = "",
  preserveLineBreaks = true,
}: MarkdownContentProps) => (
  <div className={className}>
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={preserveLineBreaks ? [remarkGfm, remarkBreaks] : [remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownContent;
