import CharactersPageComponent from "@/components/CharactersPage.component";
import { useFetchBook } from "@/hooks/useFetchBook.hook";
import { FC, ReactNode } from "react";
import { styled } from "styled-components";
interface Book {
    name: string;
}
interface BookProps {
    book: Book;
}
const Book = ({ book }) => {
    // const { book } = useFetchBook(
    //     "https://www.anapioficeandfire.com/api/books/2"
    // );
    console.log({ book });

    return <StyledBook>{book.name}</StyledBook>;
};

export default Book;

const StyledBook = styled.li`
    margin: 20px 0;
    border: solid lightGrey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
`;
