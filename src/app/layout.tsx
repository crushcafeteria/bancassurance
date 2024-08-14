'use client';

import { Roboto } from "next/font/google";
import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en" className="h-full">
      <title>NBK Bancassurance</title>
      <body className={`${font.className} h-full`}>
        {children}
      </body>
    </html>
  );
}
