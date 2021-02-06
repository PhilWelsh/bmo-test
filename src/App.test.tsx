import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const cityElement = screen.getByText(/city/i);
  expect(cityElement).toBeInTheDocument();
});
