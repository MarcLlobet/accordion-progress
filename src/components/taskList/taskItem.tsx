import { useTask } from "../../hooks/useTask";
import type { Task } from "../../types";
import { CheckBox } from "../checkBox";
import { Text } from "../text";
import { TaskItem as TaskItemWrapper } from "./styles";

export const TaskItem = ({ task }: { task: Task }) => {
  const { id, checked, description, handleTaskClick, isGroupDisclosed } =
    useTask(task);

  return (
    <TaskItemWrapper
      key={id}
      onClick={handleTaskClick}
      tabIndex={isGroupDisclosed ? 0 : -1}
      type="button"
      aria-checked={checked}
    >
      <CheckBox checked={checked} labelId={`${id}-label`} />
      <Text size="small" as="span">
        <span id={`${id}-label`}>{description}</span>
      </Text>
    </TaskItemWrapper>
  );
};
