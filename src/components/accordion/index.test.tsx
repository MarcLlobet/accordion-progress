import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { fireEvent } from "@testing-library/react";
import { Accordion } from ".";
import { initialState, StateProvider } from "../../state";
import type { Group, State } from "../../types";
import * as actions from "../../state/actions";

const mockData: Group[] = [
  {
    id: "Mock Group 1",
    name: "Mock Group 1",
    tasks: [],
  },
  {
    id: "Mock Group 2",
    name: "Mock Group 2",
    tasks: [],
  },
];

const renderComponent = (state?: Partial<State>) => {
  const newState: State = {
    ...initialState,
    ...state,
  };
  render(
    <StateProvider state={newState}>
      <Accordion title="mock accordion" groups={mockData} />
    </StateProvider>,
  );
};

const spySetDisclosedGroup = vi.spyOn(actions, "setDisclosedGroup");

test("renders title", () => {
  renderComponent();
  expect(screen.getByText("mock accordion")).toBeVisible();
});

test("renders multiple group names", () => {
  renderComponent();
  expect(screen.getByText("Mock Group 1")).toBeVisible();
  expect(screen.getByText("Mock Group 2")).toBeVisible();
});

describe("when group is clicked", () => {
  describe("and is not disclosed yet", () => {
    test("expands group", () => {
      renderComponent();
      const groupName = screen.getByText("Mock Group 1");
      fireEvent.click(groupName);
      expect(spySetDisclosedGroup).toHaveBeenCalledWith("Mock Group 1");
    });
  });

  describe("and is already disclosed", () => {
    test("hides group", () => {
      renderComponent({ disclosedGroup: "Mock Group 1" });
      const groupName = screen.getByText("Mock Group 1");
      fireEvent.click(groupName);
      expect(spySetDisclosedGroup).toHaveBeenLastCalledWith(null);
    });
  });
});
