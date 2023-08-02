import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CharactersPage from "./characters";

jest.mock("../hooks/useCharactersPage.hook", () => ({
    useCharactersPage: jest.fn(() => ({
        characters: [
            {
                url: "url",
                name: "name",
                aliases: ["aliase"],
            },
            {
                url: "url2",
                name: "name2",
                aliases: ["aliase2"],
            },
        ],
        actualPage: 1,
        setActualPage: jest.fn(),
        maxPageNumber: 3,
    })),
}));

describe("CharactersPage", () => {
    it("renders characters names and aliases correctly", () => {
        const { getByText } = render(<CharactersPage />);

        expect(getByText("Name : name")).toBeInTheDocument();
        expect(getByText("Alias : aliase")).toBeInTheDocument();
        expect(getByText("Name : name2")).toBeInTheDocument();
        expect(getByText("Alias : aliase2")).toBeInTheDocument();
    });

    it("renders pagination buttons correctly", () => {
        const { getByText } = render(<CharactersPage />);

        const previousPageButton = getByText("<");
        const nextPageButton = getByText(">");

        expect(previousPageButton).toBeInTheDocument();
        expect(nextPageButton).toBeInTheDocument();
    });
});
