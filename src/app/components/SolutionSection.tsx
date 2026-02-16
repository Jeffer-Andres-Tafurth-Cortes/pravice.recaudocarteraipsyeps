"use client";

import { motion } from "framer-motion";
import styles from "../styles/SolutionSection.module.css";

export default function SolutionSection() {
  return (
    <section className={styles.section} id="solucion">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO OPTIMIZADO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estrategia Jurídica de Recuperación de Cartera para IPS y EPS en
          Colombia
        </motion.h2>

        {/* INTRO SEO */}
        <motion.p
          className={styles.intro}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          En PRAVICE ABOGADOS aplicamos un modelo especializado de cobro
          jurídico de cartera en el sector salud. No toda la cartera
          hospitalaria requiere el mismo tratamiento procesal. Separar
          estratégicamente cada obligación permite maximizar el recaudo, reducir
          tiempos y proteger el derecho de cobro frente a EPS, ADRES y entidades
          públicas.
        </motion.p>

        {/* CARRILES VISUALES */}
        <motion.div
          className={styles.lanes}
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
          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: -40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Proceso Ejecutivo – Cobro Rápido con Título Ejecutivo
          </motion.div>

          <motion.div
            className={styles.lane}
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Proceso Declarativo – Reconstrucción Probatoria de Cartera Glosada
          </motion.div>
        </motion.div>

        {/* GRID DESCRIPTIVO */}
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Proceso Ejecutivo contra EPS</h3>
            <p>
              Aplicable a facturas exigibles con título ejecutivo claro y
              ausencia de glosa válida. Permite iniciar demanda ejecutiva con
              solicitud de medidas cautelares inmediatas, embargo de cuentas y
              aseguramiento patrimonial para acelerar el pago de la cartera.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Proceso Declarativo para Cartera Glosada</h3>
            <p>
              Diseñado para facturas objetadas o con glosas técnicas. Implica
              construcción probatoria individual por factura, reconstrucción del
              soporte médico y defensa jurídica integral para obtener sentencia
              que reconozca el derecho de pago.
            </p>
          </motion.div>
        </div>

        {/* TARJETAS OPTIMIZADAS */}
        <motion.div
          className={styles.cards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {[
            {
              title: "Medidas cautelares contra EPS",
              text: "Embargo y aseguramiento patrimonial antes de sentencia.",
            },
            {
              title: "Gestión técnica de glosas médicas",
              text: "Revisión jurídica y médica para desvirtuar objeciones improcedentes.",
            },
            {
              title: "Prevención de prescripción de cartera",
              text: "Interrupción oportuna de términos legales para proteger el derecho de cobro.",
            },
            {
              title: "Investigación patrimonial del deudor",
              text: "Identificación de activos y fuentes de recaudo ejecutables.",
            },
          ].map((card, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 25 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* TEXTO SEO OCULTO */}
        <p className={styles.seoText}>
          Servicio especializado en cobro jurídico a EPS, procesos ejecutivos
          por facturas hospitalarias, demandas declarativas por glosas médicas y
          recuperación de cartera vencida en IPS en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
