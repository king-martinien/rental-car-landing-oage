import './SocialIconButton.scss';

export const SocialIconButton = ({link, label, children}) => {
    return (
        <a href={link} target={"_blank"} aria-label={label} className={"icon-button"}>{children}</a>
    );
}