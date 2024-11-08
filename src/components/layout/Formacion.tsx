import { Playfair_Display, Roboto_Slab } from "next/font/google";
import Section from "./Section";

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

export default function Formacion() {
  return (
    <Section className="py-6 px-4 md:px-10">
      <h1
        className={`${playFair.className} text-4xl md:text-6xl font-bold text-center text-cyan-400 italic mb-8 md:mb-14`}
      >
        Formaciones 2025
      </h1>
      <p
        className={`${robotoSlab.className} text-lg md:text-3xl font-light text-center italic mb-4 md:mb-8 text-slate-600`}
      >
        Nuevas Constelaciones Familiares Punilla, es un espacio de encuentro para transitar la
        experiencia de las Nuevas Constelaciones Familiares.
      </p>
      <p
        className={`${robotoSlab.className} text-lg md:text-3xl font-light text-center italic mb-4 md:mb-8 text-slate-600`}
      >
        Bert Hellinger expresa: “el amor es siempre fiable; siempre está, solo tengo que buscar
        donde se encuentra”. Su filosofía inspira a conocer esta fuerza que nos contiene a todos en
        Unidad, para un Bien Mayor.
      </p>
    </Section>
  );
}
