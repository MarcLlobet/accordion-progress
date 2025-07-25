import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { DisclosureWidget } from ".";
import { StateProvider } from "../../state";
import { mockData } from "../../../test/mock";
import type { Group, State } from "../../types";
import { getTaskDataFromGroup } from "../../hooks/useInitialData";

const [ongoingMockGroup, completedMockGroup] = mockData;
const mockTaskData = getTaskDataFromGroup(mockData) as State;

type RenderComponentProps =
  | undefined
  | {
      group?: Group;
      state?: State;
      onDisclose?: (id: string) => void;
    };

const renderComponent = (props?: RenderComponentProps) => {
  const {
    group = ongoingMockGroup,
    state = mockTaskData,
    onDisclose = () => {},
  } = props ?? {};
  return render(
    <StateProvider state={state}>
      <DisclosureWidget group={group} onDisclose={onDisclose} />
    </StateProvider>,
  );
};

test("renders group name", () => {
  renderComponent();
  expect(screen.getByText("Mock Group 1")).toBeVisible();
});

describe("ongoing group", () => {
  test("renders ongoing icon", async () => {
    renderComponent({ group: ongoingMockGroup });

    expect(screen.getByAltText("ongoing group icon")).toBeVisible();
  });
});

describe("completed group", () => {
  test("renders completed icon", async () => {
    renderComponent({ group: completedMockGroup });

    expect(screen.getByAltText("done group icon")).toBeVisible();
  });
});

test("renders view toggle as closed", () => {
  const newState: State = {
    ...mockTaskData,
    disclosedGroup: null,
  };

  renderComponent({ state: newState, group: completedMockGroup });

  expect(screen.getByText("Hide")).toBeVisible();
});

test("renders view toggle as disclosed", () => {
  const { id: completedMockGroupId } = completedMockGroup;

  const newState: State = {
    ...mockTaskData,
    disclosedGroup: completedMockGroupId,
  };

  renderComponent({ state: newState, group: completedMockGroup });

  expect(screen.getByText("Show")).toBeVisible();
});

test("triggers action on click", () => {
  const { id: ongoingMockGroupId, name: ongoingMockGroupName } =
    ongoingMockGroup;

  const newState: State = {
    ...mockTaskData,
    disclosedGroup: ongoingMockGroupId,
  };

  const mockOnDisclose = vi.fn();

  renderComponent({
    state: newState,
    group: ongoingMockGroup,
    onDisclose: mockOnDisclose,
  });

  const groupTitle = screen.getByText(ongoingMockGroupName);

  fireEvent.click(groupTitle);

  expect(mockOnDisclose).toHaveBeenCalledWith(ongoingMockGroupName);
});
