export const GroupIconSvg = ({
  isDone,
  className,
}: {
  $isDone: boolean;
  isDone: boolean;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      clipRule="evenodd"
      fillRule="evenodd"
      viewBox="0 0 16 16"
      className={className}
      aria-checked={isDone}
    >
      <desc>folder of tasks {isDone ? "done" : "todo"}</desc>
      <g id="wrap" transform="translate(-0.4 0)">
        <g id="todo">
          <path
            transform="translate(1.3 -0.8)"
            d="
        M8.6 12.87H3.8v-.8h4.8v.8Z
        m-4.8-2.4h4.8v-.8H3.8v.8Z
        m6.4-2.4ZH3.8v-.8h6.4v.8Z
      "
          />
        </g>
        <path
          id="tick"
          d="
      M11.08 7.48a.4.4 0 1 0-.56-.56
        L7.2 10.23
        l-.92-.91a.4.4 0 1 0-.56.56
        l1.2 1.2a.4.4 0 0 0 .56 0
        l3.6-3.6Z
        "
        />
        <g id="folder">
          <path
            id="holder"
            d="
        M8.4 1.6a.4.4 0 0 0-.28.12.4.4 0 0 0 0 .56.4.4 0 1 0 .28-.68Z

        m-2.24.97
        c.3-.16.64-.17.64-.17a.4.4 0 0 0 .4-.4 1.2 1.2 0 0 1 2.4 0
        c0 .22.18.4.4.4 0 0 .33 0 .64.17.27.14.43.34.51.63
        h-5.5
        c.08-.29.24-.5.5-.63Z
        
        M5.2 4
        h6.4a.4.4 0 0 0 .4-.4v-.02
        c0-.8-.37-1.41-1.02-1.74a2.35 2.35 0 0 0-.61-.2 2 2 0 0 0-3.94 0
        c-.17.03-.39.1-.6.2-.67.33-1.03.96-1.03 1.76 0 .22.18.4.4.4Z
      "
          />
          <path
            id="frame"
            d="
        M14 2.4
        h-.8a.4.4 0 0 0 0 .8
        h.8
        c.22 0 .4.18.4.4v11.2a.4.4 0 0 1-.4.4
        H2.8a.4.4 0 0 1-.4-.4V3.6
        c0-.22.18-.4.4-.4
        h.8a.4.4 0 1 0 0-.8
        h-.8
        c-.66 0-1.2.54-1.2 1.2v11.2
        c0 .66.54 1.2 1.2 1.2
        H14
        c.66 0 1.2-.54 1.2-1.2V3.6
        c0-.66-.54-1.2-1.2-1.2Z
      "
          />
        </g>
      </g>
    </svg>
  );
};
