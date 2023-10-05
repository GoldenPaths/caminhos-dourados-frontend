import { Drawer } from "@mui/material";
import MenuContent from "./content";

interface MenuProps {
  onClose: () => void;
  toggleMenu: () => void;
  isOpen: boolean;
}

const Menu = ({ isOpen, onClose, toggleMenu }: MenuProps) => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClose}>
      <MenuContent toggleMenu={toggleMenu} />
    </Drawer>
  );
};

export default Menu;
