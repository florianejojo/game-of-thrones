import PaginationButton from "@/styles/characters.style";
import { FlexRow } from "@/styles/global.style";
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
    const pagesDisplayed = [actualPage - 1, actualPage, actualPage + 1];

    return (
        <FlexRow>
            <PaginationButton
                onClick={() => setActualPage(1)}
                isactualpage={actualPage === 1 ? "true" : "flase"}
                isborderbold="true"
            >
                1
            </PaginationButton>
            {pagesDisplayed
                .filter((page) => page > 1 && page < numberOfPages)
                .map((pageNumber, index) => {
                    return (
                        <PaginationButton
                            onClick={() => setActualPage(pageNumber)}
                            key={index}
                            isactualpage={
                                actualPage === pageNumber ? "true" : "false"
                            }
                        >
                            {pageNumber}
                        </PaginationButton>
                    );
                })}
            <PaginationButton
                onClick={() => setActualPage(numberOfPages)}
                isactualpage={actualPage === numberOfPages ? "true" : "flase"}
                isborderbold="true"
            >
                {numberOfPages}
            </PaginationButton>
        </FlexRow>
    );
};

export default Pagination;
