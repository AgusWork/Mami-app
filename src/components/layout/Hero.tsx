import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section className="text-center space-y-6">
			<h1 className="text-4xl md:text-6xl font-bold">Norma Arcangeli</h1>
			<p className="text-xl md:text-2xl">
				Directora del Instituto de Nuevas Constelaciones Familiares Punilla
			</p>
			<Button size="lg" className="bg-[#333333] text-white hover:bg-[#555555]">
				Conocenos
			</Button>
		</section>
	);
}
