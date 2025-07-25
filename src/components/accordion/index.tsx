import type { Group } from "../../types";
import { Heading } from "../heading";
import { AccordionBody } from "./accordionBody";
import { AccordionWrapper } from "./styles";

export type Accordion = {
  title?: string;
  groups: Group[];
};

export const Accordion = ({ title, groups }: Accordion) => {
  return (
    <AccordionWrapper>
      <Heading title={title} />
      <AccordionBody groups={groups} />
    </AccordionWrapper>
  );
};
