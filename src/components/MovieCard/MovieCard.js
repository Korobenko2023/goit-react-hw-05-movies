import { Link } from "react-router-dom";


export const MovieCard = ({ description: { poster_path, 
    title,
    vote_average,
    overview,
    genres,} }) => {

  const imgPost = `https://image.tmdb.org/t/p/original/${poster_path}`;
  const defaultImg =
    'https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg';

    return (
        <>
           <img
              src={poster_path ? imgPost : defaultImg}
              width={250}
              alt="постер"
            />;
           
    
            <h1>{title}</h1>
        <p>Rating: {Math.round(vote_average)}</p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
            {genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
           <h2>Additional information</h2>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                 <Link to="reviews">Reviews</Link>
              </li>
            </ul>
        </>
    )
};
