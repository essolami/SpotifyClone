import React, { Component } from "react";
import { HeartIcon, CastIcon } from "..";
import PlayerControl from "./player_control";
import "./styles.scss";
class Player extends Component {
  render() {
    return (
      <div className="playlist_container">
        <div className="flexbox_container">
          <div className="info_container">
            <div className="music_img">
              <img
                src="https://i.scdn.co/image/ab67616d0000485114fc1d5b10e9cb20f33e0f74"
                alt=""
                className="cover-art-image"
              />
            </div>
            <div className="music_info">
              <span>
                <a href="/" className="track_name">
                  Le monde par ma fenetre
                </a>
              </span>
              <span>
                <a href="/" className="track_artist">
                  Draganov
                </a>
              </span>
            </div>
            <div className="button_icon">
              <button type="button" className="control-button">
                <HeartIcon />
              </button>
              <button type="button" className="control-button">
                <CastIcon />
              </button>
            </div>
          </div>
          <>
            <PlayerControl />
          </>
          <div className="track_opt"></div>
        </div>
      </div>
    );
  }
}

export default Player;
