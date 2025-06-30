import React, { useState } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const Contactos = ({ cart, borrarProducto }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias por contactarnos, ${formData.name}!`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Header borrarProducto={borrarProducto} cartItems={cart} />
      <main className="container my-5" style={{ maxWidth: "600px" }}>
        <h1 className="mb-4 text-center">Contacto</h1>
        <form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Tu nombre"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="tuemail@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contactos;
