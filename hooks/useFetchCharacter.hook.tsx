import axios from "axios";
import { useEffect, useState } from "react";

interface Character {
    name: string;
}
export const useFetchCharacter = (id: string) => {
    const [character, setCharacter] = useState({ name: "" });

    useEffect(() => {
        // fetchCharacter();
    }, []);

    return {
        character,
    };
};
