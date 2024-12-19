import Image from "next/image";
import Avatar from "../Avatar";
import { Posts } from "../../types/Posts";
import styles from "./cardpost.module.css";
import Link from "next/link";
export default function CardPost({ post }: { post: Posts }) {
  return (
    <article className={styles.card}>
      <Link href={`/posts/${post.slug}`} className={styles.link}>
        <header className={styles.header}>
          <figure className={styles.image}>
            <Image
              src={post.cover}
              width={0} // Required for layout='intrinsic' or 'fixed'
              height={0} // Required for layout='intrinsic' or 'fixed'
              sizes="90%" // Helps with responsive images
              style={{ width: "90%", height: "auto" }}
              alt={`Imagem de capa do post ${post.title}`}
            />
          </figure>
        </header>
        <section className={styles.section}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <footer className={styles.footer}>
            <Avatar name={post.author.name} imageSrc={post.author.avatar} />
          </footer>
        </section>
      </Link>
    </article>
  );
}
