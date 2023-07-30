import React from "react";
import { styled } from "styled-components";
import { useCharactersList } from "hooks/useCharactersList.hook";
import Pagination from "components/Pagination.component";
import SliderComponent from "./Slider.component";

const StyledCharactersList = styled.div`
    border: solid pink 2px;
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
`;

const Character = styled.li`
    border: solid blue 2px;
    height: 40px;
`;

interface Character {
    aliases: string[];
}

const CharactersListComponent: React.FC = () => {
    const { characters, actualPage, setActualPage, maxPageNumber } =
        useCharactersList();
    console.log({ maxPageNumber });

    return (
        <StyledCharactersList>
            {characters.map((character: Character, index: number) => {
                return (
                    <Character key={index}>{character.aliases[0]}</Character>
                );
            })}
            <button
                onClick={() => {
                    if (actualPage <= 1) return;
                    setActualPage(actualPage - 1);
                }}
            >
                Previous page
            </button>
            <button
                onClick={() => {
                    if (actualPage >= maxPageNumber) return;
                    setActualPage(actualPage + 1);
                }}
            >
                NextPage
            </button>
            maxPageNumber= {maxPageNumber}
            <Pagination
                numberOfPages={12}
                actualPage={actualPage}
                setActualPage={setActualPage}
            ></Pagination>
        </StyledCharactersList>
    );
};

export default CharactersListComponent;
