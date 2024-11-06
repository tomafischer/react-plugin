import SongPlaylist from "./song-playlist";
import MoviePlaylist from "./movie-playlist";

type Props = {}

export default function MovieSongPage({}: Props) {
  const handleResetClick = () => {
    //
  };

  
  return (
    <div className="container is-fluid">
    <button onClick={() => handleResetClick()} className="button is-danger">
      Reset Both Playlists
    </button>
    <hr />
    <MoviePlaylist />
    <hr />
    <SongPlaylist />
  </div>
  )
}