import Link from "next/link";
import CardPost from "../components/CardPost";
import logger from "../logger";
import { Post } from "../types/Post";
import styles from "./page.module.css";

async function getPosts(
  page: number
): Promise<{ data: Post[]; prev: number; next: number }> {
  const response = await fetch(
    `http://localhost:4000/posts?_page=${page}&_per_page=6`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    logger.error("Failed to fetch posts");
    throw new Error("Failed to fetch posts");
  }
  logger.info("Fetched posts");
  return response.json();
}

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const params = await searchParams;
  const currentPage = Number(params.pages) || 1;

  const { data, next, prev } = await getPosts(currentPage);
  return (
    <main className={styles["main-grid"]}>
      {data.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.pagination}>
        {prev && <Link href={`/?pages=${prev}`}>Previous Page</Link>}
        {next && <Link href={`/?pages=${next}`}>Next Page</Link>}
      </div>
    </main>
  );
}
