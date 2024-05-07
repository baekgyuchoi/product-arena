import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { buttonVariants } from "../components/ui/button";
import { Card, CardDescription, CardTitle } from "../components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "../lib/utils";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="mt-20">
        <main className="flex items-center justify-center ">
          <MaxWidthWrapper className=" flex flex-col items-center justify-center text-center ">
            {/* Badge */}
            {/* <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
              <p className="text-sm font-semibold text-gray-700">
                Product Arena
              </p>
            </div> */}

            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
              <span className="text-blue-600 underline">Compare</span> Amazon Products Through User Reviews
            </h1>

            <p className="mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl">
              Make informed decisions with our AI-analyzed summaries of thousands of trusted reviews.
            </p>

            {/* <Link
              className={cn(
                buttonVariants({
                  size: "lg",
                  className: "mt-5",
                }),
                "text-lg",
              )}
              href={"/dashboard"}
            >
              Check out our categories
            </Link> */}
            <Image
              src="/battle_image.png"
              alt="Hero image"
              width={400}
              height={200}
              quality={100}
              className="mt-8 w-48"
              />
          </MaxWidthWrapper>
        </main>
        
        
      </div>

    </>
  );
}
