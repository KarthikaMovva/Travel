import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import {Poppins} from 'next/font/google';
import ScrollTop from "@/components/Front/ScrollTop";
import "./globals.css";
import ResponsiveNavbar from "@/components/Nav/ResponsiveNavbar";

const font=Poppins(
  {
    weight : ['100','200','300','400','500','600','700','800','900'],
    subsets : ['latin']
  }
)

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Travel | next js project",
  description: "This is a landing page of my travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ResponsiveNavbar/>
        {children}
        <ScrollTop/>
      </body>
    </html>
  );
}
