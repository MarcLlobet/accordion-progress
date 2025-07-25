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
