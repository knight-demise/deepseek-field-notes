import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://field-notes.example.com"),
  title: { default: "DeepSeek Field Notes", template: "%s · DeepSeek Field Notes" },
  description: "Independent technical field notes on Model × Harness × Ecosystem.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
