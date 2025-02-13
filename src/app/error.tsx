"use client"; 

import Image from "next/image";
import { useEffect } from "react";
import styles from "./error.module.css";
import Link from "next/link";
import { ArrowBack } from "../components/icons/ArrowBack";

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className={styles.container}>
      <Image
        src="/500.png" /* Caminho para a imagem */
        alt="Erro"
        width={1070}
        height={500}
        className={styles.image}
      />
      <h1 className={styles.title}>Opa! Um erro ocorreu.</h1>
      <p className={styles.message}>
        Não conseguimos carregar a página, volte para seguir navegando.
      </p>
      <Link href="/" className={styles.link}>
        Voltar ao feed <ArrowBack />
      </Link>
    </main>
  );
}
