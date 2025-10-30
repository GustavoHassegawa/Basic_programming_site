import { TextContentBlock } from "../molecule/TextContentBlock";
import { Card, CardContent } from "../ui/card";

interface SimpleTextCardProps {
    data: {
        title: string;
        subtitle?: string;
        text: string;
    }
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function SimpleTextCard({ data, titleAs }: SimpleTextCardProps) {
    const cardStyle = "bg-card p-8 rounded-xl shadow-2xl max-w-2xl w-full border border-border/50 animate-in fade-in-up delay-200 duration-500"
    const titleSize = titleAs || 'h6';

    return (
        <Card className={`${cardStyle} m-10`}>
            <CardContent>
                <TextContentBlock 
                    title={data.title}
                    subtitle={data.subtitle} 
                    text={data.text}
                    titleAs={titleSize}                    
                />
            </CardContent>
        </Card>
    );
}