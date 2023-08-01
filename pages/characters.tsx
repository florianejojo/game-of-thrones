import React from "react";

import { useCharactersPage } from "@/hooks/useCharactersPage.hook";
import Pagination from "@/components/Characters/Pagination.component";

import { FlexRow } from "@/styles/global.style";
import PaginationButton from "@/styles/characters.style";
import Header from "@/components/common/Header";
import { styled } from "styled-components";
import Link from "next/link";
import { getIdFromUrl } from "@/utils/getIdFromUrl";

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

    const incrementPage = () => {
        if (actualPage >= maxPageNumber) return;
        setActualPage(actualPage + 1);
    };

    const decrementPage = () => {
        if (actualPage <= 1) return;
        setActualPage(actualPage - 1);
    };

    const leftChevron = "<";
    const rightChevron = ">";

    return (
        <>
            <Header title={"CHARACTERS"} />

            <FlexRow>
                <PaginationButton onClick={decrementPage}>
                    {leftChevron}
                </PaginationButton>

                <FlexRow>
                    <Pagination
                        numberOfPages={maxPageNumber}
                        actualPage={actualPage}
                        setActualPage={setActualPage}
                    />
                </FlexRow>

                <PaginationButton onClick={incrementPage}>
                    {rightChevron}
                </PaginationButton>
            </FlexRow>

            {characters.map((character: Character, index: number) => {
                const characterId = getIdFromUrl(character.url);
                return (
                    <SmallCharacterCard key={index}>
                        <Link
                            href={`/characters/${characterId}`}
                            passHref
                            prefetch
                        >
                            {character.name && <a>Name : {character.name}</a>}
                            {character.aliases[0] && (
                                <a>Alias : {character.aliases[0]}</a>
                            )}
                        </Link>
                    </SmallCharacterCard>
                );
            })}
        </>
    );
};

export default CharactersPage;

const SmallCharacterCard = styled.li`
    margin: 20px 0;
    border: solid lightGrey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
    cursor: pointer;
    a {
        color: white;
        text-decoration: none;
    }
`;
