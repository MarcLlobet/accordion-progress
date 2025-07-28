import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { StateProvider } from "../state";
import { act, type ReactNode } from "react";
import { useColorMode } from "./useColorMode";
import type { State } from "../types";

const Wrapper =
  (state: Partial<State>) =>
  ({ children }: { children: ReactNode }) => (
    <StateProvider state={state as State}>{children}</StateProvider>
  );

describe("useColorMode", () => {
  test(`returns colorMode props`, () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: Wrapper({
        colorMode: "light",
      } as Partial<State>),
    });

    expect(result.current).toEqual({
      colorMode: expect.toBeOneOf(["light", "dark"]),
      isColorModeLight: expect.any(Boolean),
      toggleColorMode: expect.any(Function),
    });
  });

  test(`returns current colorMode`, () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: Wrapper({
        colorMode: "light",
      } as Partial<State>),
    });

    expect(result.current.colorMode).toEqual("light");
  });

  test(`toggles colorMode`, () => {
    const { result } = renderHook(() => useColorMode(), {
      wrapper: Wrapper({
        colorMode: "light",
      } as Partial<State>),
    });

    act(() => {
      result.current.toggleColorMode();
    });

    expect(result.current.colorMode).toEqual("dark");
  });
});
