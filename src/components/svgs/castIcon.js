import React, { Component } from "react";

class CastIcon extends Component {
  render() {
    return (
      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
        <g fill="#b3b3b3" fillRule="evenodd">
          <path
            d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
            fillRule="nonzero"
          ></path>
          <path d="M10 8h4v3h-4z"></path>
        </g>
      </svg>
    );
  }
}

export default CastIcon;
