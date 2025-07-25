import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { StateProvider } from "../../state";
import type { ReactNode } from "react";
import { useProgress } from "./useProgress";
import type { State } from "../../types";

const Wrapper =
  (state: Partial<State>) =>
  ({ children }: { children: ReactNode }) => (
    <StateProvider state={state as State}>{children}</StateProvider>
  );

describe("useProgress", () => {
  describe.each([
    {
      testName: "only gets checked tasks",
      taskCheckedById: {
        task1: true,
        task2: false,
      },
      taskValueById: {
        task1: 5,
        task2: 5,
      },
      totalTasksValue: 10,
      expectedPercentage: 50,
    },
    {
      testName: "full percentage works",
      taskCheckedById: {
        task1: true,
        task2: true,
      },
      taskValueById: {
        task1: 5,
        task2: 5,
      },
      totalTasksValue: 10,
      expectedPercentage: 100,
    },
    {
      testName: "different tasks values",
      taskCheckedById: {
        task1: true,
        task2: false,
      },
      taskValueById: {
        task1: 7.5,
        task2: 2.5,
      },
      totalTasksValue: 10,
      expectedPercentage: 75,
    },
  ])(
    "$testName",
    ({
      taskCheckedById,
      taskValueById,
      totalTasksValue,
      expectedPercentage,
    }) => {
      test(`total should be ${totalTasksValue}`, () => {
        const totalValue = Object.values(taskValueById).reduce(
          (prev, value) => prev + value,
          0,
        );

        expect(totalValue).toEqual(totalTasksValue);
      });

      test(`returns ${expectedPercentage}`, () => {
        const { result } = renderHook(() => useProgress(), {
          wrapper: Wrapper({
            taskCheckedById,
            taskValueById,
            totalTasksValue,
          } as Partial<State>),
        });

        expect(result.current).toEqual(expectedPercentage);
      });
    },
  );
});
