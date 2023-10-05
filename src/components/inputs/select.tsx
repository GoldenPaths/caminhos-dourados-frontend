import { MenuItem, TextFieldProps } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import Input from "./input";
import { ChangeEvent, useState } from "react";

export type OptionType = {
  value: string | number;
  label: string;
};

interface SelectProps {
  placeholder: string;
  options: Array<OptionType>;
  onSelectOption?: (selectedOption?: OptionType) => void;
}

const Select = ({
  placeholder,
  options,
  onSelectOption,
  ...props
}: SelectProps & TextFieldProps) => {
  const [value, setValue] = useState("default");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
    onSelectOption && onSelectOption(options.find((option) => option.value === value));
  };

  return (
    <Input
      {...props}
      defaultValue="default"
      value={value}
      onChange={handleChange}
      select
      endIcon={<KeyboardArrowDown />}
    >
      {[{ value: "default", label: placeholder }, ...options].map(({ value, label }) => (
        <MenuItem value={value} key={value}>
          {label}
        </MenuItem>
      ))}
    </Input>
  );
};

export default Select;
