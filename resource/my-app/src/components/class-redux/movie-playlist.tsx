import { Movie } from "../../models/class-redux/movies";
import { createRandomMovie } from "../../lib/random-data-provider.tsx";
type Props = {}

export default function MovePlaylist({}: Props) {
  // To Do:
  // Get list of movies
  const moviePlaylist : Array<Movie> = [];

  const handleMovieAdd = (movie : Movie) => {
    // To Do:
    // Add movie to list of movies
    return movie;
  };
  const handleMovieRemove = (movie: Movie) => {
    // To Do:
    // Remove movie from list of movies
    return movie;
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button
          onClick={() => handleMovieRemove(movie)}
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
        <h3 className="subtitle is-3">Movie Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button is-link"
          >
            + Add Movie to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}