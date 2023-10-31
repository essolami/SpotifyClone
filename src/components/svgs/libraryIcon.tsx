import React, { Component } from "react";
import { SvgProps } from "../../types/common";
class LibraryIcon extends Component<SvgProps> {
  render() {
    return (
      <svg
        role="img"
        height="24"
        width="24"
        className={this.props.className}
        viewBox="0 0 24 24"
      >
        <path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"></path>
      </svg>
    );
  }
}

export default LibraryIcon;
