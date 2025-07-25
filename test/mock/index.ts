import type { RawGroup } from "../../src/types";

export const mockRawData: RawGroup[] = [
  {
    name: "Mock Group 1",
    tasks: [
      {
        description: "Task 1",
        value: 10,
        checked: true,
      },
      {
        description: "Task 2",
        value: 15,
        checked: false,
      },
    ],
  },
  {
    name: "Mock Group 2",
    tasks: [
      {
        description: "Task 1",
        value: 23,
        checked: true,
      },
      {
        description: "Task 2",
        value: 6,
        checked: true,
      },
    ],
  },
];

export const mockDataFactory = (data: RawGroup[]) =>
  data.map((group) => ({
    ...group,
    id: group.name,
    tasks: group.tasks.map((task) => ({
      ...task,
      id: `${group.name}__${task.description}`,
      groupId: group.name,
    })),
  }));

export const mockData = mockDataFactory(mockRawData);
