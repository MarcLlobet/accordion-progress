import { useEffect } from "react";
import { useDispatch } from "./useDispatch";
import { fetchGroups, getParsedGroups } from "../services";
import { setInitialData, type InitialData } from "../state";
import type { Group, RawGroup, Task } from "../types";

export const getTaskPropById = (groups: Group[], prop: keyof Task) =>
  Object.values(groups).reduce(
    (prevGroup, group) => ({
      ...prevGroup,
      ...group.tasks.reduce(
        (prevTask, task) => ({
          ...prevTask,
          [task.id]: task[prop],
        }),
        {},
      ),
    }),
    {} as Record<string, unknown>,
  );

export const getTotalTasksValue = (groups: Group[]) =>
  Object.values(groups).reduce((prevGroupValue, group) => {
    const tasksValue = group.tasks.reduce(
      (prevTaskValue, task) => prevTaskValue + task.value,
      0,
    );

    return prevGroupValue + tasksValue;
  }, 0);

export const getTaskDataFromGroup = (groupsData: Group[]) => {
  const totalTasksValue = getTotalTasksValue(groupsData);
  const taskValueById = getTaskPropById(groupsData, "value") as Record<
    string,
    number
  >;

  const taskCheckedById = getTaskPropById(groupsData, "checked") as Record<
    string,
    boolean
  >;

  const tasksIdByGroupId = groupsData.reduce(
    (prevGroup, group) => ({
      ...prevGroup,
      [group.id]: group.tasks.map((task) => task.id),
    }),
    {} as Record<string, string[]>,
  );

  const newData = {
    totalTasksValue,
    taskValueById,
    taskCheckedById,
    groupsData,
    tasksIdByGroupId,
  } as InitialData;

  return newData;
};

export const useInitialData = (propGroupData?: RawGroup[]) => {
  const dispatch = useDispatch();

  useEffect(
    function onMount() {
      if (propGroupData) {
        const parsedPropData = getParsedGroups(propGroupData);
        const propData = getTaskDataFromGroup(parsedPropData);
        dispatch(setInitialData(propData));
        return;
      }

      const getData = async () => {
        const fetchedGroupsData = await fetchGroups();
        const fetchedInitialData = getTaskDataFromGroup(fetchedGroupsData);
        return fetchedInitialData;
      };

      getData().then((fetchedData) => {
        dispatch(setInitialData(fetchedData));
      });
    },
    [dispatch, propGroupData],
  );
};
