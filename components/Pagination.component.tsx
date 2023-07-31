import React from "react";
import { styled } from "styled-components";

interface PaginationProps {
    numberOfPages: number;
    actualPage: number;
    setActualPage: Function;
}

const Pagination: React.FC<PaginationProps> = ({
    numberOfPages,
    actualPage,
    setActualPage,
}) => {
    const pagesDisplayed = [
        actualPage - 2,
        actualPage - 1,
        actualPage,
        actualPage + 1,
        actualPage + 2,
    ];

    return (
        <StyledPagination>
            <PaginationButton
                onClick={() => setActualPage(1)}
                isactualpage={actualPage === 1 ? "true" : "flase"}
                isborderbold="true"
            >
                1
            </PaginationButton>
            {/* {actualPage > 2 && <span>...</span>} */}
            {pagesDisplayed
                .filter((page) => page > 1 && page < numberOfPages)
                .map((pageNumber, index) => {
                    return (
                        <PaginationButton
                            onClick={() => {
                                setActualPage(pageNumber);
                            }}
                            key={index}
                            isactualpage={
                                actualPage === pageNumber ? "true" : "false"
                            }
                        >
                            {pageNumber}
                        </PaginationButton>
                    );
                })}
            {/* {actualPage < numberOfPages - 1 && <span>...</span>} */}
            <PaginationButton
                onClick={() => setActualPage(numberOfPages)}
                isactualpage={actualPage === numberOfPages ? "true" : "flase"}
                isborderbold="true"
            >
                {numberOfPages}
            </PaginationButton>
        </StyledPagination>
    );
};

export default Pagination;

const StyledPagination = styled.div`
    display: flex;
    flex-direction: row;
`;

interface PaginationButtonProps {
    isactualpage?: string;
    isborderbold?: string;
}

export const PaginationButton = styled.button<PaginationButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: solid lightgrey
        ${({ isborderbold }) => (isborderbold === "true" ? "2px" : "1px")};
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    background-color: ${({ isactualpage }) =>
        isactualpage === "true" ? "lightgrey" : ""};
    min-width: 20px;
    min-height: 20px;
`;
