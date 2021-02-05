import React from "react";
import { Header } from "../components";
import logo from "../logo.svg";
import * as ROUTES from "../constants/routes";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
      </Header.Frame>
      {children}
    </Header>
  );
}
