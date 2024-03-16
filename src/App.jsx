import './App.scss'
import {Footer} from "./components/layouts/Footer/Footer.jsx";
import {NewsLetterSection} from "./components/layouts/NewsletterSection/NewsLetterSection.jsx";
import {SectionWrapper} from "./components/ui/SectionWrapper/SectionWrapper.jsx";
import {SectionHeading} from "./components/ui/SectionHeading/SectionHeading.jsx";
import {AdvantagesGroup} from "./components/layouts/AdvantagesGroup/AdvantagesGroup.jsx";
import {Brands} from "./components/layouts/Brands/Brands.jsx";
import {CustomButton} from "./components/ui/CustomButton/CustomButton.jsx";
import {CarsGroup} from "./components/layouts/CarsGroup/CarsGroup.jsx";
import {ServicesGroup} from "./components/layouts/ServicesGroup/ServicesGroup.jsx";
import {Header} from "./components/layouts/Header/Header.jsx";
import {ContainerWrapper} from "./components/ui/ContainerWrapper/ContainerWrapper.jsx";

export const App = () => {
    return (
        <>
            <Header/>
            <div className="hero">
                <ContainerWrapper>
                    <div className="hero-container">
                        <div className="hero-content">
                            <h1>We Have Prepared a Car For Your Trip </h1>
                            <p>We have many types of cars that are ready for you to travel anywhere and anytime.</p>
                            <div className={"btns-group"}>
                                <CustomButton>Get In Touch</CustomButton>
                                <CustomButton outlined={true}>Our Cars</CustomButton>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={"./images/hero-img.png"} alt={"car"}/>
                        </div>
                    </div>
                </ContainerWrapper>
            </div>
            <main>
                <SectionWrapper>
                    <Brands/>
                </SectionWrapper>
                <SectionWrapper>
                    <SectionHeading subTitle={"Popular Car"} title={"Choose Your Suitable Car"}
                                    description={"We present popular cars that are rented by customers to maximize your comfort on long trips."}/>
                    <CarsGroup/>
                    <CustomButton>See All</CustomButton>
                </SectionWrapper>
                <div className="services">
                    <SectionWrapper>
                        <SectionHeading subTitle={"Services"} title={"Our Services"}
                                        description={"Our service is not only renting a car, but we also provide a" +
                                            " private chauffeur service that can guide you on your trip and also" +
                                            " long trip packages to support your travel needs."}/>
                        <ServicesGroup/>
                    </SectionWrapper>
                </div>
                <SectionWrapper>
                    <SectionHeading subTitle={"Avantages"} title={"Why Choose Us ?"}
                                    description={"We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get"}/>
                    <AdvantagesGroup/>
                </SectionWrapper>
                <NewsLetterSection/>
            </main>
            <Footer/>
        </>
    )
}
