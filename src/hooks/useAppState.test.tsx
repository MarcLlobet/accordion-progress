import { expect, test } from "vitest";
import { renderHook } from "@testing-library/react";
import { useAppState } from "./useAppState";
import { StateContext, initialState } from "../state";
import type { ReactNode } from "react";

const wrapper = ({ children }: { children: ReactNode }) => (
  <StateContext.Provider value={initialState}>{children}</StateContext.Provider>
);

test("returns state", () => {
  const { result } = renderHook(() => useAppState(), { wrapper });
  expect(result.current).toEqual(initialState);
});

test("throws error if has no context", () => {
  expect(() =>
    renderHook(() => useAppState(), { wrapper: undefined }),
  ).toThrowError();
});
