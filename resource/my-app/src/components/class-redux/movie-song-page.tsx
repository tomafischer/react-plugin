import SongPlaylist from "./song-playlist";
import MoviePlaylist from "./movie-playlist";

type Props = {}

export default function MovieSongPage({}: Props) {
  const handleResetClick = () => {
    //
  };

  
  return (
    <div className="p-3">
      <h1 className="text-2xl mb-3">Movie and Song Playlists - Redux Testing</h1>
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