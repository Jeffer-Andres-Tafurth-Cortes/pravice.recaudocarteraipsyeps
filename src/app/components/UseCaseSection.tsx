"use client";

import { motion } from "framer-motion";
import styles from "../styles/UseCaseSection.module.css";

export default function UseCaseSection() {
  return (
    <section className={styles.section} id="casos-uso">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TÍTULO SEO */}
        <motion.h2
          className={styles.title}
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Casos de Uso Reales en Recuperación de Cartera del Sector Salud
        </motion.h2>

        {/* SUBTÍTULO OPTIMIZADO */}
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estos escenarios representan situaciones frecuentes que enfrentan IPS,
          clínicas, hospitales y proveedores del sistema de salud en Colombia
          frente a EPS, ADRES y entidades públicas. Cada caso requiere una
          estrategia procesal específica y técnicamente estructurada.
        </motion.p>

        {/* GRID */}
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
          {/* CARD GRANDE */}
          <motion.div
            className={`${styles.card} ${styles.large}`}
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
          >
            <h3>IPS con Cartera Glosada Acumulada</h3>
            <p>
              Institución de mediana complejidad con más de $4.000 millones en
              facturación glosada por EPS durante los últimos tres años,
              afectando flujo de caja y sostenibilidad operativa.
            </p>
            <p>
              <strong>Estrategia PRAVICE:</strong> Proceso declarativo con
              reconstrucción probatoria integral, análisis técnico de glosas,
              consolidación documental y estructuración jurídica para
              recuperación judicial efectiva.
            </p>
          </motion.div>

          {/* CARD DERECHA SUPERIOR */}
          <motion.div
            className={`${styles.card} ${styles.medium}`}
            variants={{
              hidden: { x: 40, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <h3>Proveedor de Tecnología con Facturas Aceptadas sin Pago</h3>
            <p>
              Empresa proveedora de dispositivos médicos con más de $1.200
              millones en cuentas aceptadas pero sin desembolso por parte de la
              entidad aseguradora.
            </p>
            <p>
              <strong>Estrategia PRAVICE:</strong> Inicio inmediato de proceso
              ejecutivo con solicitud de embargo preventivo y medidas cautelares
              para asegurar el recaudo.
            </p>
          </motion.div>

          {/* CARD INFERIOR */}
          <motion.div
            className={`${styles.card} ${styles.small}`}
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -5 }}
          >
            <h3>Clínica con Riesgo de Prescripción Inminente</h3>
            <p>
              Clínica especializada con $800 millones en cartera pendiente ante
              ADRES próxima a cumplir término de prescripción.
            </p>
            <p>
              <strong>Estrategia PRAVICE:</strong> Radicación urgente de
              demandas ejecutivas, interrupción de prescripción y estructuración
              de plan procesal escalonado para maximizar recuperación.
            </p>
          </motion.div>
        </motion.div>

        {/* TEXTO SEO OCULTO */}
        <p className={styles.seoText}>
          Casos reales de cobro jurídico a EPS en Colombia, recuperación de
          cartera hospitalaria, procesos ejecutivos y declarativos para IPS,
          clínicas y proveedores del sector salud.
        </p>
      </motion.div>
    </section>
  );
}
