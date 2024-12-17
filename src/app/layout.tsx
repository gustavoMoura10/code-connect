import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./page.module.css";
import Aside from "@/components/Aside";
export const metadata: Metadata = {
  title: "Code Connect",
  description: "Development tools for Code Connect",
};
const prompt = Prompt({
  weight: ["400", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${prompt.className}`}>
        <div className="app-container">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
