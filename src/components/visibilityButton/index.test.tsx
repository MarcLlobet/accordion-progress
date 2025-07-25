import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { VisibilityButton } from ".";

test("mostra el text Show quan isExpanded és true", () => {
  render(<VisibilityButton isExpanded={true} />);
  expect(screen.getByText("Show")).toBeVisible();
});

test("mostra el text Hide quan isExpanded és false", () => {
  render(<VisibilityButton isExpanded={false} />);
  expect(screen.getByText("Hide")).toBeVisible();
});
