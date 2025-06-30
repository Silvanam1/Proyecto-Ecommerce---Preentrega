import React from "react";
import Header from "../components/estaticos/Header";
import Footer from "../components/estaticos/Footer";

const AcercaDe = () => {
  return (
    <>
      <Header />
      <main className="container my-5">
        <h1 className="mb-4 text-center">Acerca de Nosotros</h1>
        <div className="card shadow p-4">
          <p className="lead">
            En <strong>ElectroHogar Plus</strong> nos apasiona llevar tecnología
            de calidad a tu hogar. Contamos con años de experiencia ofreciendo
            electrodomésticos confiables y eficientes que hacen tu vida más
            fácil y cómoda.
          </p>
          <p className="lead">
            Nuestro compromiso es brindarte productos innovadores, atención
            personalizada y precios competitivos para que puedas equipar tu
            hogar con lo mejor del mercado.
          </p>
          <p className="lead text-center fst-italic">
            ¡Gracias por confiar en nosotros para ser parte de tu día a día!
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AcercaDe;
