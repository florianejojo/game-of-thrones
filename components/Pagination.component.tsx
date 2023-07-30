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
                isActualPage={actualPage === 1}
                isBorderBold
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
                            isActualPage={actualPage === pageNumber}
                        >
                            {pageNumber}
                        </PaginationButton>
                    );
                })}
            {/* {actualPage < numberOfPages - 1 && <span>...</span>} */}
            <PaginationButton
                onClick={() => setActualPage(numberOfPages)}
                isActualPage={actualPage === numberOfPages}
                isBorderBold
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
    isActualPage?: boolean;
    isBorderBold?: boolean;
}

export const PaginationButton = styled.div<PaginationButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border: solid lightgrey
        ${({ isBorderBold }) => (isBorderBold ? "2px" : "1px")};
    border-radius: 5px;
    margin: 0 10px;
    cursor: pointer;
    background-color: ${({ isActualPage }) =>
        isActualPage ? "lightgrey" : ""};
    min-width: 20px;
    min-height: 20px;
`;
