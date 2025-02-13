import Link from "next/link";
import CardPost from "../components/CardPost";
import logger from "../logger";
import { Posts } from "../types/Posts";
import styles from "./page.module.css";
import db from "../config/database/db";



const LIMIT = 6;
async function getPosts(
  page: number,
  searchTerm?: string
): Promise<{ data: Posts[]; prev: number; next: number }> {
  const obj = {
    data: [] as Posts[],
    prev: 0,
    next: 0,
  };
  try {
    const where: { title?: { contains: string ,mode:any} } = {};
    if(searchTerm){
      where.title = {
        contains: searchTerm,
        mode:'insensitive'
      }
    }
    const posts = await db.post.findMany({
      skip: (page - 1) * LIMIT,
      take: LIMIT,
      where,
      include: {
        author: true,
      },
      orderBy: {
        id: "desc",
      },
      
    });
    const countPosts = await db.post.count();
    Object.assign(obj.data, posts);
    obj.prev = page > 1 ? page - 1 : 0;
    obj.next = page < Math.ceil(countPosts / LIMIT) ? page + 1 : 0;
    console.log(obj);
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
  const searchTerm = params?.q;

  const { data, next, prev } = await getPosts(currentPage,searchTerm);
  return (
    <main className={styles["main-grid"]}>
      {data.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
      <div className={styles.pagination}>
        {prev && <Link href={{pathname: "/", query: { pages: prev, q: searchTerm }}}>Previous Page</Link>}
        {next && <Link href={{pathname: "/", query: { pages: next, q: searchTerm }}}>Next Page</Link>}
      </div>
    </main>
  );
}
