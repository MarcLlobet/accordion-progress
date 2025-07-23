import { useReducer, type ReactNode } from "react";
import { reducer } from "./reducer";
import { DispatchContext, StateContext } from "./contexts";

export type RawTask = {
  value: number;
  description: string;
  checked: boolean;
};

export type Task = RawTask & {
  id: string;
  groupId: string;
};

export type RawGroup = {
  name: string;
  tasks: RawTask[];
};

export type Group = {
  id: string;
  tasks: Task[];
} & RawGroup;

export type State = {
  disclosedGroup: string | null;
  data: Group[];
  totalTasksValue: number;
  taskValueById: Record<string, number>;
  taskCheckedById: Record<string, boolean>;
  tasksIdByGroupId: Record<string, string[]>;
  groupsData: Group[];
  isLoading: boolean;
};

const initialState: State = {
  disclosedGroup: null,
  data: [],
  totalTasksValue: 0,
  taskValueById: {},
  taskCheckedById: {},
  tasksIdByGroupId: {},
  groupsData: [],
  isLoading: true,
};

type StateProviderProps = {
  children: ReactNode;
  initialData?: Group[];
};

export const StateProvider = ({ children }: StateProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
