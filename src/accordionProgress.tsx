import { Accordion } from "./components";
import { useInitialData } from "./hooks/useInitialData";
import { useAppState } from "./hooks/useAppState";
import { StateProvider } from "./state";

const AccordionProgressComponent = () => {
  useInitialData();

  const { groupsData } = useAppState();

  return <Accordion groups={groupsData} />;
};

export const AccordionProgress = () => {
  return (
    <StateProvider>
      <AccordionProgressComponent />
    </StateProvider>
  );
};
