import { Header } from "../header";
import { ProgressBar } from "../progressBar";
import { Text } from "../text";
import { useProgress } from "./useProgress";

export type HeadingProps = { title?: string };

export const Heading = (props: HeadingProps) => {
  const { title = "Accordion" } = props ?? {};
  const percentage = useProgress();

  return (
    <Header>
      <Text size="big" as="h1">
        <span id="accordion-title">{title}</span>
      </Text>
      <ProgressBar percentage={percentage} />
    </Header>
  );
};
