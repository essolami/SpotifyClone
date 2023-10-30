import React, { Component } from "react";
import { Playlists } from "../../components";

class Home extends Component {
  render() {
    return (
      <div className="content_section">
        <div>
          <Playlists title="À ne pas manquer aujourd'hui !" />
        </div>
        <div>
          <Playlists title="Popular new releases" />
        </div>
        <div>
          <Playlists title="Trending now !" />
        </div>
      </div>
    );
  }
}

export default Home;
