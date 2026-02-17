import styles from "./Prescripcion.module.css";

export const metadata = {
  title:
    "Prescripción de cartera en salud: cómo evitar perder el cobro | PRAVICE",
  description:
    "Cómo evitar la prescripción de cartera en salud: control de términos, requerimientos formales, estrategias prejurídicas y proceso ejecutivo.",
};

export default function PrescripcionCarteraSalud() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        {/* HEADER */}
        <header className={styles.header}>
          <span className={styles.badge}>Control de riesgo jurídico</span>
          <h1 className={styles.title}>
            Prescripción en cartera del sector salud
          </h1>
          <p className={styles.subtitle}>
            Cómo evitar perder el derecho de cobro por falta de acciones
            oportunas.
          </p>
        </header>

        {/* RIESGO REAL */}
        <section className={styles.highlightSection}>
          <h2>El riesgo real</h2>
          <p>
            Entre más tiempo transcurra sin acciones estructuradas, mayor es el
            riesgo de perder el derecho de cobro por vencimiento de términos.
          </p>
          <p>
            La recuperación de cartera debe iniciar con control de antigüedad,
            verificación de exigibilidad y definición clara de ruta jurídica.
            Esperar “voluntad de pago” sin estrategia puede ser costoso.
          </p>
        </section>

        {/* MEDIDAS PRÁCTICAS */}
        <section className={styles.section}>
          <h2>Medidas prácticas para evitar la prescripción</h2>

          <ul className={styles.list}>
            <li>Segmentación de cartera por antigüedad</li>
            <li>Requerimientos formales y trazables</li>
            <li>Acuerdos con cronograma verificable</li>
            <li>Activación oportuna de proceso ejecutivo</li>
            <li>Control permanente de términos procesales</li>
          </ul>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.strategyBox}>
          <h2>Estrategia preventiva desde el primer día</h2>
          <p>
            La prescripción no se combate cuando ya venció el término, sino
            desde el inicio del análisis de cartera. El control jurídico
            temprano protege el recaudo y fortalece la posición procesal.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            PRAVICE controla términos desde el primer día para proteger el
            recaudo efectivo.
          </p>

          <a href="/contacto" className={styles.ctaButton}>
            Solicitar diagnóstico de cartera
          </a>
        </footer>
      </article>
    </main>
  );
}
