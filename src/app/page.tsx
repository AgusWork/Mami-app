import Header from "@/components/layout/Header";
import About from "@/components/layout/About";
import Services from "@/components/layout/Services";
import Footer from "@/components/layout/Footer";
import Contacto from "@/components/layout/Contacto";
import Formacion from "@/components/layout/Formacion";
import Inscripciones from "@/components/layout/Inscripciones";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col bg-white">
			<section id="inicio">
				<Header />
			</section>
			<main className="flex-grow">
				<section id="formacion">
					<Formacion />
				</section>
				<section id="acerca-de-mi">
					<About />
				</section>
				<section id="servicios">
					<Services />
				</section>
				<section id="inscripciones">
					<Inscripciones />
				</section>

				<Contacto />
			</main>
			<Footer />
		</div>
	);
}
