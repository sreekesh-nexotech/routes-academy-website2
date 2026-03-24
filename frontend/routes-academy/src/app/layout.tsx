import type { Metadata } from "next";
import { Poppins, Onest } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import defaultSEO from "@/utils/seo";

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
  ...defaultSEO,
  title: {
    default: "Routes Academy | Learn from the Best",
    template: "%s | Routes Academy",
  },
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
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXQNXDFX');`}
        </Script>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXQNXDFX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <div className="flex-grow ">
          <div>{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
