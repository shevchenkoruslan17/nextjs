import Link from "next/link";
import CarList from "@/components/CarList";
import { getAllCars } from "@/lib/car.service";

const CarsPage = async () => {
    try {
        const cars = await getAllCars();

        return (
            <main>
                <CarList cars={cars}/>
                <Link href="/cars/create">Створити автомобіль</Link>
            </main>
        );
    } catch (error) {
        console.error("Cars API error:", error);

        return (
            <main>
                <h1>Список автомобілів</h1>
                <p>Не вдалося завантажити автомобілі.</p>
            </main>
        );
    }
};

export default CarsPage;