import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "../lib/utils";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Product Arena | From Thousands of Reviews to One Simple Summary",
  description: "We leverage advanced AI to distill thousands of Amazon reviews into concise, insightful summaries. Make confident purchasing decisions by comparing products side by side to see which fits your needs based on real user feedback.",
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
