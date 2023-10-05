import { TextFieldProps, InputAdornment } from "@mui/material";
import { ReactNode } from "react";
import { InputBase } from "./inputs.styled";

interface InputProps {
  startIcon: ReactNode | null;
  endIcon: ReactNode | null;
  children?: ReactNode;
}

const Input = ({ startIcon, endIcon, children, ...props }: InputProps & TextFieldProps) => {
  const initAdornment = (icon: ReactNode) => <InputAdornment position="end">{icon}</InputAdornment>;

  return (
    <InputBase
      {...props}
      fullWidth
      variant="filled"
      children={children}
      InputProps={{
        ...(startIcon ? { startAdornment: initAdornment(startIcon) } : {}),
        ...(endIcon ? { endAdornment: initAdornment(endIcon) } : {}),
      }}
    />
  );
};

export default Input;

Input.defaultProps = {
  startIcon: null,
  endIcon: null,
};
