"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

const SubHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed w-full px-4 md:px-8 lg:px-16 z-50 transition-colors duration-300 ${
				isScrolled ? "bg-rose-300 bg-opacity-50 py-2 z-50" : "bg-transparen py-6 z-50"
			}`}
			style={{ zIndex: 10 }}
			id="inicio"
		>
			<nav className="flex justify-between items-center">
				<div className="relative h-[8vh] w-[5vw]">
					<Image alt="logo-ncfp1" src={"/logoInstituto.png"} fill />
				</div>
				<div className="hidden md:flex space-x-6">
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
				<Link href="#inscripciones" scroll={true}>
					<Button className="hidden text-white rounded-full border border-white px-4 py-2 md:inline-flex">
						Inscripciones
					</Button>
				</Link>
			</nav>
		</header>
	);
};

export default SubHeader;
