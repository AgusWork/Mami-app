"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { FaBars, FaTimes } from "react-icons/fa"; // Iconos de hamburguesa y cerrar

const SubHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Estado para el sidebar

  // Cambiar estado al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Alternar entre abrir y cerrar el sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* SubHeader */}
      <header
        className={`fixed w-full px-4 md:px-8 lg:px-16 z-50 transition-all duration-300 ${
          isScrolled ? "bg-rose-300 bg-opacity-50 py-2" : "bg-transparent py-6"
        }`}
        style={{ zIndex: 10 }}
        id="inicio"
      >
        <nav className="flex justify-between items-center">
          <div className="relative h-[8vh] w-[15vw] md:w-[10vw] max-w-[60px]">
            <Image alt="logo-ncfp1" src={"/logoInstituto.png"} fill />
          </div>
          
          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-4 md:space-x-6">
            <Link href="#inicio" scroll={true} className="text-white hover:underline">
              Inicio
            </Link>
            <Link href="#acerca-de-mi" scroll={true} className="text-white hover:underline">
              Acerca de mí
            </Link>
            <Link href="#servicios" scroll={true} className="text-white hover:underline">
              Servicios
            </Link>
            <Link href="#contacto" scroll={true} className="text-white hover:underline">
              Contacto
            </Link>
          </div>
          
          {/* Botón de Inscripción */}
          <Link href="#inscripciones" scroll={true}>
            <Button className="hidden md:inline-flex text-white rounded-full border border-white px-3 py-2">
              Inscripciones
            </Button>
          </Link>

          {/* Icono de menú (hamburguesa) para móviles */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white">
              {!isOpen && <FaBars size={30} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col justify-center items-center">
          {/* Icono de cerrar */}
          <FaTimes
            onClick={toggleSidebar}
            color="white"
            className="absolute top-7 right-7 z-50 cursor-pointer" // Asegurando que esté en la parte superior derecha
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
    </>
  );
};

export default SubHeader;
