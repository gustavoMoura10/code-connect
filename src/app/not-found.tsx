import { ArrowBack } from "@/components/icons/ArrowBack";
import Image from "next/image";
import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
    return (

      <main className={styles.container}>
      <Image
        src="/404.png" /* Caminho para a imagem */
        alt="Not Found"
        width={1070}
        height={500}
        className={styles.image}
      />
      <h1 className={styles.title}>Ops! Página não encontrada</h1>
      <p className={styles.message}>
        Você pode voltar ao feed e continuar buscando projetos incríveis!
      </p>
      <Link href="/" className={styles.link}>
        Voltar ao feed <ArrowBack />
      </Link>
    </main>
    )
};