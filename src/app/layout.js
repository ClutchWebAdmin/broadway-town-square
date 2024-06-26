import "./globals.css";
import "animate.css";
import TheFooter from "./components/TheFooter";
import { Analytics } from "@vercel/analytics/react";
import { recia, supreme } from "./styles/fonts";
import TheHeader from "./components/TheHeader";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${supreme.variable} ${recia.variable}`}>
      <body className="min-h-svh w-screen max-w-full flex flex-col mx-auto relative antialiased font-sans scroll-smooth">
        <TheHeader />
        {children}
        <TheFooter />
        <Analytics />
      </body>
    </html>
  );
}
