import type { Metadata } from "next";

import "./globals.css";

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
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
