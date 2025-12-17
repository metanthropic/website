import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Metanthropic | Safe AGI Research",
  description: "An independent research organization dedicated to safe and broadly beneficial Artificial General Intelligence.",
  // ADDED: Link to your public files
  icons: {
    icon: "/favicon.ico", // Standard favicon
    shortcut: "/icon.png", // Shortcut icon
    apple: "/icon.png",    // For iOS home screen
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased bg-[#FAFAFA]`}>
        {children}
      </body>
    </html>
  );
}
