import React, { useState } from "react";
import { styled } from "styled-components";
import Pagination, { PaginationButton } from "components/Pagination.component";
import { CardRadius } from "@/styles/global.style";
import SmallBookCardComponent from "./Books/SmallBookCard.component";

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

interface FullCharacterCardComponentProps {
    character: Character;
}
interface CharacterData {
    label: string;
    value: string | JSX.Element[];
}

const FullCharacterCard: React.FC<FullCharacterCardComponentProps> = ({
    character,
}) => {
    const singleCaracteristics = [
        { label: "culture", value: character.culture },
        { label: "born", value: character.born },
        { label: "died", value: character.died },
        { label: "father", value: character.father },
        { label: "mother", value: character.mother },
        { label: "spouse", value: character.spouse },
    ];

    const listsCaracteristics = [
        { label: "titles", value: character.titles },
        { label: "aliases", value: character.aliases },
        { label: "allegiances", value: character.allegiances },
        { label: "books", value: character.books },
        { label: "povBooks", value: character.povBooks },
        { label: "tvSeries", value: character.tvSeries },
        { label: "playedBy", value: character.playedBy },
    ];

    return (
        <StyledFullCharacterCard>
            <h2>{character.name ? character.name : "Nom inconnu"}</h2>
            <ul>
                {singleCaracteristics.map(({ label, value }, index) => {
                    console.log("value", value);
                    return (
                        value && (
                            <div key={index}>
                                <p>
                                    {label} : {value}
                                </p>
                            </div>
                        )
                    );
                })}

                {listsCaracteristics.map(({ label, value }, index) => {
                    if (!value || value.length === 0) return null;
                    return (
                        <div key={index}>
                            {<p>{label} : </p>}
                            {value.map((elem, index) => {
                                if (elem.length === 0) return null;

                                if (label === "books")
                                    return (
                                        <SmallBookCardComponent
                                            bookUrl={elem}
                                        />
                                    );
                                return (
                                    <StyledCard key={index}>{elem}</StyledCard>
                                );
                            })}
                        </div>
                    );
                })}
            </ul>
        </StyledFullCharacterCard>
    );
};

export default FullCharacterCard;

const StyledFullCharacterCard = styled.div`
    ${CardRadius}

    ul {
        list-style: none;
    }
`;

const StyledCard = styled.span`
    ${CardRadius}
`;
