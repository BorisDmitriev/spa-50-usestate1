/* eslint-disable testing-library/prefer-screen-queries */
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Counter from "../components/Counter";

describe("Counter component", () => {
    it("increments count when button is clicked", () => {
        const { getByText } = render(<Counter />);

        const countElement = getByText(/count:/i);
        const buttonElement = getByText(/increment/i);

        expect(countElement).toHaveTextContent("Count: 0");

        fireEvent.click(buttonElement);

        expect(countElement).toHaveTextContent("Count: 1");
    });
});
