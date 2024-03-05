import {ContainerWrapper} from "../ContainerWrapper/ContainerWrapper.jsx";

export const SectionWrapper = ({children}) => {
    return (
        <div style={{padding: "70px 0"}}>
            <ContainerWrapper>
                {children}
            </ContainerWrapper>
        </div>
    )
}