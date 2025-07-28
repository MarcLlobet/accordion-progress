import styled from "styled-components";

export const InputCheckBox = styled.span<{ $checked: boolean }>`
  appearance: none;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--${({ $checked }) => ($checked ? "key" : "subtleText")});
  background-color: ${({ $checked }) =>
    $checked ? "var(--key)" : "transparent"};
  transition:
    border-color 50ms ease-out,
    background-color 150ms ease-out;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url("/check.svg");
    background-size: contain;
    margin: auto;
    width: 10px;
    height: 8px;
    visibility: ${({ $checked }) => ($checked ? "visible" : "hidden")};
  }
`;
