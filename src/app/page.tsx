import Link from "next/link";
import CardPost from "../components/CardPost";
import logger from "../logger";
import { Posts } from "../types/Posts";
import styles from "./page.module.css";
import db from "../config/database/db";

async function getPosts(
  page: number
): Promise<{ data: Posts[]; prev: number; next: number }> {
  const obj = {
    data: [] as Posts[],
    prev: 0,
    next: 0,
  };
  try {
    console.log(page);
    const posts = await db.post.findMany({
      skip: (page - 1) * 10,
      take: 10,
      orderBy: {
        id: "desc",
      },
    });
    Object.assign(obj.data, posts);
    obj.prev = page - 1;
    obj.next = page + 1;
    logger.info("Fetched posts");
    //console.log(posts);
  } catch (error) {
    logger.error("Failed to fetch posts");
    console.log(error);
  }
  return obj;
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
