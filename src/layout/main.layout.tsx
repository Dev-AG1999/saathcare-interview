import React from "react";
import { MainLayoutStyle } from "../styles";

interface MainLayoutProps {
  children: React.ReactElement;
}
const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;
  return <div style={MainLayoutStyle}>{children}</div>;
};

export default MainLayout;
