import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "./Section";
import { Playfair_Display, Roboto_Slab } from "next/font/google";

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

export default function Inscripciones() {
	return (
		<Section className="space-y-6">
			<h2 id="inscripciones" className={`${playFair.className} text-5xl mb-14 font-bold text-center`}>Inscripciones</h2>
			<form className="space-y-4">
				<Input placeholder="Tu Nombre" />
				<Input type="email" placeholder="Tu Email" />
				<Input placeholder="Subject" />
				<textarea
					className="w-full p-2 border rounded-md"
					rows={4}
					placeholder="Tu Mensaje"
				></textarea>
				<Button type="submit" className="w-full bg-cyan-500 text-white hover:bg-cyan-400">
					Enviar Mensaje
				</Button>
			</form>
		</Section>
	);
}
