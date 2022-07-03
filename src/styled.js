import styled, { css } from "styled-components";

const theme = {
    colors: {
        primary: "teal",
        done: "#1A7B1F",
        remove: "#ED293E",
        borderColor: "#dddddd",
        backgroundColor: "white",
        disabledColor: "#BEBEBE",
    },
    breakpoints: {
        mobile: 767,
    },
};

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 10px;
    border: none;
    margin-left: 20px;
    cursor: pointer;

    @media (max-width: 767px) {
        margin: 10px auto;
        width: 100%;
    }

    &:hover{
        transition: 0.5s;
        transform: scale(110%);
        background-color: #008da0;
    }

    &:active{
        background-color: #04acc2;
    }

    ${(props) => props.task && css`
        border: none;
        padding: 10px;
        margin-bottom: 10px;
        background-color: white;
        color: ${({ theme }) => theme.colors.primary};

        &:hover{
            color: hsl(180, 100%, 30%);
            background-color: white;
            transform: none;
            cursor: pointer;
        }
        &:disabled{
            color: ${({ theme }) => theme.colors.disabledColor};
            cursor: default;
        }
    `}
`;

export const StyledHeader = styled.header`
    margin-left: 20px;
    margin-top: 40px;
    font-size: 30px;
    font-weight: 600;

    ${(props) => props.smaller && css`
        margin: 0 -10px;
        padding: 8px 20px 18px;
        font-size: 20px;
        flex-grow: 1;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    `}
`;



export { theme };