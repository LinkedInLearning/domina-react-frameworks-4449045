import * as React from "react"
import Header from "../components/Header"
import BarraNavegacion from "../components/BarraNavegacion"
import PieDePagina from "../components/PieDePagina"
import Lista from "../components/Lista"
 
const IndexPage = () => {
  return (
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
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
