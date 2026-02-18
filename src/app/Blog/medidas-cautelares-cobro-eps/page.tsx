import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title: "Medidas cautelares para cobro de cartera a EPS | PRAVICE",
  description:
    "Medidas cautelares para cobro de cartera EPS: embargos, retenciones e investigación patrimonial para maximizar recaudo en procesos ejecutivos.",
};

export default function MedidasCautelaresEPS() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Proceso ejecutivo sector salud</span>

          <h1 className={styles.title}>
            Medidas cautelares para cobro de cartera a EPS
          </h1>

          <p className={styles.subtitle}>
            Cómo estructurar embargos e investigación patrimonial para asegurar
            el recaudo efectivo.
          </p>
        </div>
      </section>

      <article className={styles.article}>
        {/* INTRO DESTACADA */}
        <section className={styles.sectionAlt}>
          <h2>¿Qué son las medidas cautelares y por qué aceleran el pago?</h2>
          <p>
            Las medidas cautelares permiten asegurar bienes y recursos del
            deudor para garantizar el cumplimiento de la obligación.
          </p>
          <p>
            En recuperación de cartera EPS, son un factor decisivo para lograr
            recaudo real, pues generan presión jurídica efectiva y reducen el
            riesgo de dilación.
          </p>
        </section>

        {/* EMBARGOS */}
        <section className={styles.section}>
          <h2>Embargos más efectivos en procesos contra EPS</h2>

          <ul className={styles.checklist}>
            <li>Embargo de cuentas bancarias</li>
            <li>Embargo de créditos a favor del deudor</li>
            <li>Embargo de bienes registrables</li>
            <li>
              Retención de recursos derivados de relaciones comerciales o
              contractuales
            </li>
          </ul>
        </section>

        {/* INVESTIGACIÓN */}
        <section className={styles.sectionAlt}>
          <h2>Investigación patrimonial: la pieza clave</h2>
          <p>
            Identificar activos, cuentas y fuentes de recaudo permite solicitar
            embargos con mayor precisión, incrementando la efectividad del
            proceso y reduciendo tiempos.
          </p>
          <p>
            La estrategia cautelar no debe improvisarse: debe planearse desde el
            inicio del proceso ejecutivo.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.sectionHighlight}>
          <h2>Estrategia cautelar desde el inicio</h2>
          <p>
            PRAVICE estructura el proceso ejecutivo con estrategia cautelar
            integral desde la presentación de la demanda, maximizando la
            probabilidad de recaudo efectivo.
          </p>
        </section>
      </article>
    </main>
  );
}
