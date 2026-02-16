"use client";

import { motion } from "framer-motion";
import styles from "../styles/HonorariosSection.module.css";

export default function HonorariosSection() {
  return (
    <section className={styles.section} id="honorarios">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TÍTULO SEO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Honorarios en Recuperación de Cartera para IPS: Comisión por
          Resultados
        </motion.h2>

        <div className={styles.content}>
          {/* LEFT SIDE */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className={styles.circleWrapper}>
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                viewport={{ once: true }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  10%
                </motion.span>
              </motion.div>
            </div>

            <p className={styles.comision}>
              Comisión sobre recaudo efectivo de cartera hospitalaria
            </p>

            <p className={styles.bold}>
              PRAVICE ABOGADOS solo gana cuando su IPS recupera el dinero.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className={styles.right}
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
            <motion.h3
              className={styles.subtitle}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Modelo de Comisión por Éxito en Cobro Jurídico a EPS
            </motion.h3>

            <motion.p
              className={styles.description}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Nuestro esquema de honorarios elimina anticipos, cuotas fijas o
              costos ocultos. La institución de salud solo paga un porcentaje
              sobre el dinero efectivamente recuperado en procesos ejecutivos o
              declarativos contra EPS y entidades públicas.
            </motion.p>

            <div className={styles.cards}>
              {[
                {
                  title: "Sin anticipo ni cuotas mensuales",
                  text: "No requiere inversión inicial para iniciar la recuperación de cartera.",
                },
                {
                  title: "Sin riesgo financiero para la IPS",
                  text: "Solo se generan honorarios cuando existe recaudo efectivo.",
                },
                {
                  title: "Incentivo directo al recaudo rápido",
                  text: "Nuestro modelo nos obliga a maximizar resultados en el menor tiempo posible.",
                },
              ].map((card, index) => (
                <motion.div
                  key={index}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.6 }}
                >
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.fullCard}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02 }}
            >
              <h4>Reportes claros y trazabilidad financiera</h4>
              <p>
                Cada pago recuperado incluye detalle por factura, cálculo de
                comisión y soporte documental verificable.
              </p>
            </motion.div>

            <motion.p
              className={styles.bottomText}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Este modelo de honorarios por resultados ha demostrado ser el más
              eficiente para IPS, clínicas y hospitales que buscan recuperación
              de cartera sin comprometer su flujo de caja.
            </motion.p>
          </motion.div>
        </div>

        {/* TEXTO SEO OCULTO */}
        <p className={styles.seoText}>
          Honorarios en cobro jurídico a EPS bajo modelo de comisión por éxito,
          recuperación de cartera hospitalaria sin anticipo y esquema financiero
          alineado a resultados para IPS en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
