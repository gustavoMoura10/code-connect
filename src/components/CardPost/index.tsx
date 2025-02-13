import Image from "next/image";
import Avatar from "../Avatar";
import { Posts } from "../../types/Posts";
import styles from "./cardpost.module.css";
import Link from "next/link";
import { IconButton } from "../IconButton";
import { ThumbsUp } from "../icons/ThumbsUp";
export default function CardPost({ post }: { post: Posts }) {
  return (
    <article className={styles.card}>
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
          <Link href={`/posts/${post.slug}`}>
            Ver Detalhes
          </Link>
          <footer className={styles.footer}>
            <div>
              <form>
                <IconButton>
                   <ThumbsUp />
                 </IconButton> 
              </form>
              <p>{post.likes}</p>
            </div>
            <Avatar name={post.author.name} imageSrc={post.author.avatar} />
          </footer>
        </section>
    </article>
  );
}
