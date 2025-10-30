import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeTextProps {
    children: string;
    language?: string;
    className?: string; 
}

export function CodeText({children, language, className} : CodeTextProps) {
    return (
        <div>
            <SyntaxHighlighter
                language={language}
                style={dracula}
                showLineNumbers={true}
                wrapLines={true}

                customStyle={{
                    margin: 0,
                    padding: '1.5rem', 
                    borderRadius: '0.5rem',
                    backgroundColor: 'transparent', 
                    fontSize: '0.875rem', 
                    lineHeight: '1.4',
                }}
                PreTag="div" 
                className="overflow-x-auto"
            >
                {children.trim()}
            </SyntaxHighlighter>
        </div>
    );
}