import { Header } from "../header";
import { ProgressBar } from "../progressBar";
import { Text } from "../text";
import { useProgress } from "./useProgress";

export const Heading = () => {
  const percentage = useProgress();

  return (
    <Header>
      <Text size="big" as="h4">
        Accordion
      </Text>
      <ProgressBar percentage={percentage} />
    </Header>
  );
};
