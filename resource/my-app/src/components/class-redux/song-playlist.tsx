import { createRandomSong } from "../../lib/random-data-provider";

type Props = {}

export default function SongPlaylist({}: Props) {
  // To Do:
  // Get list of songs
  const songPlaylist : Array<string> = [];

  const handleSongAdd = (song: string) => {
    // To Do:
    // Add song to list of songs
    return song;
  };
  const handleSongRemove = (song: string) => {
    // To Do:
    // Remove song from list of songs
    return song;
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}