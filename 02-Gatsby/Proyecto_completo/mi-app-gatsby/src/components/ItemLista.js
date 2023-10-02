import React from 'react'

const ItemLista = ({itemData}) => {
  return (
    <article className="bg-white p-4 rounded shadow flex items-center">
            <img src={itemData.image} alt="Destination 1" className="w-48 h-48 object-cover rounded" />
              <div className="ml-4">
                <h2 className="text-2xl font-bold mb-2"> {itemData.titulo} </h2>
                <p>{itemData.text}</p>
              </div>
          </article>
  )
}

export default ItemLista