import { type ReactNode } from "react";
import styled from "styled-components";

const titleTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

type TextSize = "big" | "medium" | "small";

export type TextProps = {
  children?: ReactNode;
  as?: (typeof titleTags)[number] | "p" | "span";
  size?: TextSize;
};

const fontSizeMap: Record<TextSize, number> = {
  big: 24,
  medium: 18,
  small: 16,
};

const lineHeightMap: Record<TextSize, number> = {
  big: 32,
  medium: 28,
  small: 24,
};

const TextComponent = styled.p<{ $isTitle: boolean; $size: TextSize }>`
  margin: 0;
  font-weight: ${({ $isTitle }) => ($isTitle ? 700 : 400)};

  font-size: ${({ $size }) => fontSizeMap[$size]}px;
  line-height: ${({ $size }) => lineHeightMap[$size]}px;
`;

export const Text = ({
  children = null,
  as = "p",
  size = "medium",
}: TextProps) => {
  const isTitle = !!as && (titleTags as ReadonlyArray<string>).includes(as);

  return (
    <TextComponent as={as} $isTitle={isTitle} $size={size}>
      <span>{children}</span>
    </TextComponent>
  );
};
