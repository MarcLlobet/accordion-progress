import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Page, type PageProps } from ".";

const renderComponent = (props?: PageProps) => {
  return render(<Page {...(props ?? {})} />);
};

test("renders main by default", () => {
  renderComponent();

  const element = screen.getByRole("main");
  expect(element).toBeVisible();
});

test("renders main element by default", () => {
  const { container } = renderComponent();

  const paragraph = container.querySelector("main");
  expect(paragraph).toBeVisible();
});

test("renders children", () => {
  renderComponent({ children: "Mock text" });

  const element = screen.getByText("Mock text");
  expect(element).toBeVisible();
});
