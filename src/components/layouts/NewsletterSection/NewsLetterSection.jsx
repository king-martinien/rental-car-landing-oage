import {SectionWrapper} from "../../ui/SectionWrapper/SectionWrapper.jsx";
import "./NewsLetterSection.scss";
import {CustomButton} from "../../ui/CustomButton/CustomButton.jsx";

export const NewsLetterSection = () => {
    return (
        <div className={"newsletter"}>
            <SectionWrapper>
                <>
                    <h3 className={"newsletter-title"}>SUBSCRIBE OUR NEWS</h3>
                    <p className={"newsletter-text"}>
                        We can help you provide the latest news whenever and wherever you are via email
                    </p>
                    <div className={"newsletter-form"}>
                        <input type="email" name="email" id="email" placeholder={"example@gmail.com"}/>
                        <CustomButton>Subscribe</CustomButton>
                    </div>
                </>
            </SectionWrapper>
        </div>
    );
}