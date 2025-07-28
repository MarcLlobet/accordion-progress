import { type ReactNode } from "react";
import { SpanComponent, TextComponent, type TextSize } from "./styles";

const titleTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

export type TextProps = {
  children?: ReactNode;
  as?: (typeof titleTags)[number] | "p" | "span";
  size?: TextSize;
};

export const Text = ({
  children = null,
  as = "p",
  size = "medium",
}: TextProps) => {
  const isTitle = !!as && (titleTags as ReadonlyArray<string>).includes(as);

  return (
    <TextComponent as={as} $isTitle={isTitle} $size={size}>
      <SpanComponent>{children}</SpanComponent>
    </TextComponent>
  );
};
