import './BackToTopButton.scss';

export const BackToTopButton = ({children}) => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <button onClick={backToTop} className={"back-to-top-button"}>{children}</button>
    )
}