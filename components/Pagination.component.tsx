import React from "react";

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
    return (
        <div>
            actualPage = {actualPage}
            {Array.from({ length: numberOfPages }, (_, index) => (
                <button onClick={() => setActualPage(index)} key={index + 1}>
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;
