"use client"
import Link from "next/link";
import Image from "next/image";

import { cn } from "../lib/utils";

import MaxWidthWrapper from "../components/MaxWidthWrapper";

import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "./ui/navigation-menu"


const Navbar = () => {
  // Replace with your auth of choice, e.g. Clerk: const { userId } = auth();

  const menuItems = [
    {
      name: "Electronics",
      subMenuItems: [
        {
          name: "Monitors",
          href: "/categories/monitors",
        },
        {
          name: "Laptops",
          href: "/categories/laptops",
        },
        {
          name: "Cameras",
          href: "/categories/cameras",
        },
        {
          name: "VR Headsets",
          href: "/categories/vr-headsets",
        },
      ],
    },
    {
      name: "Home Improvement",
      subMenuItems: [
        {
          name: "Outdoor Grills",
          href: "/categories/outdoor-grill",
        },
        {
          name: "Couches",
          href: "/categories/couches",
        },
        {
          name: "Mattresses",
          href: "/categories/mattresses",
        },
        {
          name: "Bed Frames",
          href: "/categories/bed-frames",
        },
        {
          name: "Desks",
          href: "/categories/desks",
        },
        {
          name: "Chairs",
          href: "/categories/chairs",
        },
        {
          name: "Tables",
          href: "/categories/tables",
        },
      ],
    },
    {
      name: "Music",
      subMenuItems: [
        {
          name: "Piano/Keyboards",
          href: "/categories/piano-keyboards",
        },
        {
          name: "Drums",
          href: "/categories/drums",
        },
        {
          name: "Brass",
          href: "/categories/brass",
        },
        {
          name: "Speaker",
          href: "/categories/speaker",
        },
        {
          name: "Headphones",
          href: "/categories/headphones",
        },
        {
          name: "Mics",
          href: "/categories/mics",
        },
      ],
    },

  ]


  return (
    <nav
      className={cn(
        "fixed h-18  inset-x-0 top-0 z-30 w-screen  transition-all"
      )}
    >
      <MaxWidthWrapper>
        <div className="navbar w-full bg-gradient-to-br from-gray-200 to-blue-800/50 rounded-lg shadow-lg mt-1">
          <div className="navbar-start ">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a href="/categories">All Categories</a>
                </li>
                {menuItems.map((menuItem) => {
                  return (
                    <li key={menuItem.name}>
                      <details>
                        <summary>{menuItem.name}</summary>
                        <ul className="p-2">
                          {menuItem.subMenuItems.map((subMenuItem) => {
                            return (
                              <li key={subMenuItem.name}>
                                <a href={subMenuItem.href}>{subMenuItem.name}</a>
                              </li>
                            )
                          })}
                        </ul>
                      </details>
                    </li>
                  )
                })}
               
              </ul>
            </div>
            <a href="/" className="btn btn-ghost text-xl"><span className="font-black italic">Product<span className="text-blue-700">Arena</span></span></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle() } href="/categories">All Categories</NavigationMenuLink>
                </NavigationMenuItem>
                {menuItems.map((menuItem) => {
                  return (
                    <NavigationMenuItem key={menuItem.name}>
                      <NavigationMenuTrigger className="bg-transparent">{menuItem.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                     

                        <NavigationMenuList className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {menuItem.subMenuItems.map((subMenuItem) => {
                            return (
                              <NavigationMenuItem key={subMenuItem.name} className="bg-gray-200  w-full rounded-lg flex items-center justify-center">
                                <NavigationMenuLink className="underline font-semibold font-sans hover:text-blue-800" href={subMenuItem.href}>{subMenuItem.name}</NavigationMenuLink>
                              </NavigationMenuItem>
                            )
                          })}
                        </NavigationMenuList>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>
            {/* <ul className="menu menu-horizontal px-1">
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
            </ul> */}
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
