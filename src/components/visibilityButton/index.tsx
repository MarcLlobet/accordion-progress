import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import { Text } from "../text";
import { VisibilityButtonElement, VisibilityIcon } from "./styles";

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
