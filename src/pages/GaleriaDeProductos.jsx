import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";

const GaleriaDeProductos = ({
  cart,
  productos,
  cargando,
  agregarCarrito,
  borrarProducto,
}) => {
  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <h2 className="fw-bold text-center text-dark border-bottom border-3 border-primary pb-2 mx-auto w-50 my-4">
        Galería de Productos
      </h2>
      {cargando ? (
        <img src={loading} alt="loading" className="d-block mx-auto" />
      ) : (
        <ProductList agregarCarrito={agregarCarrito} productos={productos} />
      )}
      <Footer />
    </>
  );
};

export default GaleriaDeProductos;
