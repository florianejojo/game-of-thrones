import { styled } from "styled-components";
import { useFetchAllBooks } from "@/hooks/useFetchAllBooks.hook";
import Header from "@/components/common/Header.component";

interface Book {
    name: string;
}

const BooksPage = () => {
    const { books } = useFetchAllBooks();
    return (
        <>
            <Header title={"BOOKS"} />

            {books.map((book: Book, index) => {
                return <StyledBook key={index}>{book.name}</StyledBook>;
            })}
        </>
    );
};

export default BooksPage;

const StyledBook = styled.li`
    margin: 20px 0;
    border: solid lightGrey 1px;
    border-radius: 5px;
    list-style: none;
    padding: 20px;
`;
