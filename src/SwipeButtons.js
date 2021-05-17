import React from "react";
import "./SwipeButtons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarIcon from "@material-ui/icons/Star";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

const SwipeButtons = () => {
  return (
    <div className="swipebuttons">
      <IconButton className="swipebuttons_repeat">
        <ReplayIcon fontSize="Large" />
      </IconButton>
      <IconButton className="swipebuttons_left">
        <CloseIcon fontSize="Large" />
      </IconButton>
      <IconButton className="swipebuttons_star">
        <StarIcon fontSize="Large" />
      </IconButton>
      <IconButton className="swipebuttons_right">
        <FavoriteIcon fontSize="Large" />
      </IconButton>
      <IconButton className="swipebuttons_lightning">
        <FlashOnIcon fontSize="Large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
