import React, { Component } from "react";
import { HeartIcon, CastIcon } from "..";
import PlayerControl from "./player_control";
import styles from "./styles.module.scss";

class Player extends Component {
  render() {
    return (
      <div className={styles.playlistContainer}>
        <div className={styles.flexboxContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.musicImg}>
              <img
                src="https://i.scdn.co/image/ab67616d0000485114fc1d5b10e9cb20f33e0f74"
                alt=""
                className={styles.coverArtImage}
              />
            </div>
            <div className={styles.musicInfo}>
              <span>
                <a href="/" className={styles.trackName}>
                  Le monde par ma fenetre
                </a>
              </span>
              <span>
                <a href="/" className={styles.trackArtist}>
                  Draganov
                </a>
              </span>
            </div>
            <div className={styles.buttonIcon}>
              <button type="button" className={styles.controlButton}>
                <HeartIcon />
              </button>
              <button type="button" className={styles.controlButton}>
                <CastIcon />
              </button>
            </div>
          </div>
          <>
            <PlayerControl />
          </>
          <div className={styles.trackOpt}></div>
        </div>
      </div>
    );
  }
}

export default Player;
