import { Movie } from "../../models/class-redux/movies";
import { createRandomMovie } from "../../lib/random-data-provider.tsx";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "@/lib/store-redux/store";
type Props = {}

export default function MovePlaylist({ }: Props) {
  // To Do:
  // Get list of movies
  const dispatch = useDispatch();
  
  const moviePlaylist: Array<Movie> = useSelector((state: any) => state.movies);
  
  const handleMovieAdd = (movie: Movie) => {
    dispatch(addMovie(movie));
    
    return movie;
  };
  const handleMovieRemove = (movie: Movie) => {
    // To Do:
    dispatch(removeMovie(movie));
    return movie;
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button className="px-1 mx-2 my-1 bg-red-500 text-white"
          onClick={() => handleMovieRemove(movie)}
          
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="mt-2">

      <h3 className="my-2">Movie Playlist</h3>

      <button
        onClick={() => handleMovieAdd(createRandomMovie())}
        className="button is-link"
      >
        + Add Movie to Playlist
      </button>

      <ul>{renderedMovies}</ul>
    </div >
            
  );
}