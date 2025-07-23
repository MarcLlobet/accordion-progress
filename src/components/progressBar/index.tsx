import styled from "styled-components";
import type { ReactNode } from "react";

const ProgressBarComponent = styled.div`
  width: 100%;
  margin: auto;
  border-radius: 24px;
  background-color: #e6fdf9;
  overflow: hidden;
`;

const AccomplishedBar = styled.div`
  width: 100%;
  color: white;
  padding: 2px 6px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: flex-end;
`;

const ProgressDetail = styled.span<{ $percentage: number }>`
  visibility: ${({ $percentage }) =>
    $percentage >= 10 ? "visible" : "hidden"};
`;

const BarWrapper = styled.div<{ $percentage: number }>`
  width: ${({ $percentage }) => $percentage ?? 0}%;
  height: 24px;
  background-color: #02bc9c;
  border-radius: 16px;
  overflow: hidden;
`;

export type ProgressBarProps = {
  children?: ReactNode;
  percentage?: number;
};

export const ProgressBar = ({
  children = null,
  percentage = 0,
}: ProgressBarProps) => {
  return (
    <ProgressBarComponent>
      <BarWrapper $percentage={percentage}>
        <AccomplishedBar>
          <ProgressDetail $percentage={percentage}>
            {`${percentage}%`}
          </ProgressDetail>
        </AccomplishedBar>
      </BarWrapper>
      {children}
    </ProgressBarComponent>
  );
};
