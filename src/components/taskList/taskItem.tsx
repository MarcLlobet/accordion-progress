import { useTask } from "../../hooks/useTask";
import type { Task } from "../../types";
import { CheckBox } from "../checkBox";
import { Text } from "../text";
import { TaskItem as TaskItemWrapper } from "./styles";

export const TaskItem = ({ task }: { task: Task }) => {
  const { id, checked, description, handleTaskClick } = useTask(task);

  return (
    <TaskItemWrapper key={id} $checked={checked} onClick={handleTaskClick}>
      <CheckBox checked={checked} />
      <Text size="small" as="span">
        {description}
      </Text>
    </TaskItemWrapper>
  );
};
