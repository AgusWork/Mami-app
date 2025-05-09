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

const roundedBottomStyle = {
  borderBottomLeftRadius: "50% 100px",
  borderBottomRightRadius: "50% 100px",
  paddingBottom: "40px",
};

export default function Formacion() {
  return (
    <div className=" w-full">
      <div
        className="flex flex-col text-md md:text-xl items-center text-center justify-start w-full py-10 px-[10%] bg-white shadow-md border-b border-gray-400 rounded-bl-full rounded-br-full"
        style={roundedBottomStyle}
      >
        <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-gray-800 max-w-3xl mx-auto">
          {`"El amor es siempre fiable; siempre está, solo tengo que buscar donde se encuentra"`}
        </blockquote>
        <div className="font-bold text-base sm:text-lg md:text-xl mt-4 text-cyan-700">
          Bert Hellinger
        </div>
      </div>
      
      <div className="py-24 px-4">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-cyan-400 opacity-50 -ml-6 -mt-6"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-cyan-400 opacity-50 -mr-6 -mb-6"></div>
          
          <div className="mb-20 sticky top-10 bg-white/90 backdrop-blur-md p-6 rounded-full shadow-xl">
            <h1
              className={`${playFair.className} text-4xl md:text-5xl font-bold text-center text-cyan-800  relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1`}
            >
              Instituto de Nuevas Contelaciones Familiares Punilla
            </h1>
          </div>
          
          <div className="space-y-16">
            <div className="group bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-2 hover:shadow-2xl border-l-8 border-cyan-400">
              <p
                className={`${robotoSlab.className} text-lg md:text-2xl font-light text-cyan-900 leading-relaxed group-hover:text-cyan-700 transition-colors duration-300`}
              >
                Nuevas Constelaciones Familiares Punilla, es un espacio de encuentro para transitar la
                experiencia de las Nuevas Constelaciones Familiares.
              </p>
            </div>
            
            <div className="group bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-2 hover:shadow-2xl border-l-8 border-cyan-400">
              <p
                className={`${robotoSlab.className} text-lg md:text-2xl font-light text-cyan-900 leading-relaxed group-hover:text-cyan-700 transition-colors duration-300`}
              >
                {`Bert Hellinger expresa: "el amor es siempre fiable; siempre está, solo tengo que buscar
                donde se encuentra". Su filosofía inspira a conocer esta fuerza que nos contiene a todos
                en Unidad, para un Bien Mayor.`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}