import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { styled } from "styled-components";

import CharactersPageComponent from "@/components/CharactersPage.component";
import Pagination from "@/components/Pagination.component";
import { useFetchBooks } from "@/hooks/useFetchBook.hook";
import Book from "@/components/Books/Book.component";
import { useFetchAllBooks } from "@/hooks/useFetchAllBooks.hook";
import FullCharacterCard from "@/components/FullCharacterCard.component";
import axios from "axios";
import { GetServerSideProps } from "next";
interface Character {
    id: string;
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
    // il faut l'id du charactere

    return (
        <>
            <Head>
                <title>GOT characters & books</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>

            <Container>
                <FullCharacterCard character={character}></FullCharacterCard>
            </Container>
        </>
    );
};

export default CharacterDetailsPage;

export const Container = styled.div`
    /* border: solid lightGrey 1px; */
    border-radius: 5px;
    list-style: none;
    padding: 20px;
    max-width: 900px;
    margin: 20px auto;
`;

export const getServerSideProps = async ({ resolvedUrl }) => {
    const apiUrl = "https://www.anapioficeandfire.com/api";

    const response = await axios.get(apiUrl + resolvedUrl);

    return {
        props: {
            character: response.data,
        },
    };
};
