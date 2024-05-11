

import { Boxes } from "../components/ui/background-boxes";
import { BoxesBackgroundContainer } from "../components/homepage/BoxesBackgroundContainer";
import { StickyScrollContainer } from "../components/homepage/StickyScrollContainer";
import { HeroParallax } from "../components/ui/hero-parallax";
import { HeroParallaxDemo } from "../components/homepage/HeroParallax";
import { BentoGridContainer } from "../components/homepage/BentoGridContainer";
import MobileHero from "../components/homepage/MobileHero";
import SearchInput from "../components/search/SearchInput";

export default function Home() {
  return (
    <>
      <main className="w-full flex flex-col items-center justify-center ">
       
        <div className="hidden ">
          <HeroParallaxDemo />
        </div>

        <div className="w-full">
          <MobileHero />
        </div>

        
        <div className="px-1">
          <BentoGridContainer />
        </div>
        
      </main>
    </>
  );
}
