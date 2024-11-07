import { createRandomSong } from "../../lib/random-data-provider";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../../lib/store-redux/store";
type Props = {}

export default function SongPlaylist({}: Props) {
  const dispatch = useDispatch();
  // To Do:
  // Get list of songs
  const songPlaylist : Array<string> = useSelector((state: any) => state.songs);

  const handleSongAdd = (song: string) => {
    // To Do:
    // Add song to list of songs
    console.log(song);
    dispatch(addSong(song));
    return song;
  };
  const handleSongRemove = (song: string) => {
    // To Do:
    dispatch(removeSong(song));
    return song;
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button className="px-1 mx-2 my-1 bg-red-500 text-white"
          onClick={() => handleSongRemove(song)}
          
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="my-4">
   
        <h3 className="my-2">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
    
      <ul>{renderedSongs}</ul>
    </div>
  );
}
