import Link from "next/link";
import { getUsers } from "@/src/lib/api";

export default async function UsersPage() {
    const users = await getUsers();
    return (
        <main>
            <h1>Користувачі</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            {user.name} (@{user.username})
                        </Link>
                    </li>
                ))}
            </ul>
            <nav>
                <Link href="/posts">Пости</Link>{" | "}
                <Link href="/comments">Коментарі</Link>
            </nav>
        </main>
    );
}
