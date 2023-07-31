import React, { useState } from "react";
import { styled } from "styled-components";
import { useCharactersPage } from "@/hooks/useCharactersPage.hook";
import Pagination, { PaginationButton } from "components/Pagination.component";
import CharacterFromListComponent from "components/CharacterFromList.component";
import { Container } from "./books";

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

const CharactersPage: React.FC = () => {
    const { characters, actualPage, setActualPage, maxPageNumber } =
        useCharactersPage();

    return (
        <Container>
            <h1>Liste des personnages de Game Of Thrones</h1>

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
        </Container>
    );
};

export default CharactersPage;

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

// const Container = styled.div`
//     margin: 20px 0;
//     border: solid lightGrey 1px;
//     border-radius: 5px;
//     list-style: none;
//     padding: 20px;
//     max-width: 900px;
//     margin: 0 auto;
// `;
