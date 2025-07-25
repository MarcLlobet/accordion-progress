import { render } from "@testing-library/react";
import { expect, test, describe } from "vitest";
import { CheckBox } from ".";

const renderComponent = (checked: boolean) =>
  render(<CheckBox checked={checked} />);

describe("when checked is true", () => {
  test("shows icon", () => {
    const { container } = renderComponent(true);
    const element = container.querySelector("[aria-checked]");

    expect(element?.getAttribute("aria-checked")).toEqual("true");
  });
});

describe("when checked is false", () => {
  test("does not show icon", () => {
    const { container } = renderComponent(false);
    const element = container.querySelector("[aria-checked]");

    expect(element?.getAttribute("aria-checked")).toEqual("false");
  });
});
