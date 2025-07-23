import { DisclosureWidget } from "../disclosureWidget";
import { TaskList } from "../../containers/taskList";
import type { Group } from "../../providers/state";
import { DisclosureWidgets } from "./styles";

type AccordionGroup = Group & {
  isDisclosed: boolean;
};

type AccordionProps = {
  accordionGroups: AccordionGroup[];
  handleDisclose: (id: string) => void;
};

export const Accordion = ({
  accordionGroups,
  handleDisclose,
}: AccordionProps) => {
  return (
    <DisclosureWidgets>
      {accordionGroups?.map(({ id, isDisclosed, name, tasks }) => (
        <DisclosureWidget
          key={id}
          id={id}
          isDisclosed={isDisclosed}
          summary={name}
          onDisclose={handleDisclose}
        >
          <TaskList tasks={tasks} />
        </DisclosureWidget>
      ))}
    </DisclosureWidgets>
  );
};
