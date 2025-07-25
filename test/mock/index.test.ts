import { mockData, mockRawData, mockDataFactory } from ".";
import { test, expect } from "vitest";

test("mockDataFactory works as expected", () => {
  const expectedData = mockDataFactory(mockRawData);
  expect(mockData).toEqual(expectedData);
});

test("returns mockData", () => {
  expect(mockData).toEqual([
    {
      id: "Mock Group 1",
      name: "Mock Group 1",
      tasks: [
        {
          id: "Mock Group 1__Task 1",
          groupId: "Mock Group 1",
          description: "Task 1",
          value: 10,
          checked: true,
        },
        {
          id: "Mock Group 1__Task 2",
          groupId: "Mock Group 1",
          description: "Task 2",
          value: 15,
          checked: false,
        },
      ],
    },
    {
      id: "Mock Group 2",
      name: "Mock Group 2",
      tasks: [
        {
          id: "Mock Group 2__Task 3",
          groupId: "Mock Group 2",
          description: "Task 3",
          value: 23,
          checked: true,
        },
        {
          id: "Mock Group 2__Task 4",
          groupId: "Mock Group 2",
          description: "Task 4",
          value: 6,
          checked: true,
        },
      ],
    },
  ]);
});
