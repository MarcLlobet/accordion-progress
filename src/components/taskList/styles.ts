import styled from "styled-components";

export const TaskItem = styled.div<{ $checked: boolean }>`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 16px 0;
`;

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 24px;
  padding-left: 32px;
`;
