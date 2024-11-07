import { Button } from "@/components/ui/button";
import Section from "./Section";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});



export default function About() {
	return (
		<div className="relative h-[70vh]">
			<div
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					backgroundImage: "url('./fondoHero.jpg')",
					backgroundSize: "100% 100%",
					backgroundPosition: "center",
					// filter: "blur(4px)",
					opacity: 0.8,
					zIndex: 1, 
				}}
			></div>

			<Section style={{zIndex:2}} className="relative  flex flex-row items-center justify-center space-x-10 mx-auto p-8">
				{/* Contenido de la sección */}
				<div id="acerca-de-mi" className="aspect-square relative rounded-full overflow-hidden w-[50%]">
					<Image src="/Norma.jpeg" alt="Norma" fill  />
				</div>
				<div className="space-y-4 text-center flex flex-col items-center w-[50%]">
					<h2 className={`${playFair.className} text-3xl font-bold text-white`}>Acerca de Norma</h2>
					<p className="text-lg"></p>
					<Button variant="outline" className="text-white">
						Conoceme Más
					</Button>
				</div>
			</Section>
		</div>
	);
}
