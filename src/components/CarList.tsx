import { ICar } from "@/types/car";

interface IProps {
    cars: ICar[];
}

const CarList = ({ cars }: IProps) => {
    return (
        <div>
            <h1>Список автомобілів</h1>
            {cars.length === 0 ? (
                <p>Автомобілів поки немає</p>
            ) : (
                cars.map((car) => (
                    <div key={car.id}>
                        <h2>{car.brand}</h2>
                        <p>Ціна: {car.price}</p>
                        <p>Рік: {car.year}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default CarList;