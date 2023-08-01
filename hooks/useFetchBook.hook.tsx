import axios from "axios";
import { useEffect, useState } from "react";

interface Book {
    name: string;
}
export const useFetchBook = (url: string) => {
    const [book, setBook] = useState({ name: "" });

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await axios.get(url);
                console.log({ response });
                setBook(response.data);
            } catch (error) {
                console.log({ error });
            }
        };

        fetchBook();
    }, []);

    return {
        book,
    };
};
