import { Button } from "@/components/ui/button";
import Section from "./Section";
import { Playfair_Display } from "next/font/google";
import { Input } from "../ui/input";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
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
