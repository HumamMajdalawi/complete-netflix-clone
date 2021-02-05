import React, { useState } from "react";
import { Link as ReachRouterLink } from "react-router-dom";
import {
  Container,
  Group,
  Background,
  Dropdown,
  Picture,
  Link,
  Search,
  Profile,
  FeatureCallOut,
  SearchIcon,
  SearchInput,
  ButtonLink,
  PlayButton,
  Text,
  Feature,
  Logo,
} from "./styles/style";

export default function Header({ bg = true, children, ...props }) {
  return bg ? (
    <Background data-testid="header-bg" {...props}>
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...props }) {
  return <Group {...props}>{children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...props }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...props} />
    </ReachRouterLink>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...props }) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...props}>
      <SearchIcon
        onClick={() => setSearchActive((searchActive) => !searchActive)}
      >
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search films and series"
        active={searchActive}
        data-testid="search input"
      />
    </Search>
  );
};

Header.Profile = function HeaderProfile({ children, ...props }) {
  return <Profile {...props}>{children}</Profile>;
};

Header.Feature = function HeaderFeature(props) {
  return <Feature>{props.children}</Feature>;
};

Header.Picture = function HeaderPicture({ src, ...props }) {
  return <Picture {...props} src={`/images/users/${src}.png`} />;
};

Header.Dropdown = function HeaderDropdown({ children, ...props }) {
  return <Dropdown {...props}>{children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Header.PlayButton = function HeaderPlayButton({ children, ...props }) {
  return <PlayButton {...props}>{children}</PlayButton>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...props }) {
  return <FeatureCallOut {...props}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...props }) {
  return <ButtonLink {...props}>{children}</ButtonLink>;
};
