import styled from "styled-components";

export const ProgressBarComponent = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 24px;
  background-color: #e6fdf9;
  overflow: hidden;
`;

export const AccomplishedBar = styled.div`
  width: 100%;
  color: white;
  padding: 2px 16px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
`;

export const ProgressDetail = styled.span<{ $percentage: number }>`
  visibility: ${({ $percentage }) =>
    $percentage >= 10 ? "visible" : "hidden"};
`;

export const BarWrapper = styled.div<{ $percentage: number }>`
  width: ${({ $percentage }) => $percentage ?? 0}%;
  height: 24px;
  background-color: #02bc9c;
  border-radius: 16px;
  overflow: hidden;
  transition: width 0.2s ease-out;
`;
