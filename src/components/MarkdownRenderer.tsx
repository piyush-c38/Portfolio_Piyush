import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  content: string;
  className?: string;
};

const MarkdownRenderer = ({ content, className = "" }: Props) => (
  <div className={className}>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
            {children}
          </a>
        ),
        img: ({ src, alt }) => (
          <img src={src} alt={alt ?? ""} className="rounded-xl shadow-sm my-6 w-full object-cover" loading="lazy" />
        ),
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-6">{children}</blockquote>
        ),
        ul: ({ children }) => <ul className="list-disc pl-5 my-4 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal pl-5 my-4 space-y-2">{children}</ol>,
        h2: ({ children }) => <h2 className="text-2xl font-semibold mt-8 mb-3">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>,
        p: ({ children }) => <p className="my-4 leading-7 text-gray-800">{children}</p>,
        table: ({ children }) => <div className="overflow-x-auto my-6"><table className="w-full text-sm">{children}</table></div>,
        th: ({ children }) => <th className="border border-gray-200 bg-gray-50 px-3 py-2 text-left">{children}</th>,
        td: ({ children }) => <td className="border border-gray-200 px-3 py-2">{children}</td>,
      }}
    >
      {content}
    </ReactMarkdown>
  </div>
);

export default MarkdownRenderer;
