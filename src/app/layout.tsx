import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LivStyle AI - AI未来与Rust语言的无限可能",
  description: "探索人工智能的未来发展与Rust编程语言在AI领域的革命性应用。深入了解AGI、大语言模型、Rust机器学习框架等前沿技术。",
  keywords: "AI, 人工智能, Rust, 机器学习, AGI, 大语言模型, LLM, AI操作系统",
  authors: [{ name: "LivStyle" }],
  openGraph: {
    title: "LivStyle AI - AI未来与Rust语言的无限可能",
    description: "探索人工智能的未来发展与Rust编程语言在AI领域的革命性应用",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

