import Link from "next/link";
import { notFound } from "next/navigation";
import { getComment } from "@/src/lib/api";

export default async function CommentDetailsPage({params,}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const comment = await getComment(id);
    if (!comment.id) {
        notFound();
    }
    return (
        <main>
            <h1>{comment.name}</h1>
            <p>ID коментаря: {comment.id}</p>
            <p>ID поста: {comment.postId}</p>
            <p>Email: {comment.email}</p>
            <p>{comment.body}</p>
            <Link href="/comments">← До списку коментарів</Link>
        </main>
    );
}
