import CheckSvg from "../../assets/check.svg";
import { CheckBoxComponent } from "./styles";

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
