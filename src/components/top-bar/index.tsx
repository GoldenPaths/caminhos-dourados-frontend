import { Person, Menu } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TopBar = () => {
  return (
    <div>
      <IconButton aria-label="perfil">
        <Person />
      </IconButton>
      <IconButton aria-label="menu">
        <Menu />
      </IconButton>
    </div>
  );
};

export default TopBar;
