import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { TaskList } from ".";
import type { Task } from "../../types";
import { StateProvider } from "../../state";

const mockTasks = [
  { id: "t1", description: "Tasca 1", checked: false, value: 1 },
  { id: "t2", description: "Tasca 2", checked: true, value: 1 },
] as Task[];

const renderComponent = () => {
  render(
    <StateProvider>
      <TaskList tasks={mockTasks} />
    </StateProvider>,
  );
};

test("renderitza les tasques", () => {
  renderComponent();
  expect(screen.getByText("Tasca 1")).toBeVisible();
  expect(screen.getByText("Tasca 2")).toBeVisible();
});
