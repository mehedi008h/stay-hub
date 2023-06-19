"use client";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import ToasterProvider from "./providers/ToasterProvider";

interface ProviderProps {
    children: ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <ToasterProvider />
            <div className="transition-colors duration-300">{children}</div>
        </ThemeProvider>
    );
};

export default Provider;
