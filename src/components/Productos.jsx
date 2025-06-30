import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./styleProductos.css";

const Productos = ({ producto }) => {
  const [cantidad, setCantidad] = useState(1);
  const { handleAddToCart } = useContext(CartContext);

  const increase = () =>
    setCantidad((prev) => (prev < producto.stock ? prev + 1 : prev));
  const decrease = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  const nombreCorto = producto.nombre.split(" ").slice(0, 3).join(" ");

  const verMasStyle = {
    fontWeight: 600,
    color: "#0d6efd",
    textDecoration: "none",
    transition: "color 0.3s ease",
    cursor: "pointer",
    fontSize: "0.9rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    marginTop: "0.5rem",
    alignSelf: "flex-start",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <div className="card custom-card">
      <div className="img-container">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="producto-imagen"
        />
      </div>

      <div className="card-body d-flex flex-column">
        <h5 className="titulo-producto" title={producto.nombre}>
          {nombreCorto}
        </h5>

        <p className="texto-precio">${producto.precio}</p>
        <p className="texto-stock">Stock: {producto.stock}</p>

        <div className="d-flex align-items-center justify-content-center my-2">
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={decrease}
            disabled={cantidad <= 1}
            aria-label="Disminuir cantidad"
          >
            -
          </button>
          <span className="mx-3 fw-bold">{cantidad}</span>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={increase}
            disabled={cantidad >= producto.stock}
            aria-label="Aumentar cantidad"
          >
            +
          </button>
        </div>

        <button
          className="btn btn-primary mt-2"
          onClick={() => handleAddToCart({ ...producto, cantidad })}
          disabled={producto.stock === 0}
        >
          Agregar al carrito
        </button>

        <Link
          to={`/productos/${producto.id}`}
          style={{
            ...verMasStyle,
            color: hover ? "#0a58ca" : "#0d6efd",
            textDecoration: hover ? "underline" : "none",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Ver más &rarr;
        </Link>
      </div>
    </div>
  );
};

export default Productos;
