"use client";

import { useEffect, useState } from "react";
import { getCars } from "@/lib/car.services";
import type { Car } from "@/types/car";

export default function CarList() {
    const [cars, setCars] = useState<Car[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getCars()
            .then(setCars)
            .catch((err: unknown) => {
                setError(
                    err instanceof Error ? err.message : "Не вдалося завантажити автомобілі.");
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <p>Завантаження автомобілів...</p>;
    }

    if (error) {
        return <p role="alert">{error}</p>;
    }

    if (cars.length === 0) {
        return <p>Автомобілів поки немає.</p>;
    }

    return (
        <ul>
            {cars.map((car) => (
                <li key={car.id}>
                    <strong>{car.brand}</strong>
                    {" — "}
                    {car.year} рік
                    {" — "}
                    {car.price.toLocaleString("uk-UA")} грн
                </li>
            ))}
        </ul>
    );
}
