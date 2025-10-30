import { Subtitle } from "../atom/Subtitle";
import { TextContent } from "../atom/TextContent";
import { Title } from "../atom/Title";

interface TextContentBlockProps {
    title: string;
    subtitle?: string;
    text: string;
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function TextContentBlock({title, subtitle, text, titleAs } : TextContentBlockProps) {
    const titleSize = titleAs || 'h6';
    const baseTitleClassName = 'text-2xl font-semibold mb-4 text-card-foreground';

    return (
        <div>
            <Title as={titleSize} className={baseTitleClassName}>{title}</Title>
            { subtitle && <Subtitle>{subtitle}</Subtitle>}
            <TextContent>{text}</TextContent>
        </div>
    );
} 