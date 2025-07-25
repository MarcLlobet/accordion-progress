import { InputCheckBox } from "./styles";

export type CheckBoxProps = {
  checked?: boolean;
  labelId?: string | null;
};

export const CheckBox = ({
  checked = false,
  labelId = null,
}: CheckBoxProps) => {
  return (
    <InputCheckBox
      role="presentation"
      $checked={checked}
      aria-checked={checked}
      {...(!!labelId && { "aria-label": labelId })}
    />
  );
};
