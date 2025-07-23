import type { Group, RawGroup } from "../providers/state";

export const fetchData = async (endpoint: string) => {
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const jsonData: RawGroup[] = await response.json();

  return jsonData;
};

export const getParsedData = (data: RawGroup[]): Group[] =>
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
  const groupsData = await fetchData("/progress.json");
  const parsedData = getParsedData(groupsData);
  return parsedData;
};
