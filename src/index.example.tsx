import { AccordionProgress, type AccordionProps, Page } from ".";

export const ExampleComponent = () => {
  const props: AccordionProps = {
    data: [
      {
        name: "group1",
        tasks: [
          {
            description: "task1",
            checked: false,
            value: 10,
          },
          {
            description: "task2",
            checked: false,
            value: 12,
          },
        ],
      },
    ],
  };
  return (
    <Page>
      <AccordionProgress {...props} />
    </Page>
  );
};
