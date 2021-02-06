import React, { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Container, Button, Overlay, Inner, Close } from "./styles/style";

export const PlayerContext = createContext();

export default function Player({ children, ...props }) {
  const [showPlayer, setShowPlayer] = useState(false);

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...props}>{children}</Container>
    </PlayerContext.Provider>
  );
}

Player.Video = function PalyerVideo({ src, ...props }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return showPlayer
    ? createPortal(
        <Overlay onClick={() => setShowPlayer(false)} data-testid="player">
          <Inner>
            <video id="netflix-player" controls>
              <track kind="captions" {...props} />
              <source src={src} type="video/mp4" />
            </video>
            <Close />
          </Inner>
        </Overlay>,
        document.body
      )
    : null;
};

Player.Button = function PalyerButton({ ...props }) {
  // eslint-disable-next-line
  const { showPlayer, setShowPlayer } = useContext(PlayerContext);

  return (
    <Button
      onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
      {...props}
    >
      Play
    </Button>
  );
};
