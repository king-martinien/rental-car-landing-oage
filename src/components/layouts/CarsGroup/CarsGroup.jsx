import {Fragment} from "react";
import {Car} from "./Car/Car.jsx";
import './CarsGroup.scss';

export const CarsGroup = () => {
    const cars = [
        {
            name: "Lexus CT200H",
            price: 120,
            localisation: "Jakarta",
            imageUrl: "./images/lexus.png"
        },
        {
            name: "Jaguar F-Pace",
            price: 132,
            localisation: "Bali",
            imageUrl: "./images/jaguar.png"
        },
        {
            name: "Mercedes Benz",
            price: 104,
            localisation: "Bandung",
            imageUrl: "./images/mercedes-benz.png"
        },
    ];

    return (
        <div className={"cars"}>
            {cars.map((car, index) => {
                return <Fragment key={index}>
                    <Car car={car}/>
                </Fragment>
            })}
        </div>
    );
}