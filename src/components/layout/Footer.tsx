import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-cyan-700 text-white py-8 px-4 md:px-8 lg:px-16 ">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<div className="text-center md:text-left">
					<h5 className="text-sm font-light mb-2">
						©2024 Norma Arcangeli. Todos los derechos reservados.
					</h5>
					<p className="text-xs">Diseñado y desarrollado por Agustin Cordoba</p>
				</div>
				<div className="flex space-x-4">
					<Link href="https://www.instagram.com/normaarcangeli/" className="hover:text-gray-300">
						<Instagram size={24} />
					</Link>
					<Link href="https://www.facebook.com/normis.arcangeli" className="hover:text-gray-300">
						<Facebook size={24} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
