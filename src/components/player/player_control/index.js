import React, { Component } from 'react';
import { 
    ShuffleIcon,
    PreviousIcon,
    PlayIcon,
    NextIcon,
    RepeatIcon
 } from '../..';

class PlayerControl extends Component {
    render() {
        return (
            <>
               <div className='player_control'>
                        <div className='player_control_button'>
                            <div className='player_control_left'>
                                <button 
                                    type="button" 
                                    className="control-button">
                                        <ShuffleIcon/>
                                </button>
                                <button 
                                    type="button" 
                                    className="control-button">
                                        <PreviousIcon/>
                                </button>
                            </div>
                            <div className='player_control_play'>
                                <button 
                                    type="button" 
                                    className="control-button play">
                                        <PlayIcon/>
                                </button>
                            </div>
                            <div className='player_control_right'>
                            <button 
                                    type="button" 
                                    className="control-button">
                                        <NextIcon/>
                                </button>
                                <button 
                                    type="button" 
                                    className="control-button">
                                        <RepeatIcon/>
                                </button>
                            </div>
                        </div>
                        <div className='playback-bar'>
                                
                        </div>
                    </div>
                    
            </>
        );
    }
}

export default PlayerControl;
