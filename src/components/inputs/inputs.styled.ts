import { TextField, TextFieldProps } from "@mui/material";
import { styled } from "@mui/material/styles";

type CheckboxIconProps = {
  width?: number;
  height?: number;
};

export const CheckedIcon = styled("span")<CheckboxIconProps>(
  ({ theme, width = 24, height = 24 }) => ({
    width,
    height,
    backgroundColor: theme.palette.grey[800],
    ".Mui-focusVisible &": {
      outline: `2px auto ${theme.palette.primary.main}`,
      outlineOffset: 2,
    },
  })
);

export const UncheckedIcon = styled(CheckedIcon)(({ width = 24, height = 24 }) => ({
  "&:before": {
    width,
    height,
    display: "block",
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23B09533'/%3E%3C/svg%3E\")",
    content: '""',
  },
}));

export const InputBase = styled(TextField)<TextFieldProps>(
  ({ theme, type, placeholder, select, value }) => ({
    backgroundColor: theme.palette.grey[800],
    border: "none",
    ".MuiInputBase-root:before": {
      content: "none",
    },
    ".MuiInputBase-input": {
      padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
    },
    ".MuiInputAdornment-root": {
      color: theme.palette.text.disabled,
    },
    ".MuiSelect-select": {
      color: theme.palette.text[!!select && value === "default" ? "disabled" : "primary"],
    },
    ".MuiSelect-icon": {
      display: "none",
    },
    ...(type === "file"
      ? {
          "&::after": {
            content: `"${placeholder}"`,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            paddingLeft: theme.spacing(2),
            color: theme.palette.text.disabled,
            zIndex: 0,
          },
          ".MuiFilledInput-input": {
            opacity: 0,
            zIndex: 1,
          },
        }
      : {}),
  })
);
