"use client";
import { motion } from "framer-motion";
import styles from "../styles/FinalCtaSection.module.css";

export default function FinalCtaSection() {
  return (
    <section className={styles.section} id="contacto">
      {/* TITULO SUPERIOR */}
      <motion.h2
        className={styles.mainTitle}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Recuperar Cartera no es Litigar. Es Proteger la Sostenibilidad de su
        Institución.
      </motion.h2>

      {/* INTRO */}
      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.9 }}
        viewport={{ once: true }}
      >
        Cada peso de cartera sin recaudar es un servicio de salud que su
        institución ya prestó y no le pagaron. Es inversión en equipos,
        personal, insumos y estructura que comprometió su flujo de caja. En
        PRAVICE ABOGADOS entendemos que la recuperación de cartera hospitalaria
        no es solo un proceso jurídico: es una estrategia para proteger la
        viabilidad financiera de su operación.
      </motion.p>

      {/* GRID DOS COLUMNAS */}
      <motion.div
        className={styles.grid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* COLUMNA IZQUIERDA */}
        <motion.div
          className={styles.leftBox}
          variants={{
            hidden: { x: -60, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h3>No permita que la cartera envejecida ahogue su institución</h3>

          <p>
            El tiempo corre en su contra. Cada día que pasa sin gestión jurídica
            estratégica es un día más cerca de la prescripción. Cada mes sin
            recaudo es un mes adicional de deterioro en su flujo de caja.
          </p>

          <p className={styles.bold}>
            Actúe ahora. Agende su diagnóstico estratégico sin costo.
          </p>
        </motion.div>

        {/* COLUMNA DERECHA */}
        <motion.div
          className={styles.rightBox}
          variants={{
            hidden: { x: 60, opacity: 0 },
            visible: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.8 }}
        >
          <h3 className={styles.company}>PRAVICE ABOGADOS S.A.S.</h3>
          <p className={styles.area}>
            Área de Recuperación de Cartera en Salud
          </p>

          <motion.ul
            className={styles.list}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {[
              "Certificados ante Superintendencia Nacional de Salud",
              "Cobertura nacional en Colombia",
              "Equipo especializado en sector salud",
              "Modelo de comisión por resultados",
              "Estrategia doble carril ejecutivo y declarativo",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={{
                  hidden: { x: 20, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5 }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.button
            onClick={() =>
              window.open(
                "https://api.whatsapp.com/message/RE7FEN4IGOISD1?autoload=1&app_absent=0",
                "_blank",
                "noopener noreferrer",
              )
            }
            className={styles.button}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Agendar diagnóstico estratégico sin costo
          </motion.button>
        </motion.div>
      </motion.div>

      {/* FRASE FINAL */}
      <motion.p
        className={styles.quote}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.9 }}
        viewport={{ once: true }}
      >
        “La cartera vencida no es un problema contable. Es un problema de
        supervivencia institucional. Y la supervivencia requiere acción
        estratégica inmediata.”
      </motion.p>

      {/* SEO OCULTO */}
      <p className={styles.seoText}>
        Abogados especializados en recuperación de cartera en salud en Colombia.
        Cobro jurídico a EPS, demandas contra EPS, procesos ejecutivos y
        declarativos para IPS, clínicas y hospitales. Firma jurídica experta en
        reclamaciones ante ADRES y estrategias legales para recuperación de
        cartera hospitalaria con cobertura nacional.
      </p>
    </section>
  );
}
