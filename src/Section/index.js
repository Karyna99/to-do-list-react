import { StyledSection, Header, SectionContainer } from "../styled";

const Section = ({ title, body, extraContent }) => (
    <StyledSection>
        <SectionContainer first>
            <Header smaller>{title}</Header>
            {extraContent}
        </SectionContainer>
        <SectionContainer>
            {body}
        </SectionContainer>
    </StyledSection>
);

export default Section;