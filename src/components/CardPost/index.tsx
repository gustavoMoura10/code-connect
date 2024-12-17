import Image from "next/image";
import Avatar from "../Avatar";
import { Post } from "../../types/Post";
import styles from "./cardpost.module.css";
export default function CardPost({ post }: { post: Post }) {
  return (
    <article className={styles.card}>
      <header>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Imagem de capa do post ${post.title}`}
          />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer>
        <Avatar name={post.author.name} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
}
