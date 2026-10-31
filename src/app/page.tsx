import Link from "next/link";

export default function Home() {
    return (
        <main>
            <h1>Cars Application</h1>

            <Link href="/cars">
                Переглянути автомобілі
            </Link>
        </main>
    );
}