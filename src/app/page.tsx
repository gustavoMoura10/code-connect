import CardPost from "../components/CardPost";
import { Post } from "../types/Post";
async function getPosts(): Promise<{ posts: Post[] }> {
  const response = await fetch(
    "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts.json",
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}
export default async function Home() {
  const { posts } = await getPosts();
  return (
    <main>
      {posts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
