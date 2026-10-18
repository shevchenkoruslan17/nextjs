import Link from "next/link";
import CarList from "@/components/carList";

export default function CarsPage() {
    return (
        <main>
            <h1>Автомобілі</h1>
            <p>
                <Link href="/">На головну</Link>
                {" | "}
                <Link href="/cars/creatCars">Додати автомобіль</Link>
            </p>
            <CarList/>
        </main>
    );
}
