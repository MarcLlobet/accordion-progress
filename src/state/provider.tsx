import { useReducer, type ReactNode } from "react";
import { DispatchContext, StateContext } from "./contexts";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import type { State } from "../types";

type StateProviderProps = {
  children: ReactNode;
  state?: State;
};

export const StateProvider = ({
  children,
  state = initialState,
}: StateProviderProps) => {
  const [currentState, dispatch] = useReducer(reducer, state);

  return (
    <StateContext.Provider value={currentState}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
