import './FooterLinksGroup.scss';
import {Fragment} from "react";
import {FooterLink} from "./FooterLink/FooterLink.jsx";

export const FooterLinksGroup = ({title, links}) => {
    return (
        <div>
            <h3 className={"footer-link-title"}>{title}</h3>
            <ul>
                {links.map((link, index) => {
                    return (
                        <Fragment key={index}>
                            <FooterLink link={link.link}>{link.text}</FooterLink>
                        </Fragment>
                    );
                })}
            </ul>
        </div>
    )
}