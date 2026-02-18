import Link from "next/link";
import styles from "./Article.module.css";

export const metadata = {
  title: "Cobro a entes territoriales por servicios de salud | PRAVICE",
  description:
    "Cobro de cartera a entes territoriales y secretarías de salud: ruta administrativa, conciliación y cobro judicial para recuperar recursos por PNA y esfuerzo propio.",
};

export default function CobroEntesTerritoriales() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <Link href="/Blog" className={styles.backLink}>
            ← Volver al Blog
          </Link>

          <span className={styles.badge}>Sector salud público</span>

          <h1 className={styles.title}>
            Cobro de cartera a entes territoriales y secretarías de salud
          </h1>

          <p className={styles.subtitle}>
            Estrategia administrativa y judicial para recuperar recursos
            adeudados por servicios de salud.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <article className={styles.article}>
        {/* QUÉ TIPO DE CARTERA */}
        <section className={styles.section}>
          <h2>¿Qué tipo de cartera se puede cobrar?</h2>
          <p>La cartera frente a entes territoriales puede derivarse de:</p>

          <ul className={styles.checklist}>
            <li>Atención a población pobre no asegurada (PNA)</li>
            <li>Servicios y tecnologías NO PBS</li>
            <li>Recursos por esfuerzo propio</li>
            <li>Eventos especiales o contingencias sanitarias</li>
            <li>Obligaciones contractuales incumplidas</li>
          </ul>
        </section>

        {/* CÓMO LO HACEMOS */}
        <section className={styles.sectionAlt}>
          <h2>Cómo estructuramos la recuperación</h2>

          <p>
            Primero se agota la ruta administrativa con radicación formal,
            consolidación de soportes y seguimiento técnico.
          </p>

          <p>
            Si persiste el incumplimiento, activamos instancias conciliatorias
            cuando proceden y posteriormente la ruta judicial ante el juez
            competente, estructurando un expediente sólido que reduzca riesgos
            procesales.
          </p>
        </section>

        {/* BLOQUE ESTRATÉGICO */}
        <section className={styles.section}>
          <h2>Expediente sólido = mayor probabilidad de recaudo</h2>

          <div className={styles.letterBox}>
            <p>
              La recuperación frente a entidades públicas exige precisión
              documental, análisis contractual y estrategia procesal clara.
              Improvisar aumenta tiempos y riesgo de pérdida.
            </p>
          </div>
        </section>

        {/* CTA */}
        <footer className={styles.footer}>
          <p>
            PRAVICE estructura expedientes sólidos para reducir riesgos y
            aumentar el recaudo efectivo.
          </p>
        </footer>
      </article>
    </main>
  );
}
