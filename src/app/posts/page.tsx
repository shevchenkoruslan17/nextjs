import Link from "next/link";
import { getPosts } from "@/src/lib/api";

export default async function PostsPage() {
    const posts = await getPosts();
    return (
        <main>
            <h1>Пости</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <nav>
                <Link href="/users">Користувачі</Link>{" | "}
                <Link href="/comments">Коментарі</Link>
            </nav>
        </main>
    );
}
