import axios from "axios";
import { useEffect, useState } from "react";

interface Book {
    name: string;
    author?: string;
    releaseDate?: string;
}

export const useFetchAllBooks = (): { books: Book[] } => {
    const [books, setBooks] = useState([
        { name: "", author: "", releaseDate: "" },
    ]);

    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const response = await axios.get(
                    "https://www.anapioficeandfire.com/api/books"
                );

                setBooks(response.data);
            } catch (error) {
                console.log({ error });
            }
        };

        fetchAllBooks();
    }, []);

    return {
        books,
    };
};
