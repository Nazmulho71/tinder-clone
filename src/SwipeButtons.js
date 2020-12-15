import React from "react";
import { IconButton } from "@material-ui/core";
import { Replay, Close, StarRate, Favorite, FlashOn } from "@material-ui/icons";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__cross">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__love">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightning">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
