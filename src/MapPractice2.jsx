import { useMovieGenerator } from "./useMovieGenerator";
import Movie from "./movie.jsx"

export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();
    console.log("movies", movies);
    const movieElements = movies.map(movie => {
        return <Movie
            key={movie.id} 
            title={movie.title}
            star={movie.star}
            genre={movie.genre}
            quote={movie.quote}
        />
    })

    return (
        <div className="mapPractice">
            <h2>Famous Movies:</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">
                {movieElements}
            </div>
        </div>
    );
}
