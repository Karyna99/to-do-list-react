import styled from "styled-components";

const theme = {
    colors: {
        primary: "teal",
        done: "#1A7B1F",
        remove: "#ED293E",
        borderColor: "#dddddd"
    },
    breakpoint: {
        mobile: 767
    }
}

export const StyledForm = styled.form`
    padding: 20px 10px 10px;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
    flex-grow: 1;
`;

export const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 10px;
    border: none;
    margin-left: 20px;
    cursor: pointer;

    &:hover{
        transition: 0.5s;
        transform: scale(110%);
        background-color: #008da0;
    }

    &:active{
        background-color: #04acc2;
    }
`;

export { theme };