import axios from "axios";
import { useEffect, useState } from "react";

export const useCharactersPage = () => {
    const [data, setData] = useState([]);
    const [cachedData, setCachedData] = useState(new Map());

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

    const pageUrlToFetch = `https://www.anapioficeandfire.com/api/characters?page=${actualPage}`;

    useEffect(() => {
        const pageInCache = cachedData.get(pageUrlToFetch);
        if (pageInCache) return setData(pageInCache);

        const fetchCharacters = async () => {
            try {
                const response = await axios.get(pageUrlToFetch);

                const newCachedData = cachedData;
                newCachedData.set(response.config.url, response.data);

                setCachedData(newCachedData);
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
