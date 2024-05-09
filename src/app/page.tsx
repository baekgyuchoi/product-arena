import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { buttonVariants } from "../components/ui/button";
import { Card, CardDescription, CardTitle } from "../components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { Boxes } from "../components/ui/background-boxes";
import { BoxesBackgroundContainer } from "../components/homepage/BoxesBackgroundContainer";
import { StickyScrollContainer } from "../components/homepage/StickyScrollContainer";
import { HeroParallax } from "../components/ui/hero-parallax";
import { HeroParallaxDemo } from "../components/homepage/HeroParallax";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center ">
       
        <div className="hidden lg:block">
          <HeroParallaxDemo />
        </div>

        <div className="lg:hidden">
          {/* <MobileHero /> */}
        </div>
        
        
      </main>
    </>
  );
}
