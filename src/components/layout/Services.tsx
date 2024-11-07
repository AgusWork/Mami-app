import Image from "next/image";
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

export default function Services() {
  const services = [
    {
      title: "Constelaciones en grupo",
      image: "/consgrup.png",
      alt: "Constelaciones en grupo"
    },
    {
      title: "Profesora y Directora del Instituto de Nuevas Constelaciones Familiares Punilla",
      image: "/profe.png",
      alt: "Profesora y Directora"
    },
    {
      title: "Constelaciones individuales",
      image: "/consind.png",
      alt: "Constelaciones individuales"
    }
  ]

	return (
		<Section className="space-y-6 max-w-full flex flex-col items-center">
			{/* <h2 className={`${robotoSlab.className} text-5xl mb-14 font-bold text-center`}>Mis Servicios</h2> */}
			<div  id="Servicios" className="grid md:grid-cols-3 gap-6  w-full items-center">
				{services.map((service) => (
					<div
						key={service.title}
						className="flex flex-col w-full h-full items-center text-center space-y-6"
					>
            <div className="relative h-[50vh] rounded-xl overflow-hidden w-full max-w-[20vw]">

						<Image src={service.image} alt={service.alt} fill />
            </div>
						<h3 className={`${playFair.className} text-xl font-semibold text-slate-600 mb-2 max-w-[20vw]`}>{service.title}</h3>
						<p></p>
					</div>
				))}
			</div>
		</Section>
	);
}
