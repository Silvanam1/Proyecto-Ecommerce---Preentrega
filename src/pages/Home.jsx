import React, { useContext, useState, useEffect } from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";
import ProductList from "../components/ProductList";
import loading from "../assets/loading.gif";
import { CartContext } from "../context/CartContext";

const bannerImages = [
  "https://images.unsplash.com/photo-1496180727794-817822f65950?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
];

const Home = () => {
  const { cargando } = useContext(CartContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {/* Banner full width */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "500px",
          overflow: "hidden",
          borderRadius: "0",
          marginBottom: "0",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          zIndex: 0,
        }}
      >
        {bannerImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: currentIndex === index ? 1 : 0,
              transition: "opacity 1s ease-in-out",
              zIndex: currentIndex === index ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Texto bienvenidos full width con fondo azul oscuro */}
      <div
        style={{
          width: "100vw",
          backgroundColor: "#0d1b2a", // azul oscuro tecnológico
          color: "white",
          padding: "20px 0",
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "600",
          marginBottom: "30px",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          position: "relative",
          boxShadow: "inset 0 -3px 6px rgba(255,255,255,0.1)",
        }}
      >
        Bienvenidos a mi tienda
      </div>

      {/* Contenido principal centrado */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        {cargando ? <img src={loading} alt="loading" /> : <ProductList />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
