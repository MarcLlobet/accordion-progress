import styled from "styled-components";
import CheckSvg from "../../assets/check.svg";

const CheckBoxComponent = styled.div<{ $checked: boolean }>`
  display: flex;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ $checked }) => ($checked ? "#02BC9C" : "#999")};
  background-color: ${({ $checked }) => ($checked ? "#02BC9C" : "transparent")};

  & > img {
    margin: auto;
    width: 10px;
    height: 8px;
    visibility: ${({ $checked }) => ($checked ? "visible" : "hidden")};
  }
`;

export type CheckBoxProps = {
  checked?: boolean;
};

export const CheckBox = ({ checked = false }: CheckBoxProps) => {
  return (
    <CheckBoxComponent $checked={checked}>
      <img src={CheckSvg} alt="checked icon" />
    </CheckBoxComponent>
  );
};
