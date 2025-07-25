import { describe, expect, test } from "vitest";
import * as constants from "./constants";

describe("constants", () => {
  test("should have constants", () => {
    const areAllConstants = Object.values(constants).every(
      (constant) => typeof constant === "string",
    );
    expect(areAllConstants).toBeTruthy();
  });
});
