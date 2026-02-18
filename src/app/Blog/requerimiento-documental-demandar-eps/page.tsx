import styles from "./Article.module.css";
import Link from "next/link";

export const metadata = {
  title: "Documentos para demandar una EPS por cartera | Checklist PRAVICE",
  description:
    "Checklist de documentos para demandar una EPS por cartera: factura, acuse de radicación, soportes, abonos, certificaciones y trazabilidad para evitar inadmisión.",
};

export default function DocumentosDemandarEPS() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Proceso ejecutivo sector salud</span>

          <h1 className={styles.title}>
            Documentos para demandar una EPS por cartera
          </h1>

          <p className={styles.subtitle}>
            Checklist mínimo para evitar inadmisiones y fortalecer el recaudo
            judicial.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        <section className={styles.section}>
          <h2>Documentación mínima por factura</h2>

          <ul className={styles.checklist}>
            <li>Factura en PDF (y XML si aplica)</li>
            <li>Prueba de radicación o acuse (fecha y hora verificables)</li>
            <li>
              Soportes clínicos y administrativos mínimos (según el tipo de
              servicio)
            </li>
            <li>Soportes de pagos o abonos y su correcta imputación</li>
            <li>
              Relación consolidada en Excel con número de factura, fechas,
              valores, abonos y saldo final
            </li>
          </ul>
        </section>

        <section className={styles.sectionAlt}>
          <h2>Recomendación clave antes de demandar</h2>
          <p>
            Antes de presentar la demanda, es indispensable verificar
            exigibilidad, controlar prescripción y estructurar estrategia
            cautelar adecuada.
          </p>
          <p>
            Cuando el caso lo requiere, debe adelantarse investigación
            patrimonial para solicitar embargos precisos desde el inicio del
            proceso ejecutivo.
          </p>
        </section>

        <section className={styles.sectionHighlight}>
          <h2>Expedientes sin improvisación</h2>
          <p>
            Una demanda mal estructurada puede generar inadmisión, pérdida de
            tiempo y riesgo procesal. La preparación técnica del expediente es
            determinante para lograr mandamiento de pago y avanzar hacia el
            recaudo efectivo.
          </p>
        </section>

        <footer className={styles.footer}>
          <p>
            PRAVICE estructura expedientes sólidos, orientados al recaudo
            efectivo.
          </p>
        </footer>
      </article>
    </main>
  );
}
