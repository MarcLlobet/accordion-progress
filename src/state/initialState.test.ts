import { describe, expect, test } from "vitest";
import { initialState } from "./initialState";

describe("initialState", () => {
  test("is defined", () => {
    expect(initialState).toBeDefined();
  });

  test("has main properties", () => {
    expect(initialState).toEqual({
      disclosedGroup: expect.toBeOneOf([null, expect.any(String)]),
      totalTasksValue: expect.any(Number),
      taskValueById: expect.any(Object),
      taskCheckedById: expect.any(Object),
      tasksIdByGroupId: expect.any(Object),
      groupsData: expect.any(Array),
      isLoading: expect.any(Boolean),
    });
  });
});
