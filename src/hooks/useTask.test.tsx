import { describe, expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { StateProvider } from "../state";
import type { State } from "../types";
import { act, type ReactNode } from "react";
import { useTask } from "./useTask";
import { mockData } from "../../test/mock";
import { getTaskDataFromGroup } from "./useInitialData";
import * as actions from "../state/actions";

const intialData = getTaskDataFromGroup(mockData);

const Wrapper = ({ children }: { children: ReactNode }) => (
  <StateProvider state={intialData as State}>{children}</StateProvider>
);

describe("useTask", () => {
  const [firstGroup] = intialData.groupsData;
  const [firstTask] = firstGroup.tasks;

  test("returns state", () => {
    const { result } = renderHook(() => useTask(firstTask), {
      wrapper: Wrapper,
    });
    expect(result.current.id).toEqual("Mock Group 1__Task 1");
  });

  test("calls callback prop", () => {
    const { result } = renderHook(() => useTask(firstTask), {
      wrapper: Wrapper,
    });

    const spyToogleTask = vi.spyOn(actions, "toggleTask");

    act(() => {
      result.current.handleTaskClick();
    });

    expect(spyToogleTask).toHaveBeenCalledWith(firstTask.id);
  });

  test("throws error if has no context", () => {
    expect(() =>
      renderHook(() => useTask(firstTask), { wrapper: undefined }),
    ).toThrowError();
  });
});
