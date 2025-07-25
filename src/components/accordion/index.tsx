import type { Group } from "../../types";
import { Heading } from "../heading";
import { AccordionBody } from "./accordionBody";
import { AccordionWrapper } from "./styles";

export const Accordion = ({ groups }: { groups: Group[] }) => {
  return (
    <AccordionWrapper>
      <Heading />
      <AccordionBody groups={groups} />
    </AccordionWrapper>
  );
};
