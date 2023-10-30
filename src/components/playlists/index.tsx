import React from "react";
import "./styles.scss";

type PlaylistProps = {
  title: string;
};

class Playlists extends React.Component<PlaylistProps> {
  render() {
    return (
      <>
        <section className="playlists_container">
          <div className="playlists_infos">
            <div className="infos">
              <h2 className="title">
                <a href="/">{this.props.title}</a>
              </h2>
            </div>
            <a href="/" className="see_all">
              See All
            </a>
          </div>
          <div className="grid_container">
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
                <button></button>
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
            <div className="grid_item">
              <div className="item_picture">
                <img
                  alt=""
                  src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb80f87a6c458e532f92d28d66/1/en/large"
                />
              </div>
              <div className="item_info">
                <a href="/" dir="auto">
                  Hot Arabic Hits - Yalla يلا
                </a>
                <div className="item_desc">
                  Top Arabic hits are right here. Cover: A5rass.
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Playlists;
