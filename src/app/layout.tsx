import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "../lib/utils";
import "./globals.css";
import Navbar from "../components/nav_bar/Navbar";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Product Arena | From Thousands of Reviews to One Simple Summary",
  description: "We distill thousands of Amazon reviews into concise, insightful articles. Make confident purchasing decisions by comparing products side by side to see which fits your needs based on real user feedback.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        {/* <Navbar /> */}
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
