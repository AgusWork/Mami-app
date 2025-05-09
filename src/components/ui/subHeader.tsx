"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  Root as NavigationMenuRoot,
  List as NavigationMenuList,
  Item as NavigationMenuItem,
  Trigger as NavigationMenuTrigger,
  Content as NavigationMenuContent,
  Link as NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { ChevronDown, Instagram, Facebook } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import LoginPopup from "./login-popup";

const playFair = Playfair_Display({ subsets: ["latin"] });

const SubHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [buttonRect, setButtonRect] = useState<DOMRect | undefined>(undefined);
  const buttonRef = useRef<HTMLButtonElement>(null);


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openLoginPopup = () => {
    if (buttonRef.current) {
      setButtonRect(buttonRef.current.getBoundingClientRect());
    }
    setIsLoginOpen(true);
  };

  const closeLoginPopup = () => {
    setIsLoginOpen(false);
  };

  return (
    <>
      <header
        className={`${playFair.className} h-[15vh] 4xl:h-[10vh] fixed w-full z-50 transition-all duration-300`}
        id="inicio"
      >
        <nav className="flex flex-col h-full justify-between items-center w-full">
          <div className="bg-cyan-700 w-full flex flex-row items-center justify-end px-10 2xl:px-[10vw] py-2 gap-5">
            <button
              ref={buttonRef}
              className="rounded-xl hover:bg-cyan-600 px-2 py-1 border border-white text-white text-xs"
              onClick={openLoginPopup}
            >
              Acceso alumnos
            </button>
            <div className="text-white hover:text-cyan-300 cursor-pointer">
              <Instagram />
            </div>
            <div className="text-white hover:text-cyan-300 cursor-pointer">
              <Facebook />
            </div>
          </div>
          <div className="bg-white py-2 w-full h-full px-10 2xl:px-[10vw] flex flex-row justify-between items-center">
            <div className="relative min-h-full w-full md:w-[10vw] max-w-[60px] 2xl:max-w-[120px]">
              <Image alt="logo-ncfp1" src={"/logoInstituto.png"} fill />
            </div>

            <div className="hidden md:flex space-x-4 md:space-x-6">
              <Link href="#inicio" scroll={true} className="text-cyan-700 hover:underline">
                Inicio
              </Link>
              <Link href="#acerca-de-mi" scroll={true} className="text-cyan-700 hover:underline">
                Norma Arcangeli
              </Link>

              <NavigationMenuRoot className="relative z-10">
                <NavigationMenuList className="flex list-none p-0 m-0">
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-cyan-700 hover:underline flex items-center gap-1 bg-transparent border-0 cursor-pointer font-normal">
                      Constelaciones Familiares <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute top-full left-0 bg-white rounded shadow-md border p-4 min-w-[200px]">
                      <ul className="m-0 grid list-none gap-2 p-0">
                        <ListItem href="/" title="Radix Primitives" className="text-cyan-700">
                          Unstyled, accessible components for React.
                        </ListItem>
                        <ListItem href="/stitches" title="Stitches" className="text-cyan-700">
                          CSS-in-JS with best-in-class developer experience.
                        </ListItem>
                        <ListItem href="/colors" title="Colors" className="text-cyan-700">
                          Beautiful, thought-out palettes with auto dark mode.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-cyan-700 hover:underline flex items-center gap-1 bg-transparent border-0 cursor-pointer font-normal ml-4">
                      Instituto <ChevronDown className="h-4 w-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute border border top-full left-0 bg-white rounded shadow-md p-4 min-w-[200px]">
                      <ul className="m-0 grid list-none gap-2 p-0">
                        <ListItem href="/intro" title="Introduction" className="text-cyan-700">
                          Build high-quality, accessible design systems and web apps.
                        </ListItem>
                        <ListItem href="/started" title="Getting started" className="text-cyan-700">
                          A quick tutorial to get you up and running.
                        </ListItem>
                        <ListItem href="/styling" title="Styling" className="text-cyan-700">
                          Unstyled and compatible with any styling solution.
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuRoot>
              <Link href="#servicios" scroll={true} className="text-cyan-700 hover:underline">
                Servicios
              </Link>
              <Link href="#contacto" scroll={true} className="text-cyan-700 hover:underline">
                Contacto
              </Link>
            </div>

            <Link href="#inscripciones" scroll={true}>
              <Button className="hidden hover:bg-cyan-300 md:inline-flex text-cyan-700 border border-cyan-700 rounded-full bg-white px-3 py-2">
                Inscripciones
              </Button>
            </Link>

            <div className="md:hidden">
              <button onClick={toggleSidebar} className="text-cyan-700">
                {!isOpen && <FaBars size={30} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col justify-center items-center">
          <FaTimes
            onClick={toggleSidebar}
            color="white"
            className="absolute top-7 right-7 z-50 cursor-pointer"
            size={30}
          />
          <div className="w-full h-full flex flex-col justify-center items-center space-y-6 text-white text-2xl font-semibold">
            <Link href="#inicio" scroll={true} onClick={toggleSidebar}>
              Inicio
            </Link>
            <Link href="#acerca-de-mi" scroll={true} onClick={toggleSidebar}>
              Acerca de mí
            </Link>
            <Link href="#servicios" scroll={true} onClick={toggleSidebar}>
              Servicios
            </Link>
            <Link href="#contacto" scroll={true} onClick={toggleSidebar}>
              Contacto
            </Link>
            <Link href="#inscripciones" scroll={true} onClick={toggleSidebar}>
              <Button className="text-white rounded-full border border-white px-3 py-2">
                Inscripciones
              </Button>
            </Link>
          </div>
        </div>
      )}

      <LoginPopup isOpen={isLoginOpen} onClose={closeLoginPopup} buttonRect={buttonRect} />
    </>
  );
};

type ListItemProps = {
  className?: string;
  title: string;
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, href, ...props }, forwardedRef) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          className={`block p-2 text-cyan-700 hover:underline no-underline outline-none ${
            className || ""
          }`}
          href={href}
          {...props}
          ref={forwardedRef}
        >
          <div className="font-medium">{title}</div>
          <p className="text-sm text-gray-600">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default SubHeader;