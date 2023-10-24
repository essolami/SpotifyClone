import React, { Component } from "react";
import "./styles.scss";
class MyPlaylists extends Component {
  render() {
    return (
      <div className="playlists_container">
        <ul className="playlists_list">
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>Best Moroccan Rap Hits</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>Traitement Dollypran</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>R&B King</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>Traitement</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>Anatomie R&B King</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>R&B King Anatomie</span>
            </a>
          </li>
          <li className="playlist_item">
            <a href="/" className="playlist_link">
              <span>Traitement R&B King</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default MyPlaylists;
