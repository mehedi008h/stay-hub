import Provider from "./Provider";
import "./globals.css";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});
const jetbrains = JetBrains_Mono({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
});

export const metadata = {
    title: "Stay-Hub",
    description: "Book your favorite place",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <ToasterProvider />
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
