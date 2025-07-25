import { useCallback, useMemo, type ReactNode } from "react";
import { VisibilityButton } from "../visibilityButton";
import GroupDone from "../../assets/group-done.svg";
import GroupOngoing from "../../assets/group-ongoing.svg";
import { Text } from "../text";
import { useAppState } from "../../hooks/useAppState";
import type { Group } from "../../types";
import {
  BoxChildren,
  BoxChildrenWrapper,
  BoxDetails,
  BoxSummary,
  GroupTitle,
} from "./styles";

export type DisclosureWidgetProps = {
  group: Group;
  children?: ReactNode;
  onDisclose?: (id: string) => void;
};

export const DisclosureWidget = ({
  group,
  children = null,
  onDisclose,
}: DisclosureWidgetProps) => {
  const { name, id } = group;

  const handleClick = useCallback(() => {
    onDisclose?.(id);
  }, [onDisclose, id]);

  const { disclosedGroup, tasksIdByGroupId, taskCheckedById } = useAppState();

  const areAllTasksCompleted = useMemo(
    () => tasksIdByGroupId[id]?.every((taskId) => taskCheckedById[taskId]),
    [id, tasksIdByGroupId, taskCheckedById],
  );

  const isDisclosed = useMemo(
    () => disclosedGroup === id,
    [disclosedGroup, id],
  );

  return (
    <BoxDetails $isExpanded={isDisclosed}>
      <BoxSummary onClick={handleClick}>
        <GroupTitle $isCompleted={areAllTasksCompleted}>
          <img
            width={16}
            height={16}
            src={areAllTasksCompleted ? GroupDone : GroupOngoing}
            alt={`${areAllTasksCompleted ? "done" : "ongoing"} group icon`}
          />
          <Text size="medium" as="span">
            {name}
          </Text>
        </GroupTitle>
        <VisibilityButton isExpanded={isDisclosed} />
      </BoxSummary>
      <BoxChildren>
        <BoxChildrenWrapper>{children}</BoxChildrenWrapper>
      </BoxChildren>
    </BoxDetails>
  );
};
