import './ServicesGroup.scss';
import {Fragment} from "react";
import {ServiceItem} from "./ServiceItem/ServiceItem.jsx";

export const ServicesGroup = () => {
    const services = [
        {
            title: "Instant Rent",
            description: "We provide direct rental services when you need wherever you are. Our officers are quick" +
                " to respond in carrying out this task...",
            imageUrl: "svgs/key.svg",
            bgImage: "images/service-1.png"
        },
        {
            title: "Private Driver",
            description: "We have professional agents to accompany your trip useful for your protection from disturbances that you do not like...",
            imageUrl: "svgs/person.svg",
            bgImage: "images/service-2.png"
        },
        {
            title: "Long Trip",
            description: "Long trips whenever and wherever you want can comfortably use our car collection that supports long and long trips...",
            imageUrl: "svgs/trip.svg",
            bgImage: "images/service-3.png"
        },
    ];

    return (
        <div className="services-group">
            {services.map((service, index) => {
                return <Fragment key={index}>
                    <ServiceItem service={service}/>
                </Fragment>
            })}
        </div>
    );
}