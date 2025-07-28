import styled from "styled-components";
import { ArrowIconSvg } from "./arrowIcon";

export const VisibilityButtonElement = styled.span`
  color: var(--subtleText);
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
`;

export const VisibilityIcon = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  padding: 6px;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const ArrowIcon = styled(ArrowIconSvg)`
  transform: rotate(${({ $isExpanded }) => ($isExpanded ? 0 : -180)}deg);
  transition: transform 0.35s ease-out;
  fill: var(--text);
  width: 10px;
  height: 6px;
`;
