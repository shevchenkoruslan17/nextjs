"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { ICarCreate } from "@/types/car";
import { carSchema } from "@/schemas/car.schema";
import { createCar } from "@/lib/car.service";

const CarForm = () => {
    const router = useRouter();
    const [serverError, setServerError] = useState("");

    const {register, handleSubmit, reset, formState: { errors, isSubmitting }} = useForm<ICarCreate>({
        resolver: joiResolver(carSchema),
        mode: "onTouched",
        defaultValues: {brand: "", price: 0, year: 2026,}
    });

    const onSubmit = async (data: ICarCreate) => {
        try {setServerError("");
            await createCar(data);
            reset();
            router.push("/cars");
            router.refresh();

        } catch (error) {
            setServerError(error instanceof Error ? error.message : "Помилка створення автомобіля");
        }
    };

    return (
        <div>
            <h1>Створення автомобіля</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Марка автомобіля</label>
                    <input type="text" placeholder="Наприклад BMW"{...register("brand")}/>
                    {errors.brand && (<p>{errors.brand.message}</p>)}
                </div>

                <div>
                    <label>Ціна</label>
                    <input type="number"{...register("price", {valueAsNumber: true,})}/>
                    {errors.price && (<p>{errors.price.message}</p>)}
                </div>

                <div>
                    <label>Рік випуску</label>
                    <input type="number"{...register("year", {valueAsNumber: true,})}/>
                    {errors.year && (<p>{errors.year.message}</p>)}
                </div>

                {serverError && (<p>{serverError}</p>)}

                <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Створення..." : "Створити автомобіль"}
                </button>
            </form>
        </div>
    );
};

export default CarForm;