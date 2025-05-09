import { Playfair_Display, Roboto_Slab } from "next/font/google";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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

export default function FormacionAbout() {
	return (
		<div className="w-full  ">
			<div
				className="flex flex-col text-md md:text-xl items-center text-center justify-start w-full py-10 px-[10%] bg-white shadow-md border-b border-gray-400 rounded-bl-full rounded-br-full mb-12"
				style={roundedBottomStyle}
			>
				<blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl italic text-gray-800 max-w-3xl mx-auto">
					{`"El amor es siempre fiable; siempre está, solo tengo que buscar donde se encuentra"`}
				</blockquote>
				<div className="font-bold text-base sm:text-lg md:text-xl mt-4 text-cyan-700">
					Bert Hellinger
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4">
				<div className="relative mb-16">
					<h1
						className={`${playFair.className} text-3xl md:text-4xl lg:text-5xl font-bold text-center text-cyan-800  py-4 `}
					>
						Instituto de Nuevas Contelaciones Familiares Punilla
					</h1>
				</div>

				<div className="flex flex-col lg:flex-row">
					<div className="w-full lg:w-1/2 lg:pr-8 mb-12 lg:mb-0">
						<div className="space-y-8">
							<div className="group bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-2 hover:shadow-2xl border-l-8 border-cyan-400">
								<h1
									className={`${playFair.className} text-3xl md:text-3xl lg:text-4xl font-bold text-start text-cyan-800 `}
								>
									Formacion 2025
								</h1>
							</div>
							<div className="group bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-2 hover:shadow-2xl border-l-8 border-cyan-400">
								<p
									className={`${robotoSlab.className} text-lg md:text-xl font-light text-cyan-900 leading-relaxed group-hover:text-cyan-700 transition-colors duration-300`}
								>
									Nuevas Constelaciones Familiares Punilla, es un espacio de encuentro para
									transitar la experiencia de las Nuevas Constelaciones Familiares.
								</p>
							</div>

							<div className="group bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:translate-y-2 hover:shadow-2xl border-l-8 border-cyan-400">
								<p
									className={`${robotoSlab.className} text-lg md:text-xl font-light text-cyan-900 leading-relaxed group-hover:text-cyan-700 transition-colors duration-300`}
								>
									{`Bert Hellinger expresa: "el amor es siempre fiable; siempre está, solo tengo que
									buscar donde se encuentra". Su filosofía inspira a conocer esta fuerza que nos
									contiene a todos en Unidad, para un Bien Mayor.`}
								</p>
							</div>
						</div>
					</div>

					<div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent mx-8"></div>

					<div className="w-full lg:w-1/2 lg:pl-8">
						<div className="bg-white/60 rounded-3xl p-6 shadow-xl overflow-hidden">
							<div className="flex flex-col items-center">
								<div className="w-48 h-48 md:w-56 md:h-56 relative mb-6">
									<div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-xl">
										<Image src="/Norma.jpeg" alt="Norma" fill className="object-cover" />
									</div>
								</div>

								<div className="text-center space-y-4">
									<h2
										className={`${playFair.className} text-2xl md:text-3xl font-bold text-cyan-700  inline-block pb-2 border-b-2 border-cyan-800/50`}
									>
										Acerca de Norma
									</h2>

									<p className="text-base text-cyan-700 leading-relaxed">
										Norma Arcangeli es una facilitadora dedicada a las Nuevas Constelaciones
										Familiares, con una extensa experiencia en educación y un profundo enfoque en el
										autoconocimiento. Tras más de una década de estudios en biodescodificación,
										constelaciones familiares, y coaching ontológico, Norma guía a otros hacia la
										aceptación de sus historias y la conexión con el presente.
									</p>

									<Button className="mt-4 bg-cyan-700/20 backdrop-blur hover:bg-cyan-700/30 text-cyan-700  border border-cyan-700/50 hover:border-cyan-700 transition-all duration-300 rounded-xl px-6 py-2 font-medium">
										Conoceme Más
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
