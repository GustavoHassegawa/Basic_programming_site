import { Subtitle } from "../atom/Subtitle";
import { Title } from "../atom/Title";

interface PageTitleBlockProps {
    title: string;
    subtitle?: string;
}

export function PageTitleBlock({title, subtitle} : PageTitleBlockProps) {
    const basePageTitleStyle = "text-6xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl text-primary mb-4 animate-in fade-in-up duration-500";
    const basePageSubtitleStyle = "text-xl text-muted-foreground mt-4 leading-relaxed animate-in fade-in-up delay-100 duration-500";
    const basePageHeaderStyle = "text-center mb-10 max-w-3xl";
    
    return (
        <header className={basePageHeaderStyle}>
            <Title as="h1" className={basePageTitleStyle}>{title}</Title>
            { subtitle && 
            <Subtitle className={basePageSubtitleStyle}>{subtitle}</Subtitle>
            }
        </header>
    );
}