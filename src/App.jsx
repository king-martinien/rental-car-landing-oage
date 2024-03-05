import './App.scss'
import {Footer} from "./components/layouts/Footer/Footer.jsx";
import {NewsLetterSection} from "./components/layouts/NewsletterSection/NewsLetterSection.jsx";
import {SectionWrapper} from "./components/ui/SectionWrapper/SectionWrapper.jsx";
import {SectionHeading} from "./components/ui/SectionHeading/SectionHeading.jsx";

export const App = () => {
    return (
        <>
            <main>
                <SectionWrapper>
                    <SectionHeading subTitle={"Avantages"} title={"Why Choose Us ?"}
                                    description={"We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get"}/>
                </SectionWrapper>
                <NewsLetterSection/>
            </main>
            <Footer/>
        </>
    )
}
