import React, { Component } from "react";
import { SvgProps } from "../../types/common";

class HomeIcon extends Component<SvgProps> {
  render() {
    return (
      <svg
        role="img"
        height="24"
        width="24"
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path d="M13.5 1.515a3 3 0 00-3 0L3 5.845a2 2 0 00-1 1.732V21a1 1 0 001 1h6a1 1 0 001-1v-6h4v6a1 1 0 001 1h6a1 1 0 001-1V7.577a2 2 0 00-1-1.732l-7.5-4.33z"></path>
      </svg>
    );
  }
}

export default HomeIcon;
