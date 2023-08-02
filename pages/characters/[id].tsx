import axios from "axios";
import Header from "@/components/common/Header.component";
import SmallBookCardComponent from "@/components/Books/SmallBookCard.component";
import CharacteristicsLayout from "@/components/Characters/CharacteristicsLayout.component";
import { styled } from "styled-components";

interface Character {
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

interface CharacterDetailsPageProps {
    character: Character;
}

const CharacterDetailsPage = ({ character }: CharacterDetailsPageProps) => {
    const singleCaracteristics = [
        { label: "culture", value: character.culture },
        { label: "born", value: character.born },
        { label: "died", value: character.died },
        { label: "father", value: character.father },
        { label: "mother", value: character.mother },
        // { label: "spouse", value: character.spouse },
    ];

    const listsCaracteristics = [
        { label: "titles", value: character.titles },
        { label: "aliases", value: character.aliases },
        // { label: "allegiances", value: character.allegiances },
        { label: "povBooks", value: character.povBooks },
        // { label: "tvSeries", value: character.tvSeries },
        { label: "playedBy", value: character.playedBy },
    ];

    const title = character.name ? character.name : character.aliases[0];

    return (
        <>
            <Header title={title} />
            <StyledCharacterDetailsCard>
                {singleCaracteristics.map(({ label, value }, index) => {
                    console.log({ value });

                    return (
                        value && (
                            <CharacteristicsLayout
                                key={index}
                                label={label}
                                value={value}
                            />
                        )
                    );
                })}

                {listsCaracteristics.map(({ label, value }, index) => {
                    return (
                        value.length > 0 && (
                            <CharacteristicsLayout
                                label={label}
                                value={value.map(
                                    (caracteristicVersion, index) => {
                                        return (
                                            caracteristicVersion && (
                                                <p key={index}>
                                                    "{caracteristicVersion}"
                                                </p>
                                            )
                                        );
                                    }
                                )}
                                key={index}
                            ></CharacteristicsLayout>
                        )
                    );
                })}

                <BooksList>
                    <h3>BOOKS: </h3>
                    {character.books.map((book, index) => {
                        return (
                            <SmallBookCardComponent
                                key={index}
                                bookUrl={book}
                            />
                        );
                    })}
                </BooksList>
            </StyledCharacterDetailsCard>
        </>
    );
};

export default CharacterDetailsPage;

export const getServerSideProps = async ({
    resolvedUrl,
}: {
    resolvedUrl: string;
}) => {
    const apiUrl = "https://www.anapioficeandfire.com/api";
    const response = await axios.get(apiUrl + resolvedUrl);

    return {
        props: {
            character: response.data,
        },
    };
};

const StyledCharacterDetailsCard = styled.div`
    max-width: 400px;
    margin: 30px auto;
    border: solid 1px;
    border-radius: 5px;
    padding: 20px;
`;

const BooksList = styled.div`
    h3 {
        color: white;
    }
    color: brown;
    margin-top: 70px;
`;
