import Link from "next/link";

export default function HomePage() {
    return (
        <main>
            <h1>Cars</h1>
            <nav>
                <ul>
                    <li>
                        <Link href="/cars">Автомобілі</Link>
                    </li>
                    <li>
                        <Link href="/cars/creatCars">Додати автомобіль</Link>
                    </li>
                </ul>
            </nav>
        </main>
    );
}
