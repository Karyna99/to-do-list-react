import styled from "styled-components";

export const StyledForm = styled.form`
    padding: 20px 10px 10px;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    flex-grow: 1;
`;