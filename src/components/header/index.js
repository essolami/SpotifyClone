import React, { Component } from "react";
import "./styles.scss";
import { BackIcon } from "..";

class index extends Component {
  render() {
    return (
      <header className="header_container">
        <button className="icon back_icon">
          <BackIcon />
        </button>
        <div>
          <button className="btn Sign_up" type="button">
            Sign up
          </button>
          <button className="btn Log_In" type="button">
            Log in
          </button>
        </div>
      </header>
    );
  }
}

export default index;
