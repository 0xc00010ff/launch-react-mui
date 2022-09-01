import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./pages";

test("Tests are working", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
