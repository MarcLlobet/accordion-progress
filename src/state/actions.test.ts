import { describe, expect, test } from "vitest";
import {
  setDisclosedGroup,
  setGroupData,
  toggleTask,
  setInitialData,
} from "./actions";
import {
  SET_DISCLOSED_GROUP,
  SET_GROUP_DATA,
  TOGGLE_TASK,
  SET_INITIAL_DATA,
} from "./constants";
import type { Group } from "../types";

describe("actions", () => {
  test("setDisclosedGroup returns correct action", () => {
    expect(setDisclosedGroup("group1")).toEqual({
      type: SET_DISCLOSED_GROUP,
      payload: "group1",
    });
    expect(setDisclosedGroup(null)).toEqual({
      type: SET_DISCLOSED_GROUP,
      payload: null,
    });
  });

  test("setGroupData returns correct action", () => {
    const groups: Group[] = [{ id: "g", name: "n", tasks: [] }];
    expect(setGroupData(groups)).toEqual({
      type: SET_GROUP_DATA,
      payload: groups,
    });
  });

  test("toggleTask returns correct action", () => {
    expect(toggleTask("task1")).toEqual({
      type: TOGGLE_TASK,
      payload: "task1",
    });
  });

  test("setInitialData returns correct action", () => {
    const data = {
      totalTasksValue: 1,
      taskValueById: { t: 1 },
      taskCheckedById: { t: true },
      groupsData: [],
      tasksIdByGroupId: { g: ["t"] },
    };
    expect(setInitialData(data)).toEqual({
      type: SET_INITIAL_DATA,
      payload: data,
    });
  });
});
