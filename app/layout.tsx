import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./project.css";
import "./contact.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://griegojaquish-bot.github.io"),
  title: {
    default: "广州山江钢结构｜模块化建筑与集成房屋厂家",
    template: "%s｜广州山江钢结构",
  },
  description: "广州山江钢结构，提供打包箱、快拼箱、工地板房、模块化办公与营地空间的一站式设计、生产和安装服务。",
  keywords: ["广州集成房屋", "从化打包箱", "模块化建筑", "工地板房", "快拼箱", "活动板房", "集成房屋"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://griegojaquish-bot.github.io",
    siteName: "广州山江钢结构",
    title: "广州山江钢结构｜模块化建筑与集成房屋厂家",
    description: "打包箱、快拼箱、工地板房与模块化空间的一站式交付服务。",
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
              name: "广州山江钢结构",
              url: "https://griegojaquish-bot.github.io",
              telephone: "+86-13539957289",
              email: "13120056@qq.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "广州市从化区",
                addressRegion: "广东省",
                streetAddress: "太平镇太平村渡头庄14号一楼（自主申报）",
                addressCountry: "CN",
              },
              description: "模块化建筑、打包箱、快拼箱和工地板房的一站式设计、生产与安装服务。",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
