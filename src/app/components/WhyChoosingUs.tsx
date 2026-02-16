"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faShieldHalved,
  faScaleBalanced,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/WhyChoosingUs.module.css";

export default function WhyChoosingUs() {
  const items = [
    {
      icon: faUserGroup,
      title: "Abogados Especializados en Derecho del Sector Salud",
      text: "Nuestro equipo jurídico cuenta con experiencia en recuperación de cartera hospitalaria, cobro jurídico a EPS y gestión ante ADRES. Conocemos la normativa sectorial y los procesos administrativos propios del sistema de salud colombiano.",
    },
    {
      icon: faShieldHalved,
      title: "Cumplimiento Normativo ante Superintendencia Nacional de Salud",
      text: "Operamos bajo los estándares regulatorios exigidos por la Superintendencia Nacional de Salud, garantizando procesos jurídicos transparentes, técnicamente estructurados y alineados con la regulación vigente en Colombia.",
    },
    {
      icon: faScaleBalanced,
      title: "Solidez en Demandas Ejecutivas y Declarativas contra EPS",
      text: "Estructuramos procesos ejecutivos por facturas hospitalarias y demandas declarativas por cartera glosada con construcción probatoria robusta, reduciendo riesgo procesal y aumentando la probabilidad de sentencia favorable.",
    },
    {
      icon: faChartLine,
      title: "Modelo de Recuperación de Cartera por Resultados",
      text: "Nuestro esquema de comisión por éxito alinea intereses con la institución de salud. Diseñamos estrategias personalizadas para IPS, clínicas y hospitales, enfocadas en flujo de caja real y recuperación efectiva.",
    },
  ];

  return (
    <section className={styles.section} id="por-que-elegirnos">
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* TITULO SEO */}
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          ¿Por Qué Elegir una Firma Especializada en Recuperación de Cartera en
          Salud?
        </motion.h2>

        {/* GRID */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -6 }}
            >
              <motion.div
                className={styles.icon}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={item.icon} />
              </motion.div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT ESTRATÉGICO */}
        <motion.div
          className={styles.highlight}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className={styles.highlightLine}
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <p>
            <strong>Menos litigio innecesario, más recaudo efectivo.</strong>{" "}
            Nuestra filosofía prioriza estrategias de recuperación de cartera
            que generen flujo de caja real para IPS y hospitales, utilizando el
            proceso judicial únicamente cuando es jurídicamente estratégico.
          </p>
        </motion.div>

        {/* TEXTO SEO OCULTO */}
        <p className={styles.seoText}>
          Firma de abogados especializada en cobro jurídico a EPS, recuperación
          de cartera hospitalaria, demandas ejecutivas por facturas médicas y
          gestión legal ante la Superintendencia Nacional de Salud en Colombia.
        </p>
      </motion.div>
    </section>
  );
}
