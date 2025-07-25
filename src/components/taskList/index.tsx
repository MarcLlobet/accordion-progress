import type { Task } from "../../types";
import { TaskWrapper } from "./styles";
import { TaskItem } from "./taskItem";

export type TaskProps = {
  tasks: Task[];
};

export const TaskList = ({ tasks }: TaskProps) => {
  return (
    <TaskWrapper>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.id} />
      ))}
    </TaskWrapper>
  );
};
