"use client";

import { useState } from "react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        {/* LOGO */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/logo_pravice.png"
            alt="Logo PRAVICE Abogados"
            width={60}
            height={60}
            priority
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* MENU + BOTÓN */}
        <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Inicio
          </a>
          <a href="#problema" onClick={() => setMenuOpen(false)}>
            Problema
          </a>
          <a href="#solucion" onClick={() => setMenuOpen(false)}>
            Solución
          </a>
          <a href="#metodologia" onClick={() => setMenuOpen(false)}>
            Metodología
          </a>
          <a href="#clientes" onClick={() => setMenuOpen(false)}>
            Clientes
          </a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
          <a href="/Blog" onClick={() => setMenuOpen(false)}>
            Blog
          </a>

          {/* ÚNICO BOTÓN */}
          <Link
            href="https://legalapp.pravice.co/login.php"
            target="_blank"
            className={styles.appButton}
            onClick={() => setMenuOpen(false)}
          >
            Consultar mi caso
          </Link>
        </nav>
      </div>
    </header>
  );
}
