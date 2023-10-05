import { Popover, Typography, IconButton, Button } from "@mui/material";
import { Person } from "@mui/icons-material";
import { useState } from "react";
import { useAuthContext } from "../../hooks/use-auth-context";
import { useNavigate } from "react-router-dom";

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { handleLogout, user } = useAuthContext();
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate("/");
  };

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
        <Typography sx={{ p: 1.5 }}>Olá {user?.name}</Typography>
        <Button onClick={onLogout} fullWidth>
          Logout
        </Button>
      </Popover>
    </>
  );
};

export default ProfilePopover;
