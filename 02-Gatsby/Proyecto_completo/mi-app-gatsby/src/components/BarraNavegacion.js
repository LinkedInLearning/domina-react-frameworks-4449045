import { Link } from 'gatsby'
import React from 'react'

const BarraNavegacion = () => {
  return (
    <nav className="bg-white p-4 shadow">
      <div className="container mx-auto">
        <ul className="flex space-x-4">

          <li>
            <Link to="/" className="text-gray-500 hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/nosotros" className="text-gray-500 hover:text-blue-500">Nosotros</Link>
          </li>
          <li>
            <a href="/contacto" className="text-gray-500 hover:text-blue-500">Contacto</a>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default BarraNavegacion