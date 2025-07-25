import { describe, expect, test } from "vitest";
import { StateContext, DispatchContext } from "./contexts";

describe("contexts", () => {
  test("StateContext is defined", () => {
    expect(StateContext).toBeDefined();
  });

  test("DispatchContext is defined", () => {
    expect(DispatchContext).toBeDefined();
  });
});
