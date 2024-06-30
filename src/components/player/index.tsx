import React, { Component } from "react";
import { HeartIcon, CastIcon } from "..";
import PlayerControl from "./player_control";
import "./styles.scss";

class Player extends Component {
  render() {
    return (
      <div className='playlistContainer'>
        <div className='flexboxContainer'>
          <div className='infoContainer'>
            <div className='musicImg'>
              <img
                src="https://i.scdn.co/image/ab67616d0000485114fc1d5b10e9cb20f33e0f74"
                alt=""
                className='coverArtImage'
              />
            </div>
            <div className='musicInfo'>
              <span>
                <a href="/" className='trackName'>
                  Le monde par ma fenetre
                </a>
              </span>
              <span>
                <a href="/" className='trackArtist'>
                  Draganov
                </a>
              </span>
            </div>
            <div className='buttonIcon'>
              <button type="button" className='controlButton'>
                <HeartIcon />
              </button>
              <button type="button" className='controlButton'>
                <CastIcon />
              </button>
            </div>
          </div>
          <>
            <PlayerControl />
          </>
          <div className='trackOpt'></div>
        </div>
      </div>
    );
  }
}

export default Player;
