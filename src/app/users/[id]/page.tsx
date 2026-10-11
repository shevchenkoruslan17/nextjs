import Link from "next/link";
import { notFound } from "next/navigation";
import { getUser } from "@/src/lib/api"

export default async function UserDetailsPage({params,}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await getUser(id);
    if (!user.id) {
        notFound();
    }
    return (
        <main>
            <h1>{user.name}</h1>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Місто: {user.address.city}</p>
            <p>Компанія: {user.company.name}</p>
            <Link href="/users">← До списку користувачів</Link>
        </main>
    );
}
