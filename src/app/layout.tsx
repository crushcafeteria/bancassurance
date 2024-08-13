import type { Metadata } from "next";
import { Inter, Roboto, Ropa_Sans } from "next/font/google";
import "./globals.css";

const font = Roboto({
  subsets: ["latin"],
  weight: ["400", '700'],
});

export const metadata: Metadata = {
  title: "NBK Bancassurance",
  description: "Hello world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${font.className} h-full`}>
        {children}
      </body>
    </html>
  );
}
