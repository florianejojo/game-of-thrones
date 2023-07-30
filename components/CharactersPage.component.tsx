import React, { useState } from "react";
import { styled } from "styled-components";
import { useCharactersList } from "hooks/useCharactersList.hook";
import Pagination, { PaginationButton } from "components/Pagination.component";
import CharacterCardComponent from "./CharacterCard.component";
import CharacterFromListComponent from "./CharacterFromList.component";

interface Character {
    url: string;
    name: string;
    culture: string;
    born: string;
    died: string;
    titles: string[];
    aliases: string[];
    father: string;
    mother: string;
    spouse: string;
    allegiances: string[];
    books: string[];
    povBooks: string[];
    tvSeries: string[];
    playedBy: string[];
}
interface CharacterFromListComponentProps {
    character: Character;
}

const CharactersPageComponent: React.FC<
    CharacterFromListComponentProps
> = () => {
    const { characters, actualPage, setActualPage, maxPageNumber } =
        useCharactersList();

    return (
        <div>
            <CharactersList>
                {characters.map((character: Character, index: number) => {
                    return (
                        <CharacterFromListComponent
                            key={index}
                            character={character}
                        />
                    );
                })}
            </CharactersList>

            <PaginationContainer>
                <PaginationButton
                    onClick={() => {
                        if (actualPage <= 1) return;
                        setActualPage(actualPage - 1);
                    }}
                >
                    Page précédente
                </PaginationButton>
                <Pagination
                    numberOfPages={maxPageNumber}
                    actualPage={actualPage}
                    setActualPage={setActualPage}
                />
                <PaginationButton
                    onClick={() => {
                        if (actualPage >= maxPageNumber) return;
                        setActualPage(actualPage + 1);
                    }}
                >
                    Page suivante
                </PaginationButton>
            </PaginationContainer>
        </div>
    );
};

export default CharactersPageComponent;

const CharactersList = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* border: solid pink 1px; */
`;

const PaginationContainer = styled.div`
    /* border: solid red 3px; */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
