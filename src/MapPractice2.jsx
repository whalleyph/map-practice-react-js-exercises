import { useMovieGenerator } from "./useMovieGenerator";
export default function MapPractice2() {
    const [movies, regenerate] = useMovieGenerator();

    const divsArray = movies.map((movie) => (
        <div key={movie.title} className="movie">
            <h2>{movie.title}</h2>
            <p>Star: {movie.star}</p>
            <p>Genre: {movie.genre}</p>
            <blockquote>&quot;{movie.quote}&quot;</blockquote>
        </div>
    ));

    return (
        <div className="mapPractice">
            <h2>Map Practice 2</h2>
            <button onClick={regenerate}>Change Movies</button>
            <div className="movieList">{divsArray}</div>
        </div>
    );
}
