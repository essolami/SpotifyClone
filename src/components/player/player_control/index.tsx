import React, { Component } from "react";
import {
  ShuffleIcon,
  PreviousIcon,
  PlayIcon,
  NextIcon,
  RepeatIcon,
} from "../..";
import "../styles.scss";

class PlayerControl extends Component {
  render() {
    return (
      <>
        <div className='playerControl'>
          <div className='playerControlButton'>
            <div className='playerControlLeft'>
              <button type="button" className='controlButton'>
                <ShuffleIcon />
              </button>
              <button type="button" className='controlButton'>
                <PreviousIcon />
              </button>
            </div>
            <div className='playerControlPlay'>
              <button
                type="button"
                className={`$'controlButton} $'play}`}
              >
                <PlayIcon />
              </button>
            </div>
            <div className='playerControlRight'>
              <button type="button" className='controlButton'>
                <NextIcon />
              </button>
              <button type="button" className='controlButton'>
                <RepeatIcon />
              </button>
            </div>
          </div>
          <div className='playbackBar'></div>
        </div>
      </>
    );
  }
}

export default PlayerControl;
