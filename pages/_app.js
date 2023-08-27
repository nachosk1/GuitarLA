import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [shop, setShop] = useState([])

  const addShop = guitar => {
    // Comprobar si la guitarra ya esta en el carrito...
    if(shop.some( guitarState =>  guitarState.id === guitar.id )) {
        // Iterar para actualizar la cantidad
        const shopUpdated = shop.map( guitarState => {
            if( guitarState.id === guitar.id ) {
              guitarState.amount = guitar.amount;
            } 
            return guitarState;
        });
        // Se asigna al array
        setShop([...shopUpdated]);
        localStorage.setItem('carrito', JSON.stringify( shop ));
    } else {
        // En caso de que el articulo no exista, es nuevo y se agrega
        setShop([...shop, guitar]);
        localStorage.setItem('carrito', JSON.stringify( shop ));
    }
}

const deleteProduct = id => {
    const shopUpdated = shop.filter( product => product.id != id)
    setShop(shopUpdated)
    window.localStorage.setItem('carrito', JSON.stringify( shop ));
}

const updateAmount = guitar => {
  const shopUpdated = shop.map( guitarState => {
    if(guitarState.id === guitar.id ) {
      guitarState.amount = parseInt( guitar.amount )
    } 
    return guitarState
  })
  setShop(shopUpdated)
  window.localStorage.setItem('carrito', JSON.stringify( shop ));
}

  return <Component {...pageProps} 
    shop={shop}
    addShop={addShop}
    deleteProduct={deleteProduct}
    updateAmount={updateAmount}
  />
}
