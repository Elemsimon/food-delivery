import type { Metadata } from "next";

import { Inter } from 'next/font/google'
import "./globals.css";

export const metadata: Metadata = {
  title: "Food Delivery",
  description: "Your Favorite Food Delivery Partner",
};

const inter =Inter({
  subsets:['latin'],
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" className="w-full"/>
      </head>
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
