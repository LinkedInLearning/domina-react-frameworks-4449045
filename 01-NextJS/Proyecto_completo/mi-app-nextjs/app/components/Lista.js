"use client"

import React, { useState, useEffect } from 'react';
import ItemLista from './ItemLista'

const Lista = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('./JSON/items.json')
            .then((response) => response.json())
            .then((data) => {

                setItems(data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>

            {items.map((item) => (
                <ItemLista key={item.id} itemData={item} />
            ))}

        </>
    )
}

export default Lista