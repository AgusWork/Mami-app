"use client"
import { Playfair_Display, Roboto_Slab } from "next/font/google";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

const robotoSlab = Roboto_Slab({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	display: "swap",
});

export default function Contacto() {
	return (
		<div  id="contacto" className=" bg-cyan-700 ">
			<div className=" px-10 pt-10 ">
				<div className="">
					<h3 className="text-xl font-bold mb-2 text-white">NORMA ARCANGELI</h3>
					<p className="text-white">Directora de Nuevas Constelaciones Familiares Punilla</p>
				</div>
				<div className="grid  my-14">
					<div>
						<p className="underline text-white ">+ 54 9 11 31273326</p>
						<p className="underline text-white ">arcangelinorma@gmail.com</p>
					</div>
				</div>
				<div className="  border-b border-white  ">
                    <Link className="flex items-center justify-center rounded-full border border-green-400 px-4 py-2 w-[10rem] text-green-400 mb-6" target="_blank" href={"https://wa.me/+5491131273326?text=Hola%20Norma%20,%20buenos%20dias%20,%20quisiera%20saber%20mas%20sobre%20la%20capacitacion%20!!"}>
					    <WhatsAppIcon className="mr-2" /> WhattsApp
                    </Link>
				</div>
			</div>
		</div>
	);
}
