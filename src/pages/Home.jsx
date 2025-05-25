import React from 'react'
import Header from '../components/estaticos/Header'
import Footer from '../components/estaticos/Footer'
import ProductList from '../components/ProductList'
import loading from '../assets/loading.gif'

const Home = ({cart, productos, cargando, agregarCarrito, borrarProducto }) => {
  return (
    <>
    <Header borrarProducto={borrarProducto} cartItems={cart}/>
    <main>
         <h1> Bienvenidos a mi tienda </h1>

         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Atque, quisquam? Eius quam consectetur quas unde quidem officiis 
            quibusdam eveniet similique at natus, dolor alias, ullam maxime ab iusto atque optio.</p>
            {
              cargando ? <img src={loading} alt='loading'></img>:
              <ProductList agregarCarrito={agregarCarrito} productos={productos}/>
            }
    </main>
       
        <Footer/>
    </>
  )
}

export default Home
