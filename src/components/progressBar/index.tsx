import type { ReactNode } from "react";
import {
  AccomplishedBar,
  BarWrapper,
  ProgressBarComponent,
  ProgressDetail,
} from "./styles";

export type ProgressBarProps = {
  children?: ReactNode;
  percentage?: number;
};

export const ProgressBar = ({ percentage = 0 }: ProgressBarProps) => {
  return (
    <ProgressBarComponent
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <BarWrapper $percentage={percentage}>
        <AccomplishedBar>
          <ProgressDetail $percentage={percentage}>
            <span>{percentage}</span>
            <span>%</span>
          </ProgressDetail>
        </AccomplishedBar>
      </BarWrapper>
    </ProgressBarComponent>
  );
};
