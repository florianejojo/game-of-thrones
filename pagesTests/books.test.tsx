import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BooksPage from "../pages/books";

jest.mock("../hooks/useFetchAllBooks.hook", () => ({
    useFetchAllBooks: jest.fn(() => ({
        books: [
            {
                name: "name1",
            },
            {
                name: "name2",
            },
        ],
    })),
}));

describe("BooksPage Component", () => {
    it("renders page title correctly", () => {
        const { getByText } = render(<BooksPage />);
        const title = getByText("BOOKS");

        expect(title).toBeInTheDocument();
    });

    it("renders books list", () => {
        const { getByText } = render(<BooksPage />);

        const nameBook1 = getByText("name1");
        const nameBook2 = getByText("name2");

        expect(nameBook1).toBeInTheDocument();
        expect(nameBook2).toBeInTheDocument();
    });
});
