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
    default: "山江设计服务｜钢结构设计与详图支持",
    template: "%s｜山江设计服务",
  },
  description: "山江设计服务专注钢结构设计表达、Tekla 三维建模、详图深化与加工图支持，按项目范围人工报价。",
  keywords: ["Tekla钢结构深化", "钢结构详图", "钢结构加工图", "Tekla建模服务", "钢结构设计", "施工图深化"],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://shanjiang.asia",
    siteName: "山江设计服务",
    title: "山江设计服务｜钢结构设计与详图支持",
    description: "钢结构设计表达、Tekla 建模、详图深化与加工图支持。",
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
              name: "山江设计服务",
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
              description: "钢结构设计表达、Tekla 三维建模、详图深化与加工图支持。",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
