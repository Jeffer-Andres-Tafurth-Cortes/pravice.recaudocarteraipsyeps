"use client";

import { motion } from "framer-motion";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Overlay */}
      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className={styles.container}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {/* H1 SEO PRINCIPAL */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Recuperación de Cartera para IPS y EPS en Colombia con Estrategia
          Jurídica Especializada
        </motion.h1>

        {/* DESCRIPCIÓN OPTIMIZADA */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Somos especialistas en recaudo y cobro jurídico de cartera en el
          sector salud. Representamos IPS, clínicas, hospitales y proveedores
          médicos frente a EPS, ADRES y entidades públicas. Reducimos riesgo de
          prescripción, gestionamos glosas y ejecutamos estrategias judiciales y
          extrajudiciales orientadas a flujo de caja real y recuperación
          efectiva.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          className={styles.buttons}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          <motion.a
            href="#contacto"
            className={styles.primaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Diagnóstico gratuito de cartera IPS
          </motion.a>

          <motion.a
            href="#metodologia"
            className={styles.secondaryBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Conocer metodología de recaudo
          </motion.a>
        </motion.div>

        {/* TEXTO SEO ADICIONAL (ayuda a IA y Google) */}
        <p className={styles.seoText}>
          Servicio especializado en recuperación de cartera hospitalaria, cobro
          jurídico a EPS y gestión estratégica de cartera vencida en Colombia
          bajo el marco regulatorio de la Superintendencia Nacional de Salud.
        </p>
      </motion.div>
    </section>
  );
}
