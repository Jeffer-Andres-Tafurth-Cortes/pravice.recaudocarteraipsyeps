import styles from "./Article.module.css";

export const metadata = {
  title: "Carta para cobro de cartera a las EPS | Modelo profesional PRAVICE",
  description:
    "Modelo editable de carta para cobro de cartera a EPS con checklist de soportes: radicación, vencimiento, saldos y estrategia de cobro prejurídico.",
};

export default function CartaCobroEPS() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        {/* HERO */}
        <header className={styles.header}>
          <span className={styles.badge}>Modelo profesional editable</span>
          <h1 className={styles.title}>
            Carta para cobro de cartera a las EPS
          </h1>
          <p className={styles.subtitle}>
            Una carta bien estructurada aumenta la probabilidad de pago y
            fortalece el camino hacia cobro jurídico si se requiere.
          </p>
        </header>

        {/* CHECKLIST */}
        <section className={styles.section}>
          <h2>Checklist mínimo antes de enviar</h2>

          <ul className={styles.checklist}>
            <li>
              Listado de facturas (número, fecha, radicación, vencimiento,
              valor, saldo)
            </li>
            <li>Acuse o trazabilidad de radicación</li>
            <li>Soportes administrativos y clínicos mínimos (según aplique)</li>
            <li>Historial de pagos/abonos y su imputación</li>
            <li>Cuenta y forma de pago</li>
          </ul>
        </section>

        {/* MODELO DE CARTA */}
        <section className={styles.section}>
          <h2>Modelo de carta (editable)</h2>

          <div className={styles.letterBox}>
            <p>
              <strong>Asunto:</strong> Requerimiento formal de pago – Cartera
              vencida
            </p>

            <p>
              Señores <br />
              [Nombre EPS] <br />
              [Ciudad]
            </p>

            <p>Atn: Área de Cartera</p>

            <p>Cordial saludo:</p>

            <p>
              En nuestra calidad de [IPS/Clínica/Proveedor], requerimos el pago
              de la cartera vencida relacionada en anexo, correspondiente a
              servicios debidamente prestados y radicados, por valor total de
              $____.
            </p>

            <p>
              Solicitamos que el pago sea realizado dentro de los cinco (5) días
              hábiles siguientes a la recepción de esta comunicación. En caso de
              no pago o respuesta eficaz, procederemos con las acciones
              jurídicas pertinentes, incluyendo proceso ejecutivo y medidas
              cautelares orientadas al recaudo efectivo.
            </p>

            <p>
              Atentamente, <br />
              [Nombre / Cargo] <br />
              [Teléfono / Correo]
            </p>
          </div>
        </section>

        {/* DILACIONES */}
        <section className={styles.section}>
          <h2>¿Qué hacer si la EPS responde con dilaciones?</h2>
          <p>
            Responda por escrito, exija cronograma de pago verificable y, si hay
            incumplimiento o exigibilidad clara, active ruta ejecutiva con
            estrategia cautelar.
          </p>
        </section>

        {/* FOOTER ESTRATÉGICO */}
        <footer className={styles.footer}>
          <p>
            <strong>PRAVICE no compra cartera.</strong> La recupera con
            estrategia legal enfocada en recaudo efectivo.
          </p>
        </footer>
      </article>
    </main>
  );
}
