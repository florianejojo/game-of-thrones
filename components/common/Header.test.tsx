import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
    it("renders title correctly", () => {
        const title = "title";

        const { getByText } = render(<Header title={title} />);

        const foundTitle = getByText(title);
        expect(foundTitle).toBeInTheDocument();
    });

    it("renders Game Of Thrones title correctly with a link", () => {
        const { container, getByText } = render(<Header title="Test Title" />);
        const title = getByText("Game Of Thrones");
        const link = container.querySelector("a");

        expect(title).toBeInTheDocument();
        expect(link).toBeInTheDocument();
    });
});
