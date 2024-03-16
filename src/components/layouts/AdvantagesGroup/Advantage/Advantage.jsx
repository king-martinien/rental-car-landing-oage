import './Advantage.scss';

export const Advantage = ({advantage}) => {
    return (
        <div className={"advantage"}>
            <img className={"advantage-img"} src={advantage.imageUrl} alt={advantage.title}/>
            <div className={"advantage-content"}>
                <h3 className={"advantage-title"}>{advantage.title}</h3>
                <p className={"advantage-description"}>{advantage.description}</p>
            </div>
        </div>
    );
}