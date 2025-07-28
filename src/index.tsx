import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "./components";
import { AccordionProgress, type AccordionProps } from "./accordionProgress";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page>
      <AccordionProgress />
    </Page>
  </StrictMode>,
);

export { AccordionProgress, type AccordionProps, Page };
