import React from "react";
import { render, screen } from "@testing-library/react";
import Pages from "../pages";

test("Tests are working", () => {
  render(<Pages />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
