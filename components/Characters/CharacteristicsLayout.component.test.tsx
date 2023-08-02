import React from "react";
import { render } from "@testing-library/react";
import CharacteristicsLayout from "./CharacteristicsLayout.component";
import "@testing-library/jest-dom/extend-expect";

describe("CharacteristicsLayout Component", () => {
    it("renders label and value correctly", () => {
        const { getByText, debug } = render(
            <CharacteristicsLayout label="label">value</CharacteristicsLayout>
        );

        debug();

        const label = getByText("label");
        const value = getByText("value");

        expect(label).toBeDefined();
        expect(value).toBeDefined();
    });
});
