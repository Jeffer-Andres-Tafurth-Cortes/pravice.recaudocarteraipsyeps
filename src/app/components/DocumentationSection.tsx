"use client";

import { motion } from "framer-motion";
import styles from "../styles/DocumentationSection.module.css";

type Step = {
  number: number;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Base de Datos de Cartera",
    description:
      "Relación detallada de facturas pendientes con identificación de EPS o entidad deudora, valor, fecha de radicación y estado actual.",
  },
  {
    number: 2,
    title: "Facturas y Soportes",
    description:
      "Copias digitales de facturas electrónicas, RIPS, órdenes médicas y anexos técnicos que respalden cada atención prestada.",
  },
  {
    number: 3,
    title: "Glosas y Contra-Glosas",
    description:
      "Historial completo del proceso de glosa, respuestas emitidas y comunicaciones intercambiadas con la entidad aseguradora.",
  },
  {
    number: 4,
    title: "Radicados y Constancias",
    description:
      "Soportes de radicación ante EPS, ADRES o entidades públicas que acrediten la gestión administrativa previa.",
  },
  {
    number: 5,
    title: "Estados Financieros",
    description:
      "Mayor y balances que respalden la existencia contable de la cartera y su impacto en el flujo de caja institucional.",
  },
  {
    number: 6,
    title: "Poder Legal",
    description:
      "Documento de representación legal para actuar judicial y extrajudicialmente en nombre de la institución.",
  },
];

export default function DocumentationSection() {
  return (
    <section className={styles.section} id="documentacion">
      {/* TÍTULO SEO */}
      <motion.h2
        className={styles.title}
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Documentación Necesaria para Iniciar la Recuperación de Cartera
      </motion.h2>

      {/* SUBTÍTULO OPTIMIZADO */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
      >
        Para realizar el diagnóstico estratégico de su cartera hospitalaria y
        estructurar el cobro jurídico frente a EPS o ADRES, requerimos
        información básica que toda institución del sector salud maneja en su
        operación diaria.
      </motion.p>

      {/* TIMELINE */}
      <motion.div
        className={styles.timeline}
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
        <div className={styles.row}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={styles.step}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className={styles.circle}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 180 }}
                viewport={{ once: true }}
              >
                {step.number}
              </motion.div>

              <motion.div
                className={styles.card}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FOOTER ESTRATÉGICO */}
      <motion.p
        className={styles.footer}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
      >
        No se preocupe si la documentación no está completamente organizada.
        Parte de nuestro servicio incluye la revisión técnica, estructuración
        probatoria y consolidación documental necesaria para iniciar el proceso
        judicial de manera sólida y estratégica.
      </motion.p>

      {/* SEO OCULTO */}
      <p className={styles.seoText}>
        Documentos necesarios para cobro jurídico a EPS en Colombia,
        recuperación de cartera hospitalaria, demandas ejecutivas y procesos
        declarativos para IPS y clínicas.
      </p>
    </section>
  );
}
