import "./About.css"

import React from 'react';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="title">INSPIRACION</h2>
        <p>
        Calmer tiene sus raíces en la serena brisa de los cafés australianos y la tranquilidad de la vida en la playa, una inspiración que nació de la experiencia vivida por nuestra familia en esas costas. Surgido como un proyecto familiar, Calmer se encuentra en el corazón de la barra, fusionando la hospitalidad relajada de la playa con la calidez de un negocio familiar. Más que un simple café, es un refugio para amigos, donde cada taza de café es una invitación a la serenidad. Aquí, se anima a los visitantes a sumergirse en la lectura de libros seleccionados cuidadosamente, creando un espacio donde el tiempo se desacelera. Además de disfrutar de la experiencia de degustar un café excepcional, los visitantes pueden llevar consigo la esencia de Calmer comprando granos de café y otros productos seleccionados con esmero. Calmer es más que un lugar para disfrutar de una bebida caliente; es un rincón acogedor que celebra la amistad, la tranquilidad y la conexión con la vida costera
        </p>
      </div>
      <div className="about-image">
        <img
          src="/CALMERCITO.jpg"
          alt="Local Image"
        />
      </div>
    </section>
  );
};

export default About;











