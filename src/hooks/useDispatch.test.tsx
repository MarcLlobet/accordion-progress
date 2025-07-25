import { expect, test, describe } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { DispatchContext, type AnyAction } from "../state";
import {
  act,
  createContext,
  useContext,
  useReducer,
  type ReactNode,
} from "react";
import { useDispatch } from "./useDispatch";

const StateContext = createContext("oldState");

const Wrapper = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(() => "newState", "initialState");

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

describe("useDispatch", () => {
  test("returns state", () => {
    const { result: dispatchResult } = renderHook(() => useDispatch(), {
      wrapper: Wrapper,
    });

    const { result: stateResult } = renderHook(() => useContext(StateContext), {
      wrapper: Wrapper,
    });

    act(() => {
      dispatchResult.current({} as AnyAction);
    });

    waitFor(() => {
      expect(stateResult.current).toEqual("newState");
    });
  });

  test("throws error if has no context", () => {
    expect(() =>
      renderHook(() => useDispatch(), { wrapper: undefined }),
    ).toThrowError();
  });
});
