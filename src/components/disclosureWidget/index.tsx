import React, { useCallback, useMemo, type ReactNode } from "react";
import { VisibilityButton } from "../visibilityButton";
import { Text } from "../text";
import { useAppState } from "../../hooks/useAppState";
import type { Group } from "../../types";
import {
  BoxChildren,
  BoxChildrenWrapper,
  BoxDetails,
  BoxSummary,
  GroupIcon,
  GroupTitle as GroupTitleStyle,
} from "./styles";

export type DisclosureWidgetProps = {
  group: Group;
  children?: ReactNode;
  onDisclose?: (id: string) => void;
};

const GroupTitle = React.memo(
  ({ groupName, groupId }: { groupName: string; groupId: string }) => {
    const { tasksIdByGroupId, taskCheckedById } = useAppState();
    const areAllTasksCompleted = useMemo(
      () =>
        tasksIdByGroupId[groupId]?.every((taskId) => taskCheckedById[taskId]),
      [groupId, tasksIdByGroupId, taskCheckedById],
    );

    const isCompleted = useMemo(
      () => areAllTasksCompleted,
      [areAllTasksCompleted],
    );

    return (
      <GroupTitleStyle $isCompleted={isCompleted}>
        <GroupIcon $isDone={isCompleted} isDone={isCompleted} />
        <Text size="medium" as="span">
          {groupName}
        </Text>
      </GroupTitleStyle>
    );
  },
);

export const DisclosureWidget = ({
  group,
  children = null,
  onDisclose,
}: DisclosureWidgetProps) => {
  const { name, id } = group;

  const handleClick = useCallback(() => {
    onDisclose?.(id);
  }, [onDisclose, id]);

  const { disclosedGroup } = useAppState();

  const isDisclosed = useMemo(
    () => disclosedGroup === id,
    [disclosedGroup, id],
  );

  return (
    <BoxDetails role="group" aria-expanded={isDisclosed}>
      <BoxSummary onClick={handleClick} tabIndex={0}>
        <GroupTitle groupName={name} groupId={id} />
        <VisibilityButton isExpanded={isDisclosed} />
      </BoxSummary>
      <BoxChildren $isExpanded={isDisclosed}>
        <BoxChildrenWrapper>{children}</BoxChildrenWrapper>
      </BoxChildren>
    </BoxDetails>
  );
};
