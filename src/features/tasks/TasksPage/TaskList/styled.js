import styled, { css } from "styled-components";

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

    

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        grid-template-columns: auto 1fr auto;
        margin: auto;
}
`;