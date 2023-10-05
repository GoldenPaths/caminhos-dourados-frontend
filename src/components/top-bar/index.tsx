import { useState } from "react";
import { Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import ProfilePopover from "../profile-popover";
import Menu from "../menu";

import * as Styled from "./top-bar.styled";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <Styled.Wrapper>
        <ProfilePopover />
        <IconButton aria-label="menu" onClick={toggleMenu}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Styled.Wrapper>

      <Menu isOpen={isOpen} toggleMenu={toggleMenu} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default TopBar;
