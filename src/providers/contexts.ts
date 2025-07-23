import { createContext } from "react";
import type { ActionDispatch, AnyAction } from "./actions";
import type { State } from "./state";

export const StateContext = createContext<State | null>(null);

export const DispatchContext = createContext<ActionDispatch<AnyAction> | null>(null);