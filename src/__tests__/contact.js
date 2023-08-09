import { render, screen } from "@testing-library/react";

import Contact from "../components/Contact";

import "@testing-library/jest-dom";

describe("Contact Us Page test cases", () => {
  it("should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("should load button inside contact us page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("should find Submit text inside contact us page", () => {
    render(<Contact />);

    const submit = screen.getByText("Submit");

    // Assertion
    expect(submit).toBeInTheDocument();
  });
});
