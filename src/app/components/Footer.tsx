import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          {/* COLUMNA 1 */}
          <div className={styles.column}>
            <h3 className={styles.logo}>PRAVICE ABOGADOS</h3>
            <p className={styles.description}>
              Firma jurídica especializada en recuperación de cartera
              hospitalaria, cobro jurídico a EPS y procesos ejecutivos y
              declarativos en el sector salud en Colombia. Acompañamos IPS,
              clínicas y hospitales en la defensa estratégica de su flujo de
              caja.
            </p>
          </div>

          {/* COLUMNA 2 */}
          <div className={styles.column}>
            <h4>Navegación</h4>
            <ul>
              <li>
                <a href="#inicio">Inicio</a>
              </li>
              <li>
                <a href="#metodologia">Metodología</a>
              </li>
              <li>
                <a href="#clientes">Clientes</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3 */}
          <div className={styles.column}>
            <h4>Contacto</h4>
            <ul>
              <li>Bogotá D.C., Colombia</li>
              <li>info.pravice@abogadosespecialistas.com.co</li>
              <li>(601) 3099331</li>
              <li>Atención a nivel nacional</li>
            </ul>
          </div>

          {/* COLUMNA 4 - REDES */}
          <div className={styles.column}>
            <h4>Síguenos</h4>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/pravice_abogados/"
                aria-label="Instagram Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://co.linkedin.com/company/praviceabogadosespecializados"
                aria-label="LinkedIn Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://www.facebook.com/praviceabogadosespecializados"
                aria-label="Facebook Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
                aria-label="WhatsApp Pravice Abogados"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} PRAVICE ABOGADOS S.A.S. Todos los
            derechos reservados. Firma especializada en recuperación de cartera
            en salud en Colombia.
          </p>
        </div>

        {/* SEO OCULTO */}
        <p className={styles.seoText}>
          Abogados especialistas en recuperación de cartera en salud en
          Colombia. Servicios de cobro jurídico a EPS, demandas contra entidades
          del sistema de salud, reclamaciones ante ADRES, procesos ejecutivos y
          declarativos para IPS, clínicas y hospitales con cobertura nacional.
        </p>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0"
        className={styles.whatsappFloat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Pravice Abogados"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </>
  );
}
