import type { Group, RawGroup } from "../types";
import { fetchData } from "./fetchData";

export const getParsedGroups = (data: RawGroup[]): Group[] =>
  data.map((group, groupIndex) => {
    const groupId = `${groupIndex}_${group.name}`.replaceAll(" ", "-");
    return {
      ...group,
      id: groupId,
      tasks: group.tasks.map((task, taskIndex) => ({
        ...task,
        groupId,
        id: `${groupId}__${taskIndex}_${task.description}`.replaceAll(" ", "-"),
      })),
    };
  });

export const fetchGroups = async () => {
  const groupsData: RawGroup[] = await fetchData(
    "/accordion-progress/progress.json",
  );
  const parsedData = getParsedGroups(groupsData);
  return parsedData;
};
