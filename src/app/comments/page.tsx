import Link from "next/link";
import { getComments } from "@/src/lib/api";

export default async function CommentsPage() {
    const comments = await getComments();
    return (
        <main>
            <h1>Коментарі</h1>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>
                            {comment.name} — {comment.email}
                        </Link>
                    </li>
                ))}
            </ul>
            <nav>
                <Link href="/users">Користувачі</Link>{" | "}
                <Link href="/posts">Пости</Link>
            </nav>
        </main>
    );
}
