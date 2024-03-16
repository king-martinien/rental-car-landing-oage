import './CustomButtonWithIcon.scss';

export const CustomButtonWithIcon = ({label, children}) => {
    return (
        <button className={"custom-button-with-icon"}>
            <span className="icon">{children}</span>
            <span>{label}</span>
        </button>
    );
}