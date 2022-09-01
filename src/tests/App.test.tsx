import React from "react";
import { render, screen } from "@testing-library/react";
import Pages from "../pages";

test("The dashboard renders the sidebar", () => {
  render(<Pages />);
  const linkElement = screen.getByText(/My files/i);
  expect(linkElement).toBeInTheDocument();
});
