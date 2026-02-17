import styles from "./Article.module.css";

export const metadata = {
  title: "¿Conviene vender la cartera a una EPS? Mejor recupérela | PRAVICE",
  description:
    "Por qué no conviene vender cartera EPS con descuento. PRAVICE no compra cartera: la recupera efectivamente con estrategia jurídica y proceso ejecutivo.",
};

export default function VenderOCobrarCartera() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.article}>
        {/* HEADER */}
        <header className={styles.header}>
          <span className={styles.badge}>Decisión estratégica</span>
          <h1 className={styles.title}>Por qué NO vender su cartera EPS</h1>
          <p className={styles.subtitle}>
            Recuperarla jurídicamente suele ser una alternativa más rentable y
            estratégica.
          </p>
        </header>

        {/* SECCIÓN 1 */}
        <section className={styles.highlightSection}>
          <h2>Vender cartera suele implicar perder valor</h2>
          <p>
            La compra de cartera normalmente se realiza con descuentos
            significativos sobre el valor real de la obligación.
          </p>
          <p>
            En muchos casos, la necesidad de liquidez lleva a aceptar
            porcentajes reducidos que no reflejan el monto total adeudado.
          </p>
          <p>
            Una recuperación jurídica bien estructurada, en cambio, busca el
            pago del valor completo y permite utilizar herramientas como medidas
            cautelares dentro del proceso ejecutivo.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>PRAVICE no compra cartera</h2>
          <p>
            PRAVICE implementa recuperación efectiva mediante gestión
            prejurídica y, cuando es necesario, proceso judicial con enfoque en
            recaudo real.
          </p>
          <p>
            El modelo se basa en honorarios asociados a resultados, alineando
            intereses con el cliente y priorizando el pago efectivo sobre la
            negociación con descuento.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.strategyBox}>
          <h2>Maximizar recaudo vs. vender con descuento</h2>
          <p>
            Si el objetivo es proteger el valor de la cartera y mantener
            posición jurídica sólida, una estrategia estructurada suele ser
            superior a una cesión con descuento inmediato.
          </p>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            Antes de vender su cartera, evalúe jurídicamente su potencial de
            recuperación.
          </p>

          <a href="/contacto" className={styles.ctaButton}>
            Solicitar evaluación estratégica
          </a>
        </footer>
      </article>
    </main>
  );
}
