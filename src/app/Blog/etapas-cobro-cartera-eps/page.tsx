import styles from "./Article.module.css";

export const metadata = {
  title: "Cobro de cartera EPS: etapas del recaudo efectivo | PRAVICE",
  description:
    "Etapas del cobro de cartera a EPS: diagnóstico, cobro prejurídico, proceso ejecutivo, medidas cautelares e investigación patrimonial para recaudo efectivo.",
};

export default function CobroCarteraEPS() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        {/* HEADER */}
        <header className={styles.header}>
          <span className={styles.badge}>Guía estratégica</span>
          <h1 className={styles.title}>
            Cobro de cartera EPS: etapas para un recaudo efectivo
          </h1>
        </header>

        {/* ETAPA 1 */}
        <section className={styles.section}>
          <h2>Etapa 1: Diagnóstico y segmentación</h2>
          <p>
            Se revisa antigüedad, trazabilidad de radicación, saldos, abonos,
            exigibilidad y riesgo de prescripción. Con esto se priorizan
            paquetes de cobro según probabilidad de recaudo y urgencia jurídica.
          </p>
        </section>

        {/* ETAPA 2 */}
        <section className={styles.section}>
          <h2>Etapa 2: Cobro prejurídico</h2>
          <p>
            Se realizan requerimientos formales, negociación estructurada y
            acuerdos verificables. El objetivo es recuperar rápidamente sin
            judicializar, siempre que el pagador demuestre voluntad real de
            pago.
          </p>
        </section>

        {/* ETAPA 3 */}
        <section className={styles.section}>
          <h2>Etapa 3: Cobro jurídico (proceso ejecutivo)</h2>
          <p>
            Cuando existe obligación clara, expresa y exigible, el proceso
            ejecutivo permite solicitar mandamiento de pago y decretar medidas
            cautelares para asegurar el recaudo.
          </p>
        </section>

        {/* ETAPA 4 */}
        <section className={styles.section}>
          <h2>Etapa 4: Medidas cautelares e investigación patrimonial</h2>
          <p>
            Identificar cuentas bancarias, activos y fuentes de recaudo mejora
            la efectividad de embargos y acelera el cumplimiento de la
            obligación. La estrategia cautelar bien estructurada marca la
            diferencia.
          </p>
        </section>

        {/* FOOTER ESTRATÉGICO */}
        <footer className={styles.footer}>
          <p>
            ¿Necesita recuperar cartera EPS?{" "}
            <strong>
              PRAVICE implementa estrategia legal orientada a resultados.
            </strong>{" "}
            No compramos cartera. La recuperamos.
          </p>
        </footer>
      </article>
    </main>
  );
}
