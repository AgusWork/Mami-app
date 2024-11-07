import VideoHero from "../ui/video";
import { Playfair_Display } from "next/font/google";
import SubHeader from "../ui/subHeader";

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
});

export default function Header() {
	return (
		<div className="relative">
			{/* Video hero section */}
			<div className="relative h-screen overflow-hidden">
				{/* Video wrapper */}
				<VideoHero />

				{/* Content */}
				<div className="relative z-10 h-full flex flex-col">
					<SubHeader />
					<div className="flex-grow flex items-center justify-center text-white px-4 mb-40">
						<div className="text-center">
							<h1
								className={`${playFair.className} text-4xl md:text-9xl font-bold mb-4 text-shadow-lg`}
							>
								Norma Arcangeli
							</h1>
							<div className="border border-white mb-4"></div>
							<p className={`${playFair.className}text-xl md:text-3xl mb-8 text-shadow-xl`}>
								Directora de Nuevas Constelaciones Familiares Punilla
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
