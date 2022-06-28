import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #dddddd;

    @media (max-width: 767px) {
    .buttons {
        flex-direction: column;
    }
}
`;