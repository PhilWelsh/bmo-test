import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import SearchBar from "./components/SearchBar";

describe("App", () => {
  it("Renders <App /> component correctly", () => {
    render(<App />);
    const cityText = screen.getByText(/city/i)
    const main = screen.getByRole("main")
    expect(cityText).toBeInTheDocument();
    expect(main).toBeInTheDocument()
    
  });
  it("has main section",()=>{
    render (<App/>);
  })
});

// describe("<SearchBar/>", () => {
//   it('renders all inputs', () => {
//     const {getByRole} = render(<SearchBar/>);
//     expect(getByRole(/login/i)).toBeInTheDocument();
//   });})