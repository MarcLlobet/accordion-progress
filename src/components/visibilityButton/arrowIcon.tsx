export const ArrowIconSvg = ({
  isExpanded,
  className,
}: {
  $isExpanded: boolean;
  isExpanded: boolean;
  className?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
    className={className}
  >
    <desc>{`arrow ${isExpanded ? "up" : "down"}`}</desc>
    <path
      d="
        M9.85 4.65 5.35.15
        a.5.5 0 0 0-.71 0
        l-4.5 4.5
        a.5.5 0 0 0 .7.7
        L5 1.21
        l4.15 4.14
        a.5.5 0 0 0 .7 0 .5.5 0 0 0 0-.7Z
      "
    />
  </svg>
);
