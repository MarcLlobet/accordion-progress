import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { ProgressBar } from ".";

test("renderitza el percentatge", () => {
  render(<ProgressBar percentage={42} />);
  expect(screen.getByText("42%")).toBeVisible();
});
