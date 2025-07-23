import styled from "styled-components"
import { useCallback, useMemo, type ReactNode } from "react"
import { VisibilityButton } from "../visibilityButton"
import GroupDone from '../../assets/group-done.svg'
import GroupOngoing from '../../assets/group-ongoing.svg'
import { Text } from "../text"
import { useAppState } from "../../hooks/useAppState"

const GroupTitle = styled.div<{$isCompleted: boolean}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  color: ${({$isCompleted}) => $isCompleted ? '#02BC9C' : 'inherit'};
`

const BoxSummary = styled.div`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`

const BoxChildren = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease-out;
`

const BoxChildrenWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
`

const BoxDetails = styled.div<{$isExpanded: boolean}>`
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;

  & + & {
    border-top-width: 0;
  }

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  & > ${BoxChildren} {
    grid-template-rows: ${({$isExpanded}) => $isExpanded ? 1 : 0}fr;
  }
`

export type DisclosureWidgetProps = {
  id: string
  children?: ReactNode
  summary?: ReactNode
  isDisclosed?: boolean
  onDisclose?: (id: string) => void
}

export const DisclosureWidget = ({
  id = '',
  children = null,
  summary = null,
  isDisclosed = false,
  onDisclose,
}: DisclosureWidgetProps) => {

  const handleClick = useCallback(() => {
    onDisclose?.(id);
  }, [onDisclose, id])

  const { tasksIdByGroupId, taskCheckedById} = useAppState()

  const areAllTasksCompleted = useMemo(() => 
    tasksIdByGroupId[id].every(taskId => taskCheckedById[taskId])
  , [id, tasksIdByGroupId, taskCheckedById])

  return (
    <BoxDetails $isExpanded={isDisclosed}>
      <BoxSummary onClick={handleClick}>
        <GroupTitle $isCompleted={areAllTasksCompleted}>
          <img 
            width={16}
            height={16}
            src={areAllTasksCompleted ? GroupDone : GroupOngoing} 
            alt={`${areAllTasksCompleted ? 'done' : 'ongoing'} group icon`}
          />
          <Text size="medium" as="span">{summary}</Text>
        </GroupTitle>
        <VisibilityButton
          isExpanded={isDisclosed}
        />
      </BoxSummary>
      <BoxChildren>
        <BoxChildrenWrapper>
          {children}
        </BoxChildrenWrapper>
      </BoxChildren>
    </BoxDetails>
  )
}