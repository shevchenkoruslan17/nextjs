"use client";

import { useState, type FormEvent } from "react";
import { createCar } from "@/lib/car.services";
import type { CreateCarDto } from "@/types/car";

export default function CarForm() {
    const [brand, setBrand] = useState("");
    const [price, setPrice] = useState("");
    const [year, setYear] = useState("2026");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setMessage("");
        setError("");

        const normalizedBrand = brand.trim();
        const brandPattern = /^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$/;

        if (!brandPattern.test(normalizedBrand)) {
            setError("Марка має містити від 1 до 20 літер");
            return;
        }
        const numericPrice = Number(price);
        const numericYear = Number(year);

        if (
            price.trim() === "" || !Number.isInteger(numericPrice) || numericPrice < 0 ||
            numericPrice > 1_000_000
        ) {
            setError("Ціна має бути цілим числом від 0 до 1 000 000.");
            return;
        }

        if (
            year.trim() === "" || !Number.isInteger(numericYear) || numericYear < 1990 ||
            numericYear > 2026
        ) {
            setError("Рік має бути цілим числом від 1990 до 2026.");
            return;
        }
        const car: CreateCarDto = {
            brand: normalizedBrand,
            price: numericPrice,
            year: numericYear,
        };
        setLoading(true);

        try {
            await createCar(car);
            setMessage("Автомобіль успішно створено!");
            setBrand("");
            setPrice("");
            setYear("2026");
        } catch (err) {
            setError(
                err instanceof Error ? err.message : "Не вдалося створити автомобіль.");
        } finally {
            setLoading(false);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="brand">Марка автомобіля</label>
                <input
                    id="brand"
                    name="brand"
                    type="text"
                    value={brand}
                    onChange={(event) => setBrand(event.target.value)}
                    minLength={1}
                    maxLength={20}
                    pattern="[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}"
                    required
                />
            </div>

            <div>
                <label htmlFor="price">Ціна</label>
                <input
                    id="price"
                    name="price"
                    type="number"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)}
                    min={0}
                    max={1000000}
                    step={1}
                    required
                />
            </div>

            <div>
                <label htmlFor="year">Рік випуску</label>
                <input
                    id="year"
                    name="year"
                    type="number"
                    value={year}
                    onChange={(event) => setYear(event.target.value)}
                    min={1990}
                    max={2026}
                    step={1}
                    required
                />
            </div>

            <button type="submit" disabled={loading}>
                {loading ? "Створення..." : "Створити автомобіль"}
            </button>
            {message && <p role="status">{message}</p>}
            {error && <p role="alert">{error}</p>}
        </form>
    );
}
