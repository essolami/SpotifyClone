import React, { Component } from "react";
import {
  ShuffleIcon,
  PreviousIcon,
  PlayIcon,
  NextIcon,
  RepeatIcon,
} from "../..";
import styles from "./styles.module.scss";

class PlayerControl extends Component {
  render() {
    return (
      <>
        <div className={styles.playerControl}>
          <div className={styles.playerControlButton}>
            <div className={styles.playerControlLeft}>
              <button type="button" className={styles.controlButton}>
                <ShuffleIcon />
              </button>
              <button type="button" className={styles.controlButton}>
                <PreviousIcon />
              </button>
            </div>
            <div className={styles.playerControlPlay}>
              <button
                type="button"
                className={`${styles.controlButton} ${styles.play}`}
              >
                <PlayIcon />
              </button>
            </div>
            <div className={styles.playerControlRight}>
              <button type="button" className={styles.controlButton}>
                <NextIcon />
              </button>
              <button type="button" className={styles.controlButton}>
                <RepeatIcon />
              </button>
            </div>
          </div>
          <div className={styles.playbackBar}></div>
        </div>
      </>
    );
  }
}

export default PlayerControl;
