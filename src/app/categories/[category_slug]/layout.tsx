import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "../../../lib/utils";
import "../../globals.css";
import Navbar from "../../../components/Navbar";

export const metadata: Metadata = {
  title: "Product Arena | Product Comparisons Based on User Reviews",
  description: "Gain insights into the best products based on user reviews and specifications.",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

      <div
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
      
        {children}
      </div>

  );
}