import { Component } from "react";
import "./styles.scss";

class Loading extends Component {
  
  render() {
    return (
      <div className='midociLoadingWrapper'>
        <div className='midociLoading'>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
          <div className='midociLine'></div>
        </div>
        <span className='midociTip'>LOADING...</span>
      </div>
    );
  }
}

export default Loading;
