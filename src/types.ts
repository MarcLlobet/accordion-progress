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
  totalTasksValue: number;
  taskValueById: Record<string, number>;
  taskCheckedById: Record<string, boolean>;
  tasksIdByGroupId: Record<string, string[]>;
  groupsData: Group[];
  isLoading: boolean;
};
