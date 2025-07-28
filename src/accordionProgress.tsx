import { Accordion } from "./components";
import { useInitialData } from "./hooks/useInitialData";
import { useAppState } from "./hooks/useAppState";
import { StateProvider } from "./state";
import type { RawGroup } from "./types";
import { GlobalStyle } from "./styles";

export type AccordionProps =
  | undefined
  | {
      data?: RawGroup[];
    };
const AccordionProgressComponent = (props: AccordionProps) => {
  useInitialData(props?.data);

  const { groupsData } = useAppState();

  return <Accordion groups={groupsData} />;
};

export const AccordionProgress = (props: AccordionProps) => {
  return (
    <StateProvider>
      <GlobalStyle />
      <AccordionProgressComponent {...props} />
    </StateProvider>
  );
};
