import type { Metadata } from "next";
import { Poppins, Onest } from "next/font/google";

import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-onest",
});

export const metadata: Metadata = {
  title: "Routes Academy",
  description: "Industry Built Program That Turn Learning Into Hiring.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${onest.variable}`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="Routes Academy" />
      </head>
      <body className="bg-white flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow ">
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
