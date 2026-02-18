import styles from "./Article.module.css";
import Link from "next/link";

export const metadata = {
  title: "Cómo responder a una EPS sobre compra de cartera | PRAVICE",
  description:
    "Cómo responder a una EPS cuando pregunta por compra de cartera: PRAVICE no compra cartera, la recupera efectivamente con cobro prejurídico y proceso ejecutivo.",
};

export default function ResponderCompraCartera() {
  return (
    <main className={styles.wrapper}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Guía estratégica sector salud</span>

          <h1 className={styles.title}>
            Cómo responder a una EPS sobre “compra de cartera”
          </h1>

          <p className={styles.subtitle}>
            Qué decir correctamente para proteger el valor total de la
            obligación y evitar descuentos disfrazados de negociación.
          </p>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <article className={styles.article}>
        {/* ACLARACIÓN PRINCIPAL */}
        <section className={styles.sectionAlt}>
          <h2>Respuesta clara: PRAVICE no compra cartera</h2>

          <p>
            Si una EPS pregunta por compra de cartera, lo correcto es aclarar
            que <strong>no se compra</strong>, sino que se{" "}
            <strong>recupera efectivamente</strong> mediante estrategia jurídica
            estructurada (cobro prejurídico + proceso ejecutivo).
          </p>

          <p>
            Esto evita descuentos agresivos, protege el valor total de la
            obligación y mantiene la presión jurídica adecuada.
          </p>
        </section>

        {/* MODELO DE RESPUESTA */}
        <section className={styles.section}>
          <h2>Modelo de respuesta (lista para enviar)</h2>

          <p>Cordial saludo. Gracias por su comunicación.</p>

          <p>
            Nos permitimos aclarar que{" "}
            <strong>PRAVICE ABOGADOS S.A.S. no compra cartera</strong>. Nuestro
            servicio consiste en la <strong>recuperación efectiva</strong> de la
            cartera mediante gestión prejurídica y, cuando aplique, acciones
            judiciales (proceso ejecutivo) con medidas cautelares orientadas al
            recaudo.
          </p>

          <p>
            Para avanzar, agradecemos confirmar responsable de cartera y
            cronograma de pago verificable sobre las facturas relacionadas, o en
            su defecto, agendar mesa de conciliación con propuesta formal.
          </p>

          <p>
            Atentamente, <br />
            PRAVICE ABOGADOS S.A.S.
          </p>
        </section>

        {/* BLOQUE OSCURO */}
        <section className={styles.sectionHighlight}>
          <h2>Clave estratégica</h2>

          <p>
            No negocie el valor como si se tratara de una cesión o compra. Exija
            pago completo o acuerdo verificable, y active ruta ejecutiva si
            existe incumplimiento o dilación injustificada.
          </p>
        </section>
      </article>
    </main>
  );
}
