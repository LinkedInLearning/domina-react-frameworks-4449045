
import BarraNavegacion from './components/BarraNavegacion'
import Header from './components/Header'
import Lista from './components/Lista'

import PieDePagina from './components/PieDePagina'

export default function Home() {
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
