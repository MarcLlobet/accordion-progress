import { render } from "@testing-library/react";
import { AccordionProgress } from "./accordionProgress";
import { expect, test } from "vitest";

const renderComponent = () => render(<AccordionProgress />);

test("html validation", () => {
  const { container } = renderComponent();
  const htmlString = container.innerHTML;

  expect(htmlString).toHTMLValidate();
});
