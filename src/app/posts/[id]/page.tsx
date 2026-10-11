import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/src/lib/api";

export default async function PostDetailsPage({params,}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const post = await getPost(id);
    if (!post.id) {
        notFound();
    }
    return (
        <main>
            <h1>{post.title}</h1>
            <p>ID поста: {post.id}</p>
            <p>ID користувача: {post.userId}</p>
            <p>{post.body}</p>
            <Link href="/posts">← До списку постів</Link>
        </main>
    );
}
