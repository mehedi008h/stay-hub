"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="transition-colors duration-300">{children}</div>
        </ThemeProvider>
    );
};

export default Provider;
