import Link from "next/link";
import styles from "./Blog.module.css";

const articles = [
  {
    title: "Cómo recuperar la cartera de las EPS en Colombia",
    slug: "como-recuperar-cartera-eps-colombia",
    description:
      "Estrategias legales para IPS y clínicas frente a mora prolongada de EPS.",
  },
  {
    title: "Carta para cobro de cartera a una EPS",
    slug: "carta-cobro-cartera-eps",
    description:
      "Modelo estratégico y checklist documental previo a proceso judicial.",
  },
  {
    title: "Cobro de cartera EPS: etapas",
    slug: "etapas-cobro-cartera-eps",
    description: "Desde el cobro prejurídico hasta el proceso ejecutivo.",
  },
  {
    title: "Cómo responder a una EPS por compra de cartera",
    slug: "respuesta-eps-compra-cartera",
    description:
      "Qué implica la compra de cartera y cómo proteger su flujo financiero.",
  },
  {
    title: "Medidas cautelares en cobro EPS",
    slug: "medidas-cautelares-cobro-eps",
    description: "Embargos y estrategias para garantizar recaudo efectivo.",
  },
  {
    title: "Cobro de cartera ante ADRES",
    slug: "cobro-cartera-adres",
    description: "Accidentes, NO PBS, negaciones y procedimientos especiales.",
  },
  {
    title: "Cobro a entes territoriales y secretarías de salud",
    slug: "cobro-entes-territoriales-salud",
    description: "PNA y esfuerzo propio en el sector salud.",
  },
  {
    title: "Prescripción en cartera salud",
    slug: "prescripcion-cartera-salud",
    description: "Cómo evitar perder la cartera por vencimiento de términos.",
  },
  {
    title: "Por qué NO vender su cartera EPS",
    slug: "no-vender-cartera-eps",
    description:
      "Alternativas jurídicas más rentables que la venta de cartera.",
  },
  {
    title: "Requerimiento documental mínimo para demandar una EPS",
    slug: "requerimiento-documental-demandar-eps",
    description: "Checklist jurídico para reducir riesgos procesales.",
  },
];

export const metadata = {
  title: "Blog Jurídico | Recuperación de Cartera EPS",
  description:
    "Artículos especializados sobre recuperación de cartera EPS, ADRES y procesos ejecutivos para IPS y clínicas.",
};

export default function BlogPage() {
  return (
    <main className={styles.pageWrapper}>
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>
            Blog Jurídico - Recuperación de Cartera EPS
          </h1>
          <p className={styles.heroSubtitle}>
            Información estratégica para IPS, clínicas y sector salud.
          </p>
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/Blog/${article.slug}`}
              className={styles.card}
            >
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardDescription}>{article.description}</p>
              <span className={styles.readMore}>Leer artículo →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
