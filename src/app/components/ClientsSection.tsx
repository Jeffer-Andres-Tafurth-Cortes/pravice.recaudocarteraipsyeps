"use client";

import { motion } from "framer-motion";
import styles from "../styles/ClientsSection.module.css";

export default function ClientsSection() {
  return (
    <section className={styles.section} id="clientes">
      <motion.div
        className={styles.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* TITLE */}
        <motion.h2
          className={styles.title}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Nuestros Clientes: Instituciones del Sector Salud
        </motion.h2>

        {/* INTRO */}
        <motion.p
          className={styles.intro}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          Trabajamos con instituciones prestadoras de servicios...
        </motion.p>

        {/* GRID */}
        <motion.div className={styles.grid}>
          {[
            {
              img: "/IpsClinicas.jpg",
              alt: "IPS y Clínicas en Colombia",
              title: "IPS y Clínicas",
              text: "Instituciones prestadoras de servicios de salud con cartera en EPS, ADRES y aseguradoras...",
            },
            {
              img: "/Hospitales.jpg",
              alt: "Hospitales públicos y privados",
              title: "Hospitales Públicos y Privados",
              text: "Centros hospitalarios de mediana y alta complejidad con cartera acumulada...",
            },
            {
              img: "/Tecnologia.jpg",
              alt: "Proveedores de tecnología en salud",
              title: "Proveedores de Tecnologías en Salud",
              text: "Empresas que suministran dispositivos médicos, equipos diagnósticos...",
            },
            {
              img: "/Laboratorio.jpg",
              alt: "Prestadores de servicios especializados",
              title: "Prestadores de Servicios Especializados",
              text: "Laboratorios clínicos, centros de diagnóstico y otros actores...",
            },
          ].map((client, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <motion.img
                src={client.img}
                alt={client.alt}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              <h3>{client.title}</h3>
              <p>{client.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* HIGHLIGHT */}
        <motion.div
          className={styles.highlight}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.icon}>▣</span>
          <p>
            <strong>Especialización sectorial real:</strong> Conocemos la
            regulación, los procesos administrativos, las dinámicas de glosas...
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
