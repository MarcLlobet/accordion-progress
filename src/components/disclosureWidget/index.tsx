import { useCallback, useMemo, type ReactNode } from "react";
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
    <BoxDetails
      $isExpanded={isDisclosed}
      role="group"
      aria-expanded={isDisclosed}
    >
      <BoxSummary onClick={handleClick} tabIndex={0}>
        <GroupTitle $isCompleted={areAllTasksCompleted}>
          <GroupIcon
            $isDone={areAllTasksCompleted}
            isDone={areAllTasksCompleted}
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
