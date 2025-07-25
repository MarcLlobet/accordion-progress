import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { StateProvider } from "./provider";
import { useContext } from "react";
import { StateContext, DispatchContext, initialState } from "./index";

const Child = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  return (
    <>
      <span>child</span>
      <span>{state ? "hasState" : "noState"}</span>
      <span>{dispatch ? "hasDispatch" : "noDispatch"}</span>
    </>
  );
};

describe("StateProvider", () => {
  test("renders children and provides state/dispatch", () => {
    render(
      <StateProvider>
        <Child />
      </StateProvider>,
    );
    expect(screen.getByText("child")).toBeVisible();
    expect(screen.getByText("hasState")).toBeVisible();
    expect(screen.getByText("hasDispatch")).toBeVisible();
  });

  test("accepts custom state", () => {
    const customState = { ...initialState, disclosedGroup: "x" };
    render(
      <StateProvider state={customState}>
        <Child />
      </StateProvider>,
    );
    expect(screen.getByText("hasState")).toBeVisible();
  });
});
