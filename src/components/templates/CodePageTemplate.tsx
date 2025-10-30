import { PageTitleBlock } from "@/components/molecule/PageTitleBlock";
import { SimpleTextCard } from "../organism/SimpleTextCard";
import { CodeText } from "../atom/CodeText";
import { CodeTextCard } from "../organism/CodeTextCard";

interface TextCardData {
    title: string;
    subtitle?: string;
    text: string;
}

interface CodeCardData {
    title?: string;
    subtitle?: string;
    contentText?: string;
    contentCode: string;
    language?: string;
}

interface CodePageTemplateProps {
    pageTitle: string;
    pageSubtitle?: string;
    textCards?: TextCardData[];
    codeCards?: CodeCardData[];
}

export function CodePageTemplate({ pageTitle, pageSubtitle, textCards, codeCards } : CodePageTemplateProps) {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
            <PageTitleBlock 
                title={pageTitle} 
                subtitle={pageSubtitle}
            />
            
            {codeCards?.map((cardData, index) => (
                <CodeTextCard 
                    key={index}
                    titleAs="h2"
                    data={{
                        title: cardData.title,
                        subtitle: cardData.subtitle,
                        contentText: cardData.contentText,
                        contentCode: cardData.contentCode,
                        language: cardData.language
                    }}                                    
                />
            ))}

            {textCards?.map((cardData, index) => (
                <SimpleTextCard
                    key={index}
                    titleAs="h2"
                    data={{
                        title: cardData.title, 
                        subtitle: cardData.subtitle,
                        text: cardData.text
                    }}
                />
            ))}
        </div>
    );
}