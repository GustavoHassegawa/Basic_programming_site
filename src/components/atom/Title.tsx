import React from "react"

interface TitleProps {
    children: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
}

export function Title({ children, as: Component = 'h6', className}: TitleProps) {
    // let sizeClasses = '';
    // if (Component === 'h1') sizeClasses = 'text-4xl';
    // else if (Component === 'h2') sizeClasses = 'text-3xl';
    // else if (Component === 'h3') sizeClasses = 'text-2xl';
    // else if (Component === 'h4') sizeClasses = 'text-xg';
    // else if (Component === 'h5') sizeClasses = 'text-lg';
    // else if (Component === 'h6') sizeClasses = 'text-base';
    
    return (
        <Component className={`${className}`} style={{whiteSpace:"pre-line"}}>
            {children}
        </Component>
    );
}