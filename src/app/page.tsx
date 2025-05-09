import Header from "@/components/layout/Header";
import Services from "@/components/layout/Services";
import Footer from "@/components/layout/Footer";
import Contacto from "@/components/layout/Contacto";
import Inscripciones from "@/components/layout/Inscripciones";
import FormacionAbout from "@/components/layout/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <section id="inicio">
        <Header />
      </section>
      <main className="flex-grow bg-[url('/fondo.jpg')] bg-cover bg-center bg-fixed">
        <section id="formacion-about">
          <FormacionAbout />
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