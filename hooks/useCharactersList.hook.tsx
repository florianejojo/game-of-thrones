import axios from "axios";
import { useEffect, useState } from "react";

export const useCharactersList = () => {
    const [data, setData] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [maxPageNumber, setMaxPageNumber] = useState(0);

    const findMaxPageNumber = (headersLink: string): number | null => {
        const links = headersLink.split("<");
        const foundedLastPageLink = links.find((link) => link.includes("last"));
        if (!foundedLastPageLink) return null;
        const [lastPageLink] = foundedLastPageLink.split(">");

        const maxPageNumber = extractPageNumber(lastPageLink);
        return maxPageNumber;
    };

    const extractPageNumber = (url: string): number | null => {
        if (!url) return null;
        const urlParams = new URL(url);
        const pageNumber = urlParams.searchParams.get("page");
        return pageNumber ? parseInt(pageNumber, 10) : null;
    };

    useEffect(() => {
        console.log({ actualPage });
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(
                    `https://www.anapioficeandfire.com/api/characters?page=${actualPage}`
                );
                setData(response.data);
                const pageNumber = findMaxPageNumber(response.headers.link);
                setMaxPageNumber(pageNumber || 0);
            } catch (error) {
                console.error({ error });
            }
        };

        fetchCharacters();
    }, [actualPage]);

    return {
        characters: data,
        actualPage,
        setActualPage,
        maxPageNumber,
    };
};
