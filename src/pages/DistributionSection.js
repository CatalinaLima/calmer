import React from 'react';
import './Section.css';

const DistributionSection = () => {
return (
    <section className="distribution-section">
        <div className="distribution-content">
            <div className="distribution-group">
                <div className="distribution-text">
                    <p>
                    Atendido por dueños, Calmer Bookshop & Coffee, es cálido, minimalista y silencioso. Como su nombre lo indica, en este café el visitante baja las revoluciones del día, se relaja. Flota en el aire cierta sensación de hogar, de lugar en el que uno puede demorarse horas. Es ideal para pasar una mañana leyendo o comentando un libro con Emiliano, uno de sus anfitriones, ávido lector.
                    </p>
                </div>
                <div className="distribution-image">
                    <img src="1.jpg" alt="Calmer books" />
                </div>
            </div>
            <div className="distribution-group">
                <div className="distribution-image">
                    <img src="2.jpg" alt="Calmer Deco" />
                </div>
                <div className="distribution-text">
                    <p>
                    De su catálogo de librería, se destacan los libros sobre Slow-living, Surf y Wabi-Sabi. De su deliciosa variedad de delicatessen y cafés de especialidad, probar el clásico capuchino servido en una pieza de cerámica acompañado de un alfajorcito de dulce de leche o el Chai Latte con leche de almendras con un croissant
                    </p>
                </div>
            </div>
            <div className="distribution-group">
                <div className="distribution-text">
                    <p>
                    Inspirado en el slow-living, Calmer Café & Bookstore es uno de ellos. Máquinas de fotos de película, un ajedrez de madera, libros por todas partes, un tocadisco y un deck soleado con mesitas para pasar la tarde leyendo. Fiel a su nombre, este pequeño café-librería, ubicado sobre Ruta 10 y la calle Los Silencios en La Barra, transmite esa paz de los lugares cerca del agua.
                    </p>
                </div>
                <div className="distribution-image">
                    <img src="3.jpg" alt="Coffee" />
                </div>
            </div>
            <div className="distribution-group">
                <div className="distribution-image">
                    <img src="4.jpg" alt="Book" />
                </div>
                <div className="distribution-text">
                    <p>
                    En invierno, fue el set de filmación de un ciclo de entrevistas a músicos de Uruguay y Argentina instalados en la zona llamado “Dejá que te cuente”. En temporada, Calmer está abierto todos los días, de 10 a 19. Son imperdibles sus delicias dulces como los scons y budines, el Chai Latte con leche de almendras y el clásico cappuccino servido en una pieza de cerámica con un roll de canela.
                    </p>
                </div>
            </div>
        </div>
    </section>
);
};

export default DistributionSection;

