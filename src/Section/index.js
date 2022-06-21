import { StyledSection, StyledHeader, SectionContainer } from "../styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <SectionContainer first>
            <StyledHeader smaller>{title}</StyledHeader>
            {extraContent}
        </SectionContainer>
        <SectionContainer>
            {body}
        </SectionContainer>
    </StyledSection>
);

export default Section;