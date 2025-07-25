import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { Page } from ".";

test("renderitza el main", () => {
  render(<Page>Contingut</Page>);
  expect(screen.getByRole("main")).toBeVisible();
  expect(screen.getByText("Contingut")).toBeVisible();
});
