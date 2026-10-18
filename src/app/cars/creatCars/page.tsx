import Link from "next/link";
import CarForm from "@/components/carForm";

export default function CreateCarPage() {
    return (
        <main>
            <h1>Створити автомобіль</h1>
            <p>
                <Link href="/cars">Повернутися до списку автомобілів</Link>
            </p>
            <CarForm />
        </main>
    );
}
