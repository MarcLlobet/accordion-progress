import React from "react";
import { CheckBox } from "../checkBox";
import { Text } from "../text";
import { TaskItem, TaskWrapper } from "./styles";
import type { Task } from "../../providers/state";

export type TaskProps = Task & {
  checked: boolean;
};

export const TaskList = ({
  tasks,
  handleTaskClick,
}: {
  tasks: TaskProps[];
  handleTaskClick: (taskId: string) => void;
}) => {
  return (
    <TaskWrapper>
      {tasks.map(({ id, checked, description }) => (
        <TaskItem
          key={id}
          $checked={checked}
          onClick={() => handleTaskClick(id)}
        >
          <CheckBox checked={checked} />
          <Text size="small" as="span">
            {description}
          </Text>
        </TaskItem>
      ))}
    </TaskWrapper>
  );
};
