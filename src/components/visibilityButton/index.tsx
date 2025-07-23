import styled from "styled-components";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import { Text } from "../text";

const VisibilityButtonElement = styled.button`
  color: #999;
  display: flex;
  flex-direction: row;
  gap: 8px;
  appearance: none;
  background: transparent;
  border: 0;
  font-size: 16px;
  line-height: 24px;
`;

const VisibilityIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 6px;

  & > img {
    width: 100%;
    height: 100%;
  }
`;

export type VisibilityButtonProps = {
  isExpanded?: boolean;
};

export const VisibilityButton = ({
  isExpanded = false,
}: VisibilityButtonProps) => {
  return (
    <VisibilityButtonElement>
      <Text size="small" as="span">
        {isExpanded ? "Show" : "Hide"}
      </Text>
      <VisibilityIcon>
        <img
          src={isExpanded ? ArrowUp : ArrowDown}
          alt={`arrow ${isExpanded ? "up" : "down"}`}
        />
      </VisibilityIcon>
    </VisibilityButtonElement>
  );
};
