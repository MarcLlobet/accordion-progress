import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Page } from "./components";
import { AccordionProgress } from "./accordionProgress";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Page>
      <AccordionProgress />
    </Page>
  </StrictMode>,
);
