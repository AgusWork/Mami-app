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
    <div className="relative h-full md:h-[80vh]">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "url('./fondoHero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          opacity: 0.8,
          zIndex: 1,
        }}
      ></div>

      <Section
        style={{ zIndex: 2 }}
        className="max-w-6xl relative flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10 mx-auto p-4"
      >
        {/* Contenido de la sección */}
        <div
          id="acerca-de-mi"
          className="aspect-square relative rounded-full overflow-hidden w-[90%] md:w-[50%] h-[250px] md:h-auto"
        >
          <Image src="/Norma.jpeg" alt="Norma" fill />
        </div>
        <div className="space-y-4 text-center md:text-left flex flex-col items-center md:items-start w-full md:w-[50%]">
          <h2 className={`${playFair.className} text-2xl md:text-3xl font-bold text-white`}>
            Acerca de Norma
          </h2>
          <p className="text-base md:text-lg text-white">
            Norma Arcangeli es una facilitadora dedicada a las Nuevas Constelaciones Familiares,
            con una extensa experiencia en educación y un profundo enfoque en el autoconocimiento.
            Tras más de una década de estudios en biodescodificación, constelaciones familiares,
            y coaching ontológico, Norma guía a otros hacia la aceptación de sus historias y la
            conexión con el presente. Su misión es ayudar a las personas a integrar las lecciones
            de la vida y abrazar su humanidad desde el amor y la plenitud.
          </p>
          <Button variant="outline" className="text-white">
            Conoceme Más
          </Button>
        </div>
      </Section>
    </div>
  );
}
