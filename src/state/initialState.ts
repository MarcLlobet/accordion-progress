import type { State } from "../types";

export const initialState: State = {
  disclosedGroup: null,
  totalTasksValue: 0,
  taskValueById: {},
  taskCheckedById: {},
  tasksIdByGroupId: {},
  groupsData: [],
  isLoading: true,
};
