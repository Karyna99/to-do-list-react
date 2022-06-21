import styled, { css } from "styled-components";

const theme = {
    colors: {
        primary: "teal",
        done: "#1A7B1F",
        remove: "#ED293E",
        borderColor: "#dddddd",
        backgroundColor: "white"
    }
};

export const StyledForm = styled.form`
    padding: 20px 10px 10px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        flex-direction: column;
    }
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
    `}
`;

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.backgroundColor};
    margin: 20px;
    padding: 10px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #dddddd;

    @media (max-width: 767px) {
    .buttons {
        flex-direction: column;
    }
}
`;

export const StyledHeader = styled.header`
    margin-left: 20px;
    margin-top: 40px;
    font-size: 30px;

    ${(props) => props.smaller && css`
        margin: 0 -10px;
        font-weight: 600;
        padding: 8px 20px 18px;
        font-size: 20px;
        flex-grow: 1;
        border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    `}
`;

export const SectionContainer = styled.div`
    ${(props) => props.first && css`
        display: flex;
        flex-direction: row;
    `}


    @media (max-width: 767px) {
        flex-direction: column;
    }
`;

export const List = styled.ul`
    list-style: none;
    padding-left: 0px;
`;

export const TaskButton = styled.button`
    color: white;
    min-height: 34px;
    min-width: 34px;
    border: none;
    text-decoration: none;

    ${(props) => props.done && css`
        background-color: ${({ theme }) => theme.colors.done};

        &:hover{
            background-color: #25aa2c;
            transition: 0.5s;
            cursor: pointer;
        }

        &:active{
            transform: scale(110%);
            transition: 0.5s;
            cursor: pointer;
        }
    `}

    ${(props) => props.remove && css`
        background-color: ${({ theme }) => theme.colors.remove};

        &:hover{
            background-color: #ff2e43;
            transition: 0.5s;
            cursor: pointer;
        }

        &:active{
            transform: scale(110%);
        transition: 0.5s;
        cursor: pointer;
        }
    `}
`;

export const Text = styled.span`
    ${(props) => props.done && css`
        text-decoration: line-through;
    `}
`;

export const ListItem = styled.li`
    display: grid;
    margin: auto;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    align-items: center;
    word-break: break-word;

    ${(props) => props.hidden && css`
        display: none;
    `}

    

    @media (max-width: 767px) {
        grid-template-columns: auto 1fr auto;
        margin: auto;
}
`;



export { theme };