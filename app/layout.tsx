import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./project.css";
import "./contact.css";
import "./design-detail.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shanjiang.asia"),
  title: {
    default: "山江设计与智能应用｜设计深化与 AI 应用",
    template: "%s｜山江设计与智能应用",
  },
  description: "山江设计与智能应用分为设计深化与 AI 应用两大业务板块，按实际任务范围人工评估与报价。",
  keywords: ["Tekla钢结构深化", "钢结构详图", "钢结构加工图", "Tekla建模服务", "企业AI智能体", "AI工作流", "微信小程序开发", "网站建设"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://shanjiang.asia",
    siteName: "山江设计与智能应用",
    title: "山江设计与智能应用｜设计深化与 AI 应用",
    description: "设计深化与 AI 应用两大独立业务板块。",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "山江设计与智能应用",
              url: "https://shanjiang.asia",
              telephone: "+86-13539957289",
              email: "13120056@qq.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "广州市从化区",
                addressRegion: "广东省",
                streetAddress: "太平镇太平村渡头庄14号一楼（自主申报）",
                addressCountry: "CN",
              },
              description: "设计深化与 AI 应用两大独立业务板块，按实际任务范围人工评估。",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
