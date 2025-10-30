import language from "react-syntax-highlighter/dist/esm/languages/hljs/1c";
import { CodeText } from "../atom/CodeText";
import { Subtitle } from "../atom/Subtitle";
import { TextContent } from "../atom/TextContent";
import { Title } from "../atom/Title";

interface CodeContenBlockProps {
    title?: string;
    subtitle?: string;
    contentText?: string;
    contentCode: string;
    language?: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CodeContentBlock({title, subtitle, contentText, contentCode, titleAs, language} : CodeContenBlockProps) {
    const titleSize = titleAs || 'h6';
    const baseTitleClassName = 'text-2xl font-semibold mb-4 text-card-foreground';
    const languageName = language || 'python'
    return (
        <div>
            {title && 
                <Title as={titleSize} className={baseTitleClassName}>{title}</Title>
            }
            
            {subtitle && 
                <Subtitle>{subtitle}</Subtitle>
            }
            
            {contentText && 
                <TextContent>{contentText}</TextContent>
            }
            
            <CodeText language={languageName}>
                {contentCode}
            </CodeText>
        </div>
    );
}