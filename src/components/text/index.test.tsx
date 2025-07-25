import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Text } from ".";

test("renderitza el text passat com a children", () => {
  render(<Text>Text de prova</Text>);
  expect(screen.getByText("Text de prova")).toBeVisible();
});

test("renderitza com a heading si as és h1", () => {
  render(<Text as="h1">Títol</Text>);
  expect(screen.getByRole("heading")).toBeVisible();
});
