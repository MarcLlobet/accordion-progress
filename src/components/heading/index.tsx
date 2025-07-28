import { Header } from "../header";
import { ProgressBar } from "../progressBar";
import { Text } from "../text";
import { useProgress } from "../../hooks/useProgress";
import { useColorMode } from "../../hooks/useColorMode";
import styled from "styled-components";

const ClickableSpan = styled(Text).attrs<{ onClick: () => void }>({
  size: "medium",
  as: "span",
})`
  cursor: pointer;
`;

export type HeadingProps = { title?: string };

export const Heading = (props: HeadingProps) => {
  const { title = "Accordion" } = props ?? {};
  const percentage = useProgress();
  const { isColorModeLight, toggleColorMode } = useColorMode();

  return (
    <Header>
      <Text size="big" as="h1">
        <span id="accordion-title">{title}</span>
        <ClickableSpan onClick={toggleColorMode}>
          {isColorModeLight ? "☀" : "☾"}
        </ClickableSpan>
      </Text>
      <ProgressBar percentage={percentage} />
    </Header>
  );
};
