import Link from "next/link";
import { CodeContentBlock } from "../molecule/CodeContentBlock";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";

interface CodeTextCardProps {
    data: {
        title?: string;
        subtitle?: string;
        contentText?: string;
        contentCode: string;
        language?: string;
    }
    titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    previousPage?: string;
    nextPage?: string;
}

export function CodeTextCard({ data, titleAs, previousPage, nextPage } : CodeTextCardProps) {
    const cardStyle = "bg-card p-8 rounded-xl shadow-2xl max-w-2xl w-full border border-border/50 animate-in fade-in-up delay-200 duration-500"

    return (
        <Card className={`${cardStyle} m-10`}>
            <CardContent>
                <CodeContentBlock 
                    title={data.title}
                    subtitle={data.subtitle}
                    contentText={data.contentText}
                    contentCode={data.contentCode}
                    language={data.language}
                    titleAs={titleAs}
                />
            </CardContent>

            <CardFooter className="flex justify-between">

                {
                    previousPage &&
                    <Button asChild >
                        <Link href={previousPage}>Página Anterior</Link>
                    </Button>
                }

                { 
                    nextPage && 
                    <Button asChild>
                        <Link href={nextPage}>Próxima Página</Link>
                    </Button>
                }   
            </CardFooter>
        </Card>
    );
}