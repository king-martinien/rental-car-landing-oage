import "./Footer.scss"
import {BackToTopButton} from "./BackToTopButton/BackToTopButton.jsx";
import {Logo} from "../../ui/Logo/Logo.jsx";
import {SocialIconButtonGroup} from "../../ui/SocialIconButtonGroup/SocialIconButtonGroup.jsx";
import {FooterLinksGroup} from "./FooterLinksGroup/FooterLinksGroup.jsx";
import {Fragment} from "react";
import {ContainerWrapper} from "../../ui/ContainerWrapper/ContainerWrapper.jsx";

export const Footer = () => {
    const footerLinks = [
        {
            title: "Company",
            links: [
                {link: "", text: "About Us"},
                {link: "", text: "Services"},
                {link: "", text: "Car"},
                {link: "", text: "Our partners"}
            ]
        },
        {
            title: "Services",
            links: [
                {link: "", text: "Instant Rent"},
                {link: "", text: "Private Driver"},
                {link: "", text: "Long Trip"},
            ]
        },
        {
            title: "Support",
            links: [
                {link: "", text: "Blog"},
                {link: "", text: "FAQs"},
                {link: "", text: "Call Center"},
                {link: "", text: "Partner With Us"},
                {link: "", text: "Terms & Conditions"},
            ]
        }
    ]
    return (
        <footer className={"footer"}>
            <div className={"footer-content"}>
                <ContainerWrapper>
                    <div className={"footer-content-container"}>
                        <div className={"about"}>
                            <Logo/>
                            <p className={"about-text"}>
                                We are a well-known car rental service that has many partners in each region to connect
                                with
                                you to assist in your trip in meetings, events, holidays or long trips.
                            </p>
                            <SocialIconButtonGroup/>
                        </div>
                        {footerLinks.map((footerLink, index) => {
                            return (
                                <Fragment key={index}>
                                    <FooterLinksGroup title={footerLink.title} links={footerLink.links}/>
                                </Fragment>
                            );
                        })}
                    </div>
                </ContainerWrapper>
            </div>
            <BackToTopButton>
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 9L8 2L1 9" stroke="#FBB7B7" strokeWidth="2"/>
                    <path d="M13 16L8 12L3 16" stroke="#FBB7B7" strokeWidth="2"/>
                </svg>
            </BackToTopButton>
            <div className={"footer-line"}></div>
        </footer>
    )
}