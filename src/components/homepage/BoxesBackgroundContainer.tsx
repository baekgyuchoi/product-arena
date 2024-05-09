"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "../../lib/utils";

export function BoxesBackgroundContainer() {
  return (
    <div className="h-full relative w-full overflow-hidden bg-transparent flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        <span className="font-black italic">Product <span className="text-blue-700">Arena</span></span>: The Best Product Comparison Site
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
  );
}
