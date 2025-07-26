import { Text } from "../text";
import { ArrowIcon, VisibilityButtonElement, VisibilityIcon } from "./styles";

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
        <ArrowIcon $isExpanded={isExpanded} isExpanded={isExpanded} />
      </VisibilityIcon>
    </VisibilityButtonElement>
  );
};
