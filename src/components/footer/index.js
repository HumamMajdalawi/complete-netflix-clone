import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
  Lang,
  SelectInput,
} from "./styles/style";

export default function Footer({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...props }) {
  return <Row {...props}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...props }) {
  return <Column {...props}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...props }) {
  return <Link {...props}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...props }) {
  return <Text {...props}>{children}</Text>;
};

Footer.Break = function FooterBreak(props) {
  return <Break {...props} />;
};

Footer.Lang = function FooterLang({ children, ...props }) {
  return <Lang {...props}> {children}</Lang>;
};

Footer.SelectInput = function FooterSelectInput({ children, ...props }) {
  return <SelectInput {...props}>{children}</SelectInput>;
};
