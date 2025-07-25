import { useCallback } from "react";
import type { Task } from "../types";
import { useAppState } from "./useAppState";
import { toggleTask } from "../state";
import { useDispatch } from "./useDispatch";

export const useTask = (task: Task) => {
  const { id } = task;
  const { taskCheckedById, disclosedGroup, tasksIdByGroupId } = useAppState();
  const dispatch = useDispatch();

  const handleTaskClick = useCallback(() => {
    dispatch(toggleTask(id));
  }, [id, dispatch]);

  const isGroupDisclosed = disclosedGroup
    ? tasksIdByGroupId[disclosedGroup].includes(id)
    : false;

  return {
    ...task,
    checked: taskCheckedById[id],
    handleTaskClick,
    isGroupDisclosed,
  };
};
