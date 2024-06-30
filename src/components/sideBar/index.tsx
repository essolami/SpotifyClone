import React, { Component } from "react";
import "./styles.scss"
import {
  SpotifyIcon,
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  LikedPlaylistIcon,
  AddPlaylistIcon,
  MyPlaylists,
  InstallIcon,
} from "..";

class SideBar extends Component {
  render() {
    return (
    <div className='navbar_wrapper'>
        <div className='logo'>
          <SpotifyIcon className='spotifyIcon' />
        </div>
        <ul className='icons_list'>
          <li>
            <a href="/" className='current_item'>
              <HomeIcon className='icon' />
              <span className='menu_fonts'>Home</span>
            </a>
          </li>
          <li>
            <a href="/">
              <SearchIcon className='icon' />
              <span className='menu_fonts'> Search</span>
            </a>
          </li>
          <li>
            <a href="/">
              <LibraryIcon className='icon' />
              <span className='menu_fonts'>Your Library</span>
            </a>
          </li>
        </ul>
        <div className='menu_container'>
          <div className='first_menu'>
            <div className='container_action'>
              <div className='container_icon add__playlist'>
                <AddPlaylistIcon className='icon' />
              </div>
              <span className='menu_fonts'>Create Playlist</span>
            </div>
            <div className='container_action'>
              <div className='container_icon liked__playlist'>
                <LikedPlaylistIcon className='icon' />
              </div>
              <span className='menu_fonts'>Liked Songs</span>
            </div>
          </div>
        </div>
        <hr className='menu_separator'></hr>
        <div className='user_playlists menu_fonts'>
          <MyPlaylists />
        </div>
        <div className='app_install menu_fonts'>
          <a href="/" className='app_install_link'>
            <InstallIcon className='icon' />
            <span className='Type'>
              Install App
            </span>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
