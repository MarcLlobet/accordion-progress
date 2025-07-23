import { useMemo } from "react";
import { useAppState } from "../../hooks/useAppState";
import { Header } from "../../components/header";
import { ProgressBar } from "../../components/progressBar";
import { Text } from "../../components/text";

type GetPercentage = {
  taskCheckedById: Record<string, boolean>;
  taskValueById: Record<string, number>;
  totalTasksValue: number;
};

const getPercentage = ({
  taskCheckedById,
  taskValueById,
  totalTasksValue,
}: GetPercentage): number => {
  const valueCheckedTasks = Object.entries(taskCheckedById).reduce(
    (prev, [taskId, checkedTask]) =>
      prev + (checkedTask ? taskValueById[taskId] : 0),
    0,
  );

  const fullNumber = (valueCheckedTasks * 100) / totalTasksValue;
  return Math.round(fullNumber);
};

export const Heading = () => {
  const { taskCheckedById, taskValueById, totalTasksValue } = useAppState();

  const percentage = useMemo(
    () =>
      getPercentage({
        taskCheckedById,
        taskValueById,
        totalTasksValue,
      }),
    [totalTasksValue, taskValueById, taskCheckedById],
  );

  return (
    <Header>
      <Text size="big" as="h4">
        Accordion
      </Text>
      <ProgressBar percentage={percentage} />
    </Header>
  );
};
