import Link from "next/link";
import Image from "next/image";

import { cn } from "../lib/utils";

import MaxWidthWrapper from "../components/MaxWidthWrapper";
import { buttonVariants } from "../components/ui/button";
import { MobileNav } from "../components/MobileNav";
import { Search } from "lucide-react";

const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();


  return (
    <nav
      className={cn(
        "fixed h-16 inset-x-0 top-0 z-30 w-full bg-black  transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="navbar w-full bg-base-100 rounded-lg">
          <div className="navbar-start ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>Categories</a>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </li>
                <li><a>Item 2</a></li>
                <li><a>Item 3</a></li>
              </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl"><span className="font-black italic">Product<span className="text-blue-700">Arena</span></span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a href='/categories'>All Categories</a></li>
              <li>
                <details>
                  <summary>Electronics</summary>
                  <ul className="p-2">
                    <li><a href='/categories/monitors'>Monitors</a></li>    
                    <li><a href='/categories/laptops'>Laptops</a></li>
                    <li><a href='/categories/cameras'>Cameras</a></li>
                    <li><a href='/categories/vr-headsets'>VR Headsets</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Home Improvement</summary>
                  <ul className="p-2">
                    <li><a href='/categories/outdoor-grill'>Outdoor Grills</a></li>
                    <li><a href='/categories/couches'>Couches</a></li>
                    <li><a>Mattresses</a></li>
                    <li><a>Bed Frames</a></li>
                    <li><a>Desks</a></li>
                    <li><a>Chairs</a></li>
                    <li><a>Tables</a></li>

                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Music</summary>
                  <ul className="p-2">
                    <li><a>Piano/Keyboards</a></li>
                    <li><a>Drums</a></li>
                    <li><a>Brass</a></li>
                    <li><a>Speaker</a></li>
                    <li><a>Headphones</a></li>
                    <li><a>Mics</a></li>
                  </ul>
                </details>
              </li>
              {/* <li>
                <details>
                  <summary>Sports/Outdoors</summary>
                  <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Kids/Babies</summary>
                  <ul className="p-2">
                    <li><a>Toys</a></li>
                    <li><a>Submenu 2</a></li>
                  </ul>
                </details>
              </li> */}
              
            
            
              
            </ul>
          </div>
          <div className="navbar-end">
            <a href="/search" className=" mr-4"><Search size='20' /></a>
          </div>
        </div>
        {/* <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link
            href="/"
            className="flex z-40 justify-center items-center gap-1"
          >
            
            <span className="text-2xl font-semibold font-black text-white">Product<span className="text-blue-700">Arena</span></span>
          </Link>
          <div className="flex gap-1 sm:gap-4 items-center">
            {!isUserSignedIn ? (
              <MobileNav />
            ) : (
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "sm:hidden mr-3",
                })}
                href="/dashboard"
              >
                Dashboard
              </Link>
            )}

            <div className="hidden items-center space-x-4 sm:flex">
              
              <>
                <Link
                  href="/story"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Story
                </Link>
                <Link
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                  href="/faqs"
                >
                  FAQs
                </Link>
                <Link
                  className={buttonVariants({
                    size: "sm",
                  })}
                  href="/getting-started"
                >
                  Get started
                </Link>
              </>
              
            </div> */}

{/*            
          </div>
        </div> */}
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
