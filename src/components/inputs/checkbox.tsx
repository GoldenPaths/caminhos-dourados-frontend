import {
  FormControlLabel,
  Checkbox as CheckBoxUi,
  CheckboxProps as CheckboxUiProps,
} from "@mui/material";
import { CheckedIcon, UncheckedIcon } from "./inputs.styled";

interface CheckboxProps extends CheckboxUiProps {
  label: string;
}

const Checkbox = ({ label, ...props }: CheckboxProps) => {
  return (
    <FormControlLabel
      control={
        <CheckBoxUi
          disableRipple
          checkedIcon={<UncheckedIcon />}
          icon={<CheckedIcon />}
          {...props}
        />
      }
      label={label}
    />
  );
};

export default Checkbox;
