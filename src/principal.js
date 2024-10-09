
import React from 'react';

import './Style.css';
import contenedor from "./iconos/webpc-passthru1.jpg";
const Principal = () => {
  return (
    <div>
        <body>
   

    <main>
        <div className="imagen-contenedor">
            <img src={contenedor} alt=""/>
            <button className="boton-menu">VER MENÚ</button>
        </div>
        <div className="calesita"></div>
        <div>
            <h2>Como llegás?</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3351.810159718316!2d-68.84313052433416!3d-32.85027777363316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e08974b20dc75%3A0xeba5c9921aed1c8c!2sPlaza%20Marcos%20Burgos!5e0!3m2!1ses-419!2sar!4v1727905005276!5m2!1ses-419!2sar"
                width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="ofertas"></div>

    </main>

    <footer>
        <div className="footer-izquierda">
            <h6>2024 Bar Chafi | Todos los derechos reservados</h6>
        </div>
        <div className="footer-centro">
            <div className="footer-logo">
                <a href="Principal.html" class="logo">BAR CHAFI</a>
            </div>
            <div className="footer-info">
                <h5>Teléfono: +54 9 261 1234-567</h5>
                <h5>Mail: barchafi@gmail.com</h5>
            </div>
        </div>
        <div className="social-link">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
        </div>

       

    </footer>

</body>

    </div>
  );
};

export default Principal;