import React from "react";
import { Container, Title, List, Item, Picture, Name } from "./styles/style";

export default function Profile({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Profile.List = function ProfileList({ children, ...props }) {
  return <List {...props}>{children}</List>;
};

Profile.User = function ProfileUser({ children, ...props }) {
  return <Item {...props}>{children}</Item>;
};

Profile.Picture = function ProfilePicture({ src, ...props }) {
  return (
    <Picture
      {...props}
      src={src ? `/images/users/${src}.png` : "/images/misc/loading.gif"}
    />
  );
};

Profile.Name = function ProfileName({ children, ...props }) {
  return <Name {...props}>{children}</Name>;
};
