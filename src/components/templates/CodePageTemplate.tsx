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

export type Block = 
  | { cardType: "text"; data: TextCardData }
  | { cardType: "code"; data: CodeCardData };

interface CodePageTemplateProps {
    pageTitle: string;
    pageSubtitle?: string;
    blocks?: Block[];
}


export function CodePageTemplate({ pageTitle, pageSubtitle, blocks } : CodePageTemplateProps) {
    
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 bg-background text-foreground">
            <PageTitleBlock 
                title={pageTitle} 
                subtitle={pageSubtitle}
            />
            
            {blocks?.map((block, index) => {
                if (block.cardType === "code") {
                    return <CodeTextCard key={index} data={block.data} />;
                } else {
                    return <SimpleTextCard key={index} data={block.data} />;
                }
            })}
        </div>
    );
}