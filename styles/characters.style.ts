import { styled } from "styled-components";
interface PaginationButtonProps {
    isactualpage?: string;
    isborderbold?: string;
}
const PaginationButton = styled.button<PaginationButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: solid lightgrey
        ${({ isborderbold }) => (isborderbold === "true" ? "2px" : "1px")};
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
    background-color: ${({ isactualpage }) =>
        isactualpage === "true" ? "brown" : ""};
`;

export default PaginationButton;
