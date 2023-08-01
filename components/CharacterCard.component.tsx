import React, { useState } from "react";
import { styled } from "styled-components";
import { useCharactersList } from "hooks/useCharactersList.hook";
import Pagination, { PaginationButton } from "components/Pagination.component";

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

const CharacterCardComponent: React.FC<CharacterFromListComponentProps> = ({
    character,
}) => {
    const renderArray = (elements: string[]): JSX.Element[] =>
        elements.map((elem, index) => <p key={index}>{elem}</p>);

    const characterData = [
        { label: "culture", value: character.culture },
        { label: "born", value: character.born },
        { label: "died", value: character.died },
        { label: "titles", value: renderArray(character.titles) },
        { label: "aliases", value: renderArray(character.aliases) },
        { label: "father", value: character.father },
        { label: "mother", value: character.mother },
        { label: "spouse", value: character.spouse },
        { label: "allegiances", value: renderArray(character.allegiances) },
        { label: "books", value: renderArray(character.books) },
        { label: "povBooks", value: renderArray(character.povBooks) },
        { label: "tvSeries", value: renderArray(character.tvSeries) },
        { label: "playedBy", value: renderArray(character.playedBy) },
    ];

    return (
        <StyledCharacterCard>
            <h2>{character.name ? character.name : "Nom inconnu"}</h2>
            <ul>
                {characterData.map(({ label, value }, index) => {
                    return (
                        <li key={index}>
                            {label}: {value}
                        </li>
                    );
                })}
            </ul>
        </StyledCharacterCard>
    );
};

export default CharacterCardComponent;

const StyledCharacterCard = styled.li`
    margin: 20px 0;
    border: solid red 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 70%;
    transform: translate(-50%, -50%);
    background-color: lightgrey;
    z-index: 2;

    ul {
        list-style: none;
    }
`;
