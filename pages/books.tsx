import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { styled } from "styled-components";

import CharactersPageComponent from "@/components/CharactersPage.component";
import Pagination from "@/components/Characters/Pagination.component";
import { useFetchBooks } from "@/hooks/useFetchBook.hook";
import Book from "@/components/Books/Book.component";
import { useFetchAllBooks } from "@/hooks/useFetchAllBooks.hook";
const BooksPage = () => {
    const { books } = useFetchAllBooks();
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
                <h1>Liste des livres de Game Of Thrones</h1>
                {books.map((book, index) => {
                    return <Book key={index} book={book}></Book>;
                })}
            </Container>
        </>
    );
};

export default BooksPage;

export const Container = styled.div`
    margin: 20px 0;
    border: solid lightGrey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
`;
