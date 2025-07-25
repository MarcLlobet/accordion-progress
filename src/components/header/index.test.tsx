import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Header } from ".";

test("renderitza el header", () => {
  render(<Header>Contingut</Header>);
  expect(screen.getByRole("presentation")).toBeVisible();
  expect(screen.getByText("Contingut")).toBeVisible();
});
