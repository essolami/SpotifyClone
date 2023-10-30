import { Component } from "react";
import style from "./styles.module.scss";

class Loading extends Component {
  componentDidMount() {
    console.log(style);
  }
  render() {
    return (
      <div className={style.midociLoadingWrapper}>
        <div className={style.midociLoading}>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
          <div className={style.midociLine}></div>
        </div>
        <span className={style.midociTip}>LOADING...</span>
      </div>
    );
  }
}

export default Loading;
