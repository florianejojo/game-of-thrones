import axios from "axios";
import { useEffect, useState } from "react";

interface Book {
    name: string;
}
export const useFetchAllBooks = () => {
    const [books, setBooks] = useState([]);
    // const [cachedData, setCachedData] = useState(new Map());

    // const apiEndpointUrl = "https://www.anapioficeandfire.com/api/books";

    // à l'ouverture de la page focus personnage => on doit fetcher le nombre de livres

    useEffect(() => {
        // const booksInCache = cachedData.get(apiEndpointUrl);
        // if (booksInCache) return setData(booksInCache);

        const fetchAllBooks = async () => {
            try {
                const response = await axios.get(
                    "https://www.anapioficeandfire.com/api/books"
                );
                console.log({ response });
                setBooks(response.data);
                // cachedData.set(apiEndpointUrl, response.data);
            } catch (error) {
                console.log({ error });
            }
        };

        fetchAllBooks();
    }, []);

    return {
        books,
        // actualPage,
        // setActualPage,
        // maxPageNumber,
    };
};
