import {CustomButton} from "../../../ui/CustomButton/CustomButton.jsx";
import './ServiceItem.scss';

export const ServiceItem = ({service}) => {
    return (
        <div className={"service"} style={{backgroundImage: `url(${service.bgImage})`}}>
            <img className={"service-img"} src={service.imageUrl} alt={service.title}/>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <CustomButton>Read More</CustomButton>
        </div>
    )
}