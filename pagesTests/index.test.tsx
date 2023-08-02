import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Home from "../pages";

describe("Home Component", () => {
    it("renders title correctly", () => {
        const { getByText } = render(<Home />);

        const title = getByText("Game Of Thrones");
        expect(title).toBeInTheDocument();
    });

    it("renders buttons correctly", () => {
        const { getByText } = render(<Home />);

        const charactersButton = getByText("See Characters");
        const booksButton = getByText("See Books");

        expect(charactersButton).toBeInTheDocument();
        expect(booksButton).toBeInTheDocument();
    });

    it("displays quiz when 'Take the quiz' button is clicked", () => {
        const { getByText, queryByText } = render(<Home />);
        expect(queryByText("QUIZ")).toBeNull();
        fireEvent.click(getByText("Take the quiz"));
        expect(getByText("QUIZ")).toBeInTheDocument();
    });
});
