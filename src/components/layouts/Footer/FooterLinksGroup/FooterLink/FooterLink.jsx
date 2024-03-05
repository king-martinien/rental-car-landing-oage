import './FooterLink.scss';

export const FooterLink = ({link, children}) => {
    return (
        <li><a className={"footer-link"} href={link}>{children}</a></li>
    )
};