import { useMemo } from "react";
import { useAppState } from "./useAppState";

type GetTotalCheckedTasks = {
  taskCheckedById: Record<string, boolean>;
  taskValueById: Record<string, number>;
};

export const getTotalCheckedTasks = ({
  taskCheckedById,
  taskValueById,
}: GetTotalCheckedTasks) =>
  Object.entries(taskCheckedById)
    .filter(([, checkedTask]) => checkedTask)
    .reduce((prev, [taskId]) => prev + taskValueById[taskId], 0);

const getPercentage = (part: number, total: number) =>
  total ? (part * 100) / total : 0;

type GetProgress = GetTotalCheckedTasks & {
  totalTasksValue: number;
};

export const getProgress = ({
  taskCheckedById,
  taskValueById,
  totalTasksValue,
}: GetProgress): number => {
  const valueCheckedTasks = getTotalCheckedTasks({
    taskCheckedById,
    taskValueById,
  });

  const percentage = getPercentage(valueCheckedTasks, totalTasksValue);
  const roundedPercentage = Math.round(percentage);
  return roundedPercentage;
};

export const useProgress = () => {
  const { taskCheckedById, taskValueById, totalTasksValue } = useAppState();

  const percentage = useMemo(
    () =>
      getProgress({
        taskCheckedById,
        taskValueById,
        totalTasksValue,
      }),
    [totalTasksValue, taskValueById, taskCheckedById],
  );

  return percentage;
};
