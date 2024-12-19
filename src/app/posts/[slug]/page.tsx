import Image from "next/image";
import logger from "../../../logger";
import { Posts } from "../../../types/Posts";
import { remark } from "remark";
import html from "remark-html";
import styles from "./page.module.css";
async function getPost(slug: string): Promise<Posts> {
  let obj: Posts = {} as Posts;
  try {
    const response = await fetch(`http://localhost:4000/posts?slug=${slug}`, {
      method: "GET",
    });
    if (!response.ok) {
      logger.error("Failed to fetch posts");
      //throw new Error("Failed to fetch posts");
    }
    logger.info("Fetched posts");
    const data = await response.json();
    if (data.length === 0) {
      return obj;
    }
    obj = data[0];
    const processedContent = await remark().use(html).process(obj.markdown);
    const content = processedContent.toString();
    obj.markdown = content;
  } catch (error) {
    logger.error("Failed to fetch posts");
    console.log(error);
  }
  return obj;
}
export default async function Post({
  params,
}: {
  params: Record<string, string | undefined>;
}) {
  const { slug } = await params;
  const post = await getPost(slug || "");
  return (
    <article className={styles.post}>
      <section className={styles.section}>
        <div className={styles.image}>
          <Image src={post.cover} alt={post.title} width={800} height={400} />
        </div>
        <div className={styles.text}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <h3>Código:</h3>
        <div className={styles.text}>
          <div dangerouslySetInnerHTML={{ __html: post.markdown }} />
        </div>
      </section>
    </article>
  );
}
