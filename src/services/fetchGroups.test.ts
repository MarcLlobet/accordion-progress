import { getParsedGroups, fetchGroups } from "./fetchGroups";
import { describe, expect, it } from "vitest";
import { mockRawData } from "../../test/mock";

const expectedParsedData = [
  {
    id: "0_Mock-Group-1",
    name: "Mock Group 1",
    tasks: [
      {
        checked: true,
        description: "Task 1",
        groupId: "0_Mock-Group-1",
        id: "0_Mock-Group-1__0_Task-1",
        value: 10,
      },
      {
        checked: false,
        description: "Task 2",
        groupId: "0_Mock-Group-1",
        id: "0_Mock-Group-1__1_Task-2",
        value: 15,
      },
    ],
  },
  {
    id: "1_Mock-Group-2",
    name: "Mock Group 2",
    tasks: [
      {
        checked: true,
        description: "Task 1",
        groupId: "1_Mock-Group-2",
        id: "1_Mock-Group-2__0_Task-1",
        value: 23,
      },
      {
        checked: true,
        description: "Task 2",
        groupId: "1_Mock-Group-2",
        id: "1_Mock-Group-2__1_Task-2",
        value: 6,
      },
    ],
  },
];

describe("getParsedGroups", () => {
  it("parses groups and tasks with correct ids", () => {
    const parsedGroups = getParsedGroups(mockRawData);

    const addedProps = parsedGroups.map((group) => ({
      id: group.id,
      tasks: group.tasks.map((task) => ({
        id: task.id,
        groupId: task.groupId,
      })),
    }));

    expect(addedProps).toEqual([
      {
        id: "0_Mock-Group-1",
        tasks: [
          {
            groupId: "0_Mock-Group-1",
            id: "0_Mock-Group-1__0_Task-1",
          },
          {
            groupId: "0_Mock-Group-1",
            id: "0_Mock-Group-1__1_Task-2",
          },
        ],
      },
      {
        id: "1_Mock-Group-2",
        tasks: [
          {
            groupId: "1_Mock-Group-2",
            id: "1_Mock-Group-2__0_Task-1",
          },
          {
            groupId: "1_Mock-Group-2",
            id: "1_Mock-Group-2__1_Task-2",
          },
        ],
      },
    ]);
  });

  it("returns expected parsed data", () => {
    const parsedGroups = getParsedGroups(mockRawData);
    expect(parsedGroups).toEqual(expectedParsedData);
  });
});

describe("fetchGroups", () => {
  it("fetches and parses groups", async () => {
    const result = await fetchGroups();
    expect(result).toEqual(expectedParsedData);
  });
});
