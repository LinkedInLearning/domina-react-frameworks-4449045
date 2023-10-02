import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import Header from "../components/Header"
import BarraNavegacion from "../components/BarraNavegacion"
import PieDePagina from "../components/PieDePagina"
import Lista from "../components/Lista"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
    <main className="bg-gray-100 font-sans leading-normal tracking-normal">
       <Header />
       <BarraNavegacion />

       <div className="container mx-auto p-4">
        <section className="space-y-4">

         <Lista />

        </section>
      </div>

      <PieDePagina />

    </main>
    </>
 
  );
}
