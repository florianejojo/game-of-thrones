import React, { useState } from "react";
import { styled } from "styled-components";
import CharacterCardComponent from "./CharacterCard.component";

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

const CharacterFromListComponent: React.FC<CharacterFromListComponentProps> = ({
    character,
}) => {
    const [isCardDetailedDisplayed, setIsCardDetailedDisplayed] =
        useState(false);

    const handleMouseEnter = () => {
        setIsCardDetailedDisplayed(true);
    };

    const handleMouseLeave = () => {
        setIsCardDetailedDisplayed(false);
    };

    return (
        <StyledCharacter
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div>
                {character.name && <p>Name : {character.name}</p>}
                {character.aliases[0] && <p>Alias : {character.aliases[0]}</p>}
            </div>
            {isCardDetailedDisplayed && (
                <CharacterCardComponent
                    character={character}
                ></CharacterCardComponent>
            )}
        </StyledCharacter>
    );
};

export default CharacterFromListComponent;

const StyledCharacter = styled.li`
    /* border: solid blue 2px; */
    /* height: 40px; */
    margin: 20px 0;
    border: solid lightGrey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;

    /* cursor: pointer; */
`;
