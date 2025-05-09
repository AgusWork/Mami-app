import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
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
  ];

  return (
    <div className="space-y-6 max-w-full flex flex-col items-center px-[5vw] lg:px-[10vw] py-20">
      <div id="Servicios" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {services.map((service) => (
          <div
            key={service.title}
            className="flex flex-col items-center text-center space-y-4 w-full"
          >
            <div className="relative h-[40vh] sm:h-[30vh] md:h-[50vh] rounded-xl overflow-hidden w-full max-w-full">
              <Image src={service.image} alt={service.alt} fill className="object-cover" />
            </div>
            <h3 className={`${playFair.className} text-lg sm:text-xl font-semibold text-slate-600`}>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
