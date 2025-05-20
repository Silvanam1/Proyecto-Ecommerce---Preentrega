import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const GaleriaDeProductos = ({productos, cargando}) => {
  return (
    <>
    <Header/>
      <h1> Galeria de Productos </h1>
                  {
              cargando ? <img src={loading} alt='loading'></img>:
              <ProductList productos={productos}/>
            }
      <Footer/>
    </>
  )
}

export default GaleriaDeProductos
