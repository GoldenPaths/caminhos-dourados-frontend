import { pallete } from "./pallete";

export default {
  MuiDivider: {
    styleOverrides: {
      root: { background: pallete.grey[200] },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: { borderRadius: 0.5, background: pallete.grey[900] },
    },
  },
  MuiModal: {
    styleOverrides: {
      root: {
        ".MuiBox-root": { height: "100%", background: pallete.grey[900] },
        ".MuiListItem-root > a": { width: "100%", textDecoration: "none", color: "inherit" },
        ".MuiListItemButton-root:hover": { background: pallete.grey[800] },
      },
    },
  },
  MuiPopover: {
    styleOverrides: {
      paper: { background: pallete.grey[800] },
    },
  },
};
