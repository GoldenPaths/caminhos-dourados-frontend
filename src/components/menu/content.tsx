import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { MENU_OPTIONS } from "../../constants";
import { LogoImage } from "../logo-image";

import * as Styled from "./menu.styled";

interface MenuContentProps {
  toggleMenu: () => void;
}

const MenuContent = ({ toggleMenu }: MenuContentProps) => {
  const onKeyDown = (event: React.KeyboardEvent) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    toggleMenu();
  };

  return (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleMenu} onKeyDown={onKeyDown}>
      <Styled.LogoContainer>
        <LogoImage maxWidth={4} />
        <Typography fontWeight={700}>
          caminhos{" "}
          <Typography fontWeight={700} variant="span" color="primary">
            dourados
          </Typography>
        </Typography>
      </Styled.LogoContainer>

      <List>
        {MENU_OPTIONS.map(({ label, path }) => (
          <ListItem key={label} disablePadding>
            <Link to={path}>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default MenuContent;
