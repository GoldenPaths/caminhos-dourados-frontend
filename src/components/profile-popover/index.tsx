import { Popover, Typography, IconButton, Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import { useState } from "react";

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleLogout = () => {
    //TODO:  to get from auth
  };
  const user = "Kamila"; //TODO: to get from auth

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <IconButton aria-label="perfil" onClick={handleClick}>
        <Person fontSize="large" />
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 1.5 }}>Olá {user}</Typography>
        <Button onClick={handleLogout} fullWidth>
          Logout
        </Button>
      </Popover>
    </>
  );
};

export default ProfilePopover;
