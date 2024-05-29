import { PostList } from "../components/PostList";
import { sql } from "@vercel/postgres";

export default async function Home() {
  return <PostList />;
}
