import {Fragment} from "react";
import {Advantage} from "./Advantage/Advantage.jsx";
import './AdvantagesGroup.scss';

export const AdvantagesGroup = () => {
    const advantages = [
        {
            title: "Easy Rent",
            description: "Rent a car at our rental with an easy and fast process without disturbing your productivity",
            imageUrl: "svgs/rocket.svg"
        },
        {
            title: "Premium Quality",
            description: "Our cars are always maintained engine health and cleanliness to provide a more comfortable driving experience",
            imageUrl: "svgs/check.svg"
        },
        {
            title: "Professional Agent",
            description: "You can ask your travel companion to escort and guide your journey.",
            imageUrl: "svgs/agent.svg"
        },
        {
            title: "Car Safety",
            description: "We guarantee the safety of the engine on the car always running well with regular checks" +
                " on the car engine.",
            imageUrl: "svgs/safety.svg"
        },
        {
            title: "Refund",
            description: "Our service guarantee provides a money back opportunity if the car does not match the" +
                " information provided.",
            imageUrl: "svgs/refund.svg"
        },
        {
            title: "Live Monitoring",
            description: "Our service provides direct customer monitoring to monitor trips in terms of safety and comfort.",
            imageUrl: "svgs/monitoring.svg"
        },
    ];

    return (
        <div className={"advantages"}>
            {advantages.map((advantage, index) => {
                return (
                    <Fragment key={index}>
                        <Advantage advantage={advantage}/>
                    </Fragment>
                );
            })}
        </div>
    )
}