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
            width={70}
            height={70}
            priority
          />
        </Link>

        {/* HAMBURGER */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
          <span className={menuOpen ? styles.barActive : styles.bar}></span>
        </button>

        {/* MENU */}
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

          {/* Botón también visible en móvil */}
          <Link
            href="https://legalapp.pravice.co/login.php"
            target="_blank"
            className={styles.appButtonMobile}
            onClick={() => setMenuOpen(false)}
          >
            Consultar mi caso
          </Link>
        </nav>

        {/* BOTÓN DESKTOP */}
        <div className={styles.cta}>
          <Link
            href="https://legalapp.pravice.co/login.php"
            className={styles.appButton}
            target="_blank"
          >
            Consultar mi caso
          </Link>
        </div>
      </div>
    </header>
  );
}
