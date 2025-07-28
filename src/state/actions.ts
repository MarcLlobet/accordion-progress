import {
  SET_GROUP_DATA,
  SET_DISCLOSED_GROUP,
  SET_INITIAL_DATA,
  TOGGLE_TASK,
  SET_COLOR_MODE,
} from "./constants";
import type { ColorMode, Group } from "../types";

export type Action<type, payload> = {
  type: type;
  payload: payload;
};

export type SetDisclosedGroup = Action<
  typeof SET_DISCLOSED_GROUP,
  string | null
>;
export const setDisclosedGroup = (
  groupId: string | null,
): SetDisclosedGroup => ({
  type: SET_DISCLOSED_GROUP,
  payload: groupId,
});

export type SetGroupData = Action<typeof SET_GROUP_DATA, Group[]>;
export const setGroupData = (data: Group[]): SetGroupData => ({
  type: SET_GROUP_DATA,
  payload: data,
});

export type ToggleTask = Action<typeof TOGGLE_TASK, string>;
export const toggleTask = (taskId: string): ToggleTask => ({
  type: TOGGLE_TASK,
  payload: taskId,
});

export type InitialData = {
  totalTasksValue: number;
  taskValueById: Record<string, number>;
  taskCheckedById: Record<string, boolean>;
  groupsData: Group[];
  tasksIdByGroupId: Record<string, string[]>;
};
export type SetInitialData = Action<typeof SET_INITIAL_DATA, InitialData>;
export const setInitialData = (data: InitialData): SetInitialData => ({
  type: SET_INITIAL_DATA,
  payload: data,
});

export type SetColorMode = Action<typeof SET_COLOR_MODE, ColorMode>;
export const setColorMode = (colorMode: ColorMode): SetColorMode => ({
  type: SET_COLOR_MODE,
  payload: colorMode,
});

export type AnyAction =
  | SetDisclosedGroup
  | SetGroupData
  | SetInitialData
  | ToggleTask
  | SetColorMode;

export type ActionType = AnyAction["type"];
export type ActionDispatch<T> = (action: T) => void;
