import loadable from "@loadable/component";

const ErrorBoundary = loadable(() => import("./errorBoundary"), {
    fallback: null
});
const Loading = loadable(() => import("./loading"), {
    fallback: null
});
const SideBar = loadable(() => import("./sideBar"), {
    fallback: null
});
const MyPlaylists = loadable(() => import("./myPlaylists"), {
    fallback: null
});
const Player = loadable(() => import("./player"), {
    fallback: null
});
const Header = loadable(() => import("./header"), {
    fallback: null
});
const Playlists = loadable(() => import("./playlists"), {
    fallback: null
});
// *********************** Icon **********************
const SpotifyIcon = loadable(() => import("./svgs/spotifyIcon"), {
    fallback: null
});
const HomeIcon = loadable(() => import("./svgs/homeIcon"), {
    fallback: null
});
const LibraryIcon = loadable(() => import("./svgs/libraryIcon"), {
    fallback: null
});
const SearchIcon = loadable(() => import("./svgs/searchIcon"), {
    fallback: null
});
const AddPlaylistIcon = loadable(() => import("./svgs/addPlaylistIcon"), {
    fallback: null
});
const LikedPlaylistIcon = loadable(() => import("./svgs/likedPlaylistIcon"), {
    fallback: null
});
const InstallIcon = loadable(() => import("./svgs/installIcon"), {
    fallback: null
});
const BackIcon = loadable(() => import("./svgs/backIcon"), {
    fallback: null
});
const HeartIcon = loadable(() => import("./svgs/heartIcon"), {
    fallback: null
});
const CastIcon = loadable(() => import("./svgs/castIcon"), {
    fallback: null
});
const ShuffleIcon = loadable(() => import("./svgs/shuffleIcon"), {
    fallback: null
});
const PreviousIcon = loadable(() => import("./svgs/previousIcon"), {
    fallback: null
});
const NextIcon = loadable(() => import("./svgs/nextIcon"), {
    fallback: null
});
const RepeatIcon = loadable(() => import("./svgs/repeatIcon"), {
    fallback: null
});
const PlayIcon = loadable(() => import("./svgs/playIcon"), {
    fallback: null
});

export { 
    ErrorBoundary,
    Loading,
    SideBar,
    SpotifyIcon,
    HomeIcon,
    LibraryIcon,
    SearchIcon,
    AddPlaylistIcon,
    LikedPlaylistIcon,
    BackIcon,
    MyPlaylists,
    InstallIcon,
    Player,
    Header,
    Playlists,
    HeartIcon,
    CastIcon,
    ShuffleIcon,
    PreviousIcon,
    NextIcon,
    RepeatIcon,
    PlayIcon
};
