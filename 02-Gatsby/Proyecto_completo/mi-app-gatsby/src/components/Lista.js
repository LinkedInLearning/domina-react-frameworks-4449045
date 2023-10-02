import React from 'react';
import ItemLista from './ItemLista'
import { useStaticQuery, graphql } from 'gatsby'

const Lista = () => {

  const data = useStaticQuery(

    graphql`
      query MyQuery {
      allItemsJson {
        edges {
          node {
            id
            image
            text
            titulo
          }
        }
      }
    }
    `)
  
    return (

        <>
              {data.allItemsJson.edges.map((item) => (
                <ItemLista key={item.node.id} itemData={item.node} />
            ))}
        </>
    )
}



export default Lista
