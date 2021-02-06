import React from "react";
import { LockBody, ReleaseBody, Spinner, Picture } from "./styles/style";

export default function Loading({ src, ...props }) {
  return (
    <Spinner {...props}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} data-testid="loading-picture" />
    </Spinner>
  );
}

Loading.ReleaseBody = function LoadingReleaseBody() {
  return <ReleaseBody />;
};
