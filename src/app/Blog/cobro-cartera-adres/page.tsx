import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title: "Cobro de cartera ante ADRES en Colombia | PRAVICE",
  description:
    "Cobro de cartera ante ADRES: reclamación, soportes, objeciones y ruta jurídica hasta lograr el pago. PRAVICE Abogados sector salud.",
};

export default function CobroCarteraADRES() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Recuperación sector salud</span>

          <h1 className={styles.title}>
            Cobro de cartera ante ADRES: cómo recuperar pagos pendientes o
            negados
          </h1>

          <p className={styles.subtitle}>
            Reclamación administrativa, respuesta a objeciones y ruta jurídica
            hasta lograr el recaudo efectivo.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        {/* QUÉ SE PUEDE COBRAR */}
        <section className={styles.section}>
          <h2>¿Qué se puede cobrar ante ADRES?</h2>
          <p>Ante ADRES pueden reclamarse valores derivados de:</p>

          <ul className={styles.checklist}>
            <li>
              Accidentes de tránsito con vehículos no asegurados o no
              identificados
            </li>
            <li>Eventos catastróficos</li>
            <li>
              Servicios y tecnologías en salud NO PBS, cuando proceda conforme a
              la normativa aplicable
            </li>
            <li>
              Reclamaciones derivadas de glosas o inconsistencias técnicas
            </li>
          </ul>
        </section>

        {/* RUTA RECOMENDADA */}
        <section className={styles.sectionAlt}>
          <h2>Ruta recomendada para maximizar el recaudo</h2>

          <ol className={styles.orderedList}>
            <li>
              <strong>Consolidación de expediente:</strong> radicación completa,
              soportes clínicos y administrativos debidamente organizados.
            </li>
            <li>
              <strong>Respuesta técnica a objeciones:</strong> análisis jurídico
              y técnico frente a glosas o negaciones.
            </li>
            <li>
              <strong>Seguimiento estructurado:</strong> control de términos y
              gestión hasta decisión administrativa.
            </li>
            <li>
              <strong>Ruta jurídica:</strong> si existe negación injustificada,
              se activa la vía correspondiente ante la instancia competente.
            </li>
          </ol>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.section}>
          <h2>Enfoque estratégico</h2>

          <div className={styles.letterBox}>
            <p>
              El éxito en reclamaciones ante ADRES depende de la calidad
              documental, la precisión técnica y la capacidad de escalar el caso
              jurídicamente cuando la respuesta administrativa no es favorable.
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className={styles.footer}>
          <p>
            PRAVICE acompaña el litigio hasta el final, orientado al recaudo
            efectivo.
          </p>
        </footer>
      </article>
    </main>
  );
}
