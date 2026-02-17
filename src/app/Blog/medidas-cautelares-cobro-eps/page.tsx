import styles from "./Article.module.css";

export const metadata = {
  title: "Medidas cautelares para cobro de cartera a EPS | PRAVICE",
  description:
    "Medidas cautelares para cobro de cartera EPS: embargos, retenciones e investigación patrimonial para maximizar recaudo en procesos ejecutivos.",
};

export default function MedidasCautelaresEPS() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        {/* HEADER */}
        <header className={styles.header}>
          <span className={styles.badge}>Proceso ejecutivo sector salud</span>
          <h1 className={styles.title}>
            Medidas cautelares para cobro de cartera a EPS
          </h1>
          <p className={styles.subtitle}>
            Cómo estructurar embargos e investigación patrimonial para asegurar
            el recaudo efectivo.
          </p>
        </header>

        {/* INTRO DESTACADA */}
        <section className={styles.highlightSection}>
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

          <ul className={styles.list}>
            <li>Embargo de cuentas bancarias</li>
            <li>Embargo de créditos a favor del deudor</li>
            <li>Embargo de bienes registrables</li>
            <li>
              Retención de recursos derivados de relaciones comerciales o
              contractuales
            </li>
          </ul>
        </section>

        {/* INVESTIGACIÓN PATRIMONIAL */}
        <section className={styles.section}>
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

        {/* BLOQUE ESTRATÉGICO FINAL */}
        <section className={styles.strategyBox}>
          <h2>Estrategia cautelar desde el inicio</h2>
          <p>
            PRAVICE estructura el proceso ejecutivo con estrategia cautelar
            integral desde la presentación de la demanda, maximizando la
            probabilidad de recaudo efectivo.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <a href="/contacto" className={styles.ctaButton}>
            Solicitar evaluación de cartera
          </a>
        </footer>
      </article>
    </main>
  );
}
