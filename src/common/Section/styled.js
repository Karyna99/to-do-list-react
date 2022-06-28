import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    margin: 20px;
    padding: 10px;
`;

export const SectionContainer = styled.div`
    ${(props) => props.first && css`
        display: flex;
        flex-direction: row;
    `}


    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-direction: column;
    }
`;