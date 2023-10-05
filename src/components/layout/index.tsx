import { Container, ContainerProps } from "@mui/material";
import { ReactNode } from "react";
import TopBar from "../top-bar";

interface LayoutProps extends ContainerProps {
  children: ReactNode;
}

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <TopBar />
      <Container {...props}>{children}</Container>
    </>
  );
};

export default Layout;
