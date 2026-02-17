import styles from "./Article.module.css";

export const metadata = {
  title:
    "Cómo recuperar la cartera de las EPS en Colombia | Guía legal PRAVICE",
  description:
    "Aprenda cómo recuperar la cartera de las EPS en Colombia: etapas de cobro, carta prejurídica, proceso ejecutivo y medidas cautelares.",
};

export default function ArticlePage() {
  return (
    <main className={styles.pageWrapper}>
      <article className={styles.article}>
        {/* HERO */}
        <header className={styles.hero}>
          <span className={styles.badge}>Guía práctica sector salud</span>
          <h1 className={styles.title}>
            Cómo recuperar la cartera de las EPS en Colombia
          </h1>
          <p className={styles.subtitle}>
            Estrategia jurídica real para IPS y clínicas: cobro prejurídico +
            proceso ejecutivo con enfoque en recaudo efectivo.
          </p>
        </header>

        {/* BLOQUE PROBLEMA */}
        <section className={styles.problemBox}>
          <h2>El problema real</h2>
          <p>
            Las EPS retrasan pagos mediante glosas, devoluciones e
            inconsistencias documentales. Sin estrategia jurídica, la cartera
            envejece, prescribe o termina vendiéndose con descuentos agresivos.
          </p>
          <p>
            Recuperar cartera EPS exige separar lo exigible de lo discutido y
            activar presión jurídica cuando corresponde.
          </p>
        </section>

        {/* ETAPAS */}
        <section className={styles.section}>
          <h2>Etapas estratégicas para recuperar cartera EPS</h2>

          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <span>1</span>
              <h3>Diagnóstico y control de términos</h3>
              <p>
                Análisis de antigüedad, radicación, saldos, abonos y riesgo de
                prescripción. Aquí se define qué va a cobro persuasivo y qué
                debe ir directamente a ejecución.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>2</span>
              <h3>Cobro prejurídico estructurado</h3>
              <p>
                Requerimientos formales, negociación estratégica y acuerdos con
                trazabilidad verificable.
              </p>
            </div>

            <div className={styles.stepCard}>
              <span>3</span>
              <h3>Proceso ejecutivo con medidas cautelares</h3>
              <p>
                Mandamiento de pago, embargos y aseguramiento patrimonial para
                maximizar el recaudo.
              </p>
            </div>
          </div>
        </section>

        {/* MODELO DE CARTA */}
        <section className={styles.section}>
          <h2>Modelo de carta de cobro prejurídico</h2>

          <div className={styles.tipBox}>
            Adjunte relación de facturas, fecha de radicación, vencimiento y
            saldo actualizado. La trazabilidad acelera el pago.
          </div>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento formal de pago – Cartera
              vencida
            </p>
            <p>
              Señores
              <br />
              [Nombre EPS]
              <br />
              Área de Cartera
            </p>
            <p>
              Por medio de la presente requerimos el pago de las facturas
              relacionadas en anexo por valor total de $______.
            </p>
            <p>
              Solicitamos cancelar dentro de los cinco (5) días hábiles
              siguientes a la recepción de esta comunicación.
            </p>
            <p>
              En caso de no obtener pago, procederemos con proceso ejecutivo y
              solicitud de medidas cautelares orientadas al recaudo efectivo.
            </p>
            <p>
              Atentamente,
              <br />
              [IPS / Apoderado]
            </p>
          </div>
        </section>

        {/* PROCESO EJECUTIVO */}
        <section className={styles.sectionHighlight}>
          <h2>El proceso ejecutivo: la vía más efectiva</h2>

          <ul>
            <li>Mandamiento de pago judicial</li>
            <li>Embargo de cuentas y activos</li>
            <li>Consignaciones judiciales</li>
            <li>Acuerdos con garantías ejecutables</li>
          </ul>

          <p className={styles.statement}>
            PRAVICE no compra cartera. La recuperamos jurídicamente para evitar
            descuentos y maximizar el recaudo.
          </p>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2>Errores que frenan el recaudo</h2>
          <ul>
            <li>No separar cartera exigible vs. discutida.</li>
            <li>Falta de trazabilidad documental.</li>
            <li>Dejar vencer términos de prescripción.</li>
            <li>No planear embargos desde el inicio.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2>Preguntas frecuentes</h2>

          <details className={styles.faq}>
            <summary>¿Cuándo pasar de prejurídico a ejecutivo?</summary>
            <p>
              Cuando existe obligación clara, expresa y exigible y no hay pago
              tras requerimiento formal.
            </p>
          </details>

          <details className={styles.faq}>
            <summary>¿PRAVICE compra cartera EPS?</summary>
            <p>
              No. Implementamos estrategias jurídicas de recuperación enfocadas
              en recaudo efectivo.
            </p>
          </details>
        </section>
      </article>
    </main>
  );
}
