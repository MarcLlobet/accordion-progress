import { DisclosureWidget } from "../disclosureWidget";
import { TaskList } from "../taskList";
import type { Group } from "../../types";
import { DisclosureWidgets } from "./styles";
import { useAppState } from "../../hooks/useAppState";
import { useCallback } from "react";
import { useDispatch } from "../../hooks/useDispatch";
import { setDisclosedGroup } from "../../state";

type AccordionProps = {
  groups: Group[];
};

export const AccordionBody = ({ groups }: AccordionProps) => {
  const { disclosedGroup } = useAppState();
  const dispatch = useDispatch();

  const handleDisclose = useCallback(
    (id: string) => {
      const newDisclosedGroup = disclosedGroup === id ? null : id;
      dispatch(setDisclosedGroup(newDisclosedGroup));
    },
    [disclosedGroup, dispatch],
  );

  return (
    <DisclosureWidgets aria-labelledby="accordion-title">
      {groups?.map((group) => (
        <DisclosureWidget
          key={group.id}
          group={group}
          onDisclose={handleDisclose}
        >
          <TaskList tasks={group.tasks} />
        </DisclosureWidget>
      ))}
    </DisclosureWidgets>
  );
};
