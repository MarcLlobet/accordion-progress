import { useCallback, useMemo } from "react";
import { setDisclosedGroup } from "../../providers/actions";
import { useDispatch } from "../../hooks/useDispatch";
import { useAppState } from "../../hooks/useAppState";
import { Accordion as AccordionComponent } from "../../components/accordion";

export const Accordion = () => {
  const dispatch = useDispatch();
  const { groupsData, disclosedGroup } = useAppState();

  const handleDisclose = useCallback(
    (id: string) => {
      const newDisclosedGroup = disclosedGroup === id ? null : id;
      dispatch(setDisclosedGroup(newDisclosedGroup));
    },
    [disclosedGroup, dispatch],
  );

  const accordionGroups = useMemo(
    () =>
      groupsData.map((group) => ({
        ...group,
        isDisclosed: disclosedGroup === group.id,
      })),
    [groupsData, disclosedGroup],
  );

  return (
    <AccordionComponent
      accordionGroups={accordionGroups}
      handleDisclose={handleDisclose}
    />
  );
};
