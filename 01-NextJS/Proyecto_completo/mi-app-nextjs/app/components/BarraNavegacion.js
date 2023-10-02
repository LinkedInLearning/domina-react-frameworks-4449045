import Link from 'next/link'
import React from 'react'

const BarraNavegacion = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="container mx-auto">
        <ul className="flex space-x-4">


          <li>
            <Link href="/" className="text-gray-500 hover:text-blue-500">Home</Link>
          </li>

          <li><a href="#" className="text-gray-500 hover:text-blue-500">Destinos</a></li>
          <li>
            <Link href="/nosotros" 
                     className="text-gray-500 hover:text-blue-500">
                       Nosotros
                     </Link>
          </li>
          <li>
            <Link href="/contacto" className="text-gray-500 hover:text-blue-500">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default BarraNavegacion