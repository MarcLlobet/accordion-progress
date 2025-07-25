import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Heading } from ".";
import { StateProvider } from "../../state";

const renderComponent = () => {
  render(
    <StateProvider>
      <Heading />
    </StateProvider>,
  );
};

test("renderitza el títol Accordion", () => {
  renderComponent();
  expect(screen.getByText("Accordion")).toBeVisible();
});
