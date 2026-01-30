import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kriativuz.com"),

  title: {
    default: "Kriativuz | Soluções Digitais Inovadoras",
    template: "%s | Kriativuz",
  },

  description:
    "Somos uma empresa tecnológica focada em soluções digitais inovadoras. Transformamos ideias em realidade através de desenvolvimento web, aplicativos móveis e design criativo.",

  openGraph: {
    title: "Kriativuz | Soluções Digitais Inovadoras",
    description:
      "Empresa tecnológica focada em soluções digitais inovadoras, desenvolvimento web, aplicativos móveis e design criativo.",
    url: "https://kriativuz.com",
    siteName: "Kriativuz",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kriativuz - Soluções Digitais",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Kriativuz | Soluções Digitais Inovadoras",
    description:
      "Transformamos ideias em soluções digitais através de tecnologia e design.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
