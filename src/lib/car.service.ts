import { ICar, ICarCreate } from "@/types/car";

const BASE_URL = "http://bigbird.space/carsAPI/v1";

export const getAllCars = async (): Promise<ICar[]> => {
    const response = await fetch(`${BASE_URL}/cars`, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(`Помилка отримання автомобілів: ${response.status}`);
    }

    const result = await response.json();
    const cars = Array.isArray(result) ? result : result.data ?? result.cars;

    if (!Array.isArray(cars)) {
        throw new Error("Неправильний формат відповіді CarsAPI");
    }

    return cars;
};

export const createCar = async (car: ICarCreate): Promise<ICar> => {
    const response = await fetch(`${BASE_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(car),
    });

    if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Не вдалося створити автомобіль");
    }

    return response.json();
};