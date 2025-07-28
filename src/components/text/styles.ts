import styled from "styled-components";

export type TextSize = "big" | "medium" | "small";

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

export const TextComponent = styled.p<{ $isTitle: boolean; $size: TextSize }>`
  margin: 0;
  font-weight: ${({ $isTitle }) => ($isTitle ? 700 : 400)};

  font-size: ${({ $size }) => fontSizeMap[$size]}px;
  line-height: ${({ $size }) => lineHeightMap[$size]}px;
`;

export const SpanComponent = styled.span`
  display: flex;
  gap: 16px;
  align-items: baseline;
`;
