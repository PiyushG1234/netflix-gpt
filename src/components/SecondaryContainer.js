import { useSelector } from 'react-redux';
import MovieList from './MovieList';


const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-96 pl-4 relative z-20'>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> 
       

       <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> 
       <MovieList title={"South Movies"} movies={movies.nowPlayingMovies} /> 
       <MovieList title={"Popular"} movies={movies.PopularMovies} /> 
       </div>
    </div> 
    )
  );
};

export default SecondaryContainer;