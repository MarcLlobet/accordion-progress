import styled from "styled-components";

export const InputCheckBox = styled.span<{ $checked: boolean }>`
  appearance: none;
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $checked }) => ($checked ? "#02BC9C" : "#999")};
  background-color: ${({ $checked }) => ($checked ? "#02BC9C" : "transparent")};
  position: relative;
  z-index: 1;
  transition:
    border-color 50ms ease-out,
    background-color 150ms ease-out;

  &:before {
    content: "";
    display: block;
    position: relative;
    z-index: 2;
    background-image: url("/check.svg");
    background-size: contain;
    margin: auto;
    width: 10px;
    height: 8px;
    visibility: ${({ $checked }) => ($checked ? "visible" : "hidden")};
  }
`;
