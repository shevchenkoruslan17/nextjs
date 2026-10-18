import type { Car, CreateCarDto } from "@/types/car";

const API_URL = "http://bigbird.space/carsAPI/v1";

export async function getCars(): Promise<Car[]> {
    const response = await fetch(`${API_URL}/cars`);

    if (!response.ok) {
        throw new Error(
            `Не вдалося завантажити автомобілі: ${response.status}`
        );
    }
    const data: unknown = await response.json();

    if (Array.isArray(data)) {
        return data as Car[];
    }

    if (typeof data === "object" && data !== null) {
        if ("results" in data && Array.isArray(data.results)) {
            return data.results as Car[];
        }

        if ("data" in data && Array.isArray(data.data)) {
            return data.data as Car[];
        }
    }
    throw new Error();
}
export async function createCar(car: CreateCarDto): Promise<Car> {
    const response = await fetch(`${API_URL}/cars`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(car),
    });
    if (!response.ok) {
        const message = await response.text();
        throw new Error(message || `Не вдалося створити автомобіль: ${response.status}`);
    }
    return response.json() as Promise<Car>;
}
