import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { CheckBox } from ".";

const renderComponent = (checked: boolean) => {
  render(<CheckBox checked={checked} />);
};

describe("when checked is true", () => {
  test("shows icon", () => {
    renderComponent(true);
    const img = screen.getByAltText("checked icon");
    expect(img).toBeVisible();
  });
});

describe("when checked is false", () => {
  test("does not show icon", () => {
    renderComponent(false);
    const img = screen.getByAltText("checked icon");
    expect(img).not.toBeVisible();
  });
});
