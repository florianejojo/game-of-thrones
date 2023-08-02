import "@testing-library/jest-dom";

import React from "react";
import { render } from "@testing-library/react";
import Home from "./index";

describe("Home Component", () => {
    it("renders title correctly", () => {
        const { getByText } = render(<Home />);

        const title = getByText("Game Of Thrones");
        expect(title).toBeInTheDocument();
    });

    it("renders buttons correctly", () => {
        const { getByText } = render(<Home />);

        const charactersButton = getByText("Voir les personnages");
        const booksButton = getByText("Voir les livres");

        expect(charactersButton).toBeInTheDocument();
        expect(booksButton).toBeInTheDocument();
    });
});
