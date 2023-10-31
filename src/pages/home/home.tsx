import React from "react";
import { Playlists } from "../../components";

const Home: React.FC = () => {
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
};

export default Home;
