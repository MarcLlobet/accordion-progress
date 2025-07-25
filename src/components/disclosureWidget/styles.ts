import styled from "styled-components";

export const GroupTitle = styled.span<{ $isCompleted: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  color: ${({ $isCompleted }) => ($isCompleted ? "#02BC9C" : "#333333")};
`;

export const BoxSummary = styled.button`
  padding: 24px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  appearance: none;
  background: transparent;
  border: 0;
  text-align: left;
`;

export const BoxChildren = styled.div`
  display: grid;
  grid-template-rows: 0fr;
  transition:
    grid-template-rows 0.2s ease-out,
    opacity 0.15s ease-out;
`;

export const BoxChildrenWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
`;

export const BoxDetails = styled.div<{ $isExpanded: boolean }>`
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
    grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)}fr;
    opacity: ${({ $isExpanded }) => ($isExpanded ? 1 : 0)};
  }
`;

//visibility: ${({ $isExpanded }) => ($isExpanded ? 'visible' : 'hidden')};
