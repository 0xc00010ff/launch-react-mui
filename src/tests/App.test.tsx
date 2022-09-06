import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../app";

// https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
// https://stackoverflow.com/a/65695824/1922780
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

test("The dashboard renders the sidebar", () => {
  render(<App />);
  const linkElement = screen.getByText(/My files/i);
  expect(linkElement).toBeInTheDocument();
});
