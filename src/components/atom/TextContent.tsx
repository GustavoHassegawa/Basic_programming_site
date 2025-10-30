
interface TextContentProps {
    children: React.ReactNode;
    className?: string;
}

export function TextContent({children, className} : TextContentProps) {
    return (
        <p className={`${className}`}>
            {children}
        </p>
    );
}