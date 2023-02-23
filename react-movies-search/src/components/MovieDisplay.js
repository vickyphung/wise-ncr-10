

function  MovieDisplay ({ movie }){
    //function to return loaded JSX
    const loaded = () => {
      return (
        <>
          <h1>{movie.Title}</h1>
          <h2>{movie.Genre}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          Year: <h2>{movie.Year}</h2>
          Rated: <h2>{movie.Rated}</h2>
          Actors: <h2>{movie.Actors}</h2>
          Awards: <h2>{movie.Awards}</h2>
          Released: <h2>{movie.Released}</h2>

        </>
      );
    };
  
    //function to return loading JSX
    const loading = () => {
      return <h1>No Movie to Display</h1>;
    };
  
    //Ternary operator will determine which functions JSX we will return
    return movie ? loaded() : loading();
  };
  
  // We must export the component to use it in other files
  export default MovieDisplay;