import { describe, expect, test } from "vitest";
import { reducer } from "./reducer";
import {
  SET_COLOR_MODE,
  SET_DISCLOSED_GROUP,
  SET_GROUP_DATA,
  SET_INITIAL_DATA,
  TOGGLE_TASK,
} from "./constants";
import type { ColorMode, State } from "../types";
import type { AnyAction } from "./actions";

const baseState: State = {
  disclosedGroup: null,
  totalTasksValue: 0,
  taskValueById: {},
  taskCheckedById: { t1: false },
  tasksIdByGroupId: {},
  groupsData: [],
  isLoading: true,
  colorMode: "light",
};

describe("reducer", () => {
  test("TOGGLE_TASK toggles checked state", () => {
    const action = { type: TOGGLE_TASK, payload: "t1" };
    const next = reducer(baseState, action);
    expect(next.taskCheckedById.t1).toBe(true);
  });

  test("SET_DISCLOSED_GROUP sets disclosedGroup", () => {
    const action = { type: SET_DISCLOSED_GROUP, payload: "g1" };
    const next = reducer(baseState, action);
    expect(next.disclosedGroup).toBe("g1");
  });

  test("SET_GROUP_DATA sets groupsData", () => {
    const action = {
      type: SET_GROUP_DATA,
      payload: [{ id: "g", name: "n", tasks: [] }],
    };
    const next = reducer(baseState, action);
    expect(next.groupsData).toEqual([{ id: "g", name: "n", tasks: [] }]);
  });

  test("SET_INITIAL_DATA merges payload and sets isLoading false", () => {
    const payload = {
      totalTasksValue: 1,
      taskValueById: { t: 1 },
      taskCheckedById: { t: true },
      groupsData: [],
      tasksIdByGroupId: { g: ["t"] },
    };
    const action = { type: SET_INITIAL_DATA, payload };
    const next = reducer(baseState, action);
    expect(next.totalTasksValue).toBe(1);
    expect(next.isLoading).toBe(false);
  });

  test("SET_COLOR_MODE toggles color mode", () => {
    const action = { type: SET_COLOR_MODE, payload: "dark" as ColorMode };
    const next = reducer(baseState, action);
    expect(next.colorMode).toBe("dark");
  });

  test("default returns state", () => {
    const action = { type: "UNKNOWN", payload: null };
    const next = reducer(baseState, action as AnyAction);
    expect(next).toBe(baseState);
  });
});
