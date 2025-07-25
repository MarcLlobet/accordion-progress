import { describe, expect, test, vi } from "vitest";
import {
  getTaskDataFromGroup,
  getTaskPropById,
  getTotalTasksValue,
  useInitialData,
} from "./useInitialData";
import { mockData } from "../../test/mock";
import { StateProvider } from "../state";
import type { State } from "../types";
import { type ReactNode } from "react";
import { renderHook, waitFor } from "@testing-library/react";
import * as actions from "../state/actions";

describe("getTaskPropById", () => {
  test("returns task mapped with prop by id", () => {
    const tasksById = getTaskPropById(mockData, "id");

    expect(tasksById).toEqual({
      "Mock Group 1__Task 1": "Mock Group 1__Task 1",
      "Mock Group 1__Task 2": "Mock Group 1__Task 2",
      "Mock Group 2__Task 1": "Mock Group 2__Task 1",
      "Mock Group 2__Task 2": "Mock Group 2__Task 2",
    });
  });
});

describe("getTotalTasksValue", () => {
  test("returns total value of all tasks", () => {
    const total = getTotalTasksValue(mockData);

    expect(total).toEqual(54);
  });
});

const expectedInitialData = {
  totalTasksValue: 54,
  taskValueById: {
    "Mock Group 1__Task 1": 10,
    "Mock Group 1__Task 2": 15,
    "Mock Group 2__Task 1": 23,
    "Mock Group 2__Task 2": 6,
  },
  taskCheckedById: {
    "Mock Group 1__Task 1": true,
    "Mock Group 1__Task 2": false,
    "Mock Group 2__Task 1": true,
    "Mock Group 2__Task 2": true,
  },
  groupsData: mockData,
  tasksIdByGroupId: {
    "Mock Group 1": ["Mock Group 1__Task 1", "Mock Group 1__Task 2"],
    "Mock Group 2": ["Mock Group 2__Task 1", "Mock Group 2__Task 2"],
  },
};

describe("getTaskDataFromGroup", () => {
  test("returns an initial state", () => {
    const total = getTaskDataFromGroup(mockData);
    expect(total).toEqual(expectedInitialData);
  });
});

describe("useInitialData", () => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <StateProvider state={{} as State}>{children}</StateProvider>
  );

  test("returns state", () => {
    const spySetInitialData = vi.spyOn(actions, "setInitialData");

    const hook = renderHook(() => useInitialData(), { wrapper: Wrapper });
    hook.rerender();

    waitFor(() => {
      expect(spySetInitialData).toHaveBeenCalledWith(expectedInitialData);
    });
  });
});
