import { Page } from "./components/page";
import { Accordion } from "./containers/accordion";
import { Heading } from "./containers/heading";
import { useInitialData } from "./hooks/useInitialData";

export const App = () => {
  useInitialData();
  return (
    <Page>
      <Heading />
      <Accordion />
    </Page>
  );
};
