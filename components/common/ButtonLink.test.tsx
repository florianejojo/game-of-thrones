import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ButtonLinkComponent from "./ButtonLink.component";

describe("ButtonLink", () => {
    it("renders correctly with the provided label", () => {
        const href = "/characters";
        const label = "Voir les personnages";

        const { getByText } = render(
            <ButtonLinkComponent href={href} label={label} />
        );

        const buttonLink = getByText(label);
        expect(buttonLink).toBeInTheDocument();
        expect(buttonLink.tagName).toBe("A");
        expect(buttonLink.getAttribute("href")).toBe(href);
    });
});
