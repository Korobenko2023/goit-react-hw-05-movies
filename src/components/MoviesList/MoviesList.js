import { MoviesLink, MoviesUl } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    return (
        // <MoviesUl>
        //     {movies.map(({ id, original_title }) => (
        //         <li key={id}>
        //             <MoviesLink to={`/movies/:${id}`} title={original_title}> 
        //             </MoviesLink>
        //         </li>
        //     ))}
        // </MoviesUl>
        
        <MoviesUl>
            {movies.map(movie => (
                <li key={movie.id}>
                    <MoviesLink to={`/movies/:${movie.id}`}> 
                        {movie.original_title}
                    </MoviesLink>
                </li>
            ))}
        </MoviesUl>
    )

};


//  <MovieUl>
//       {films.map(film => (
//         <li key={film.id}>
//           <Link to={`/movies/:${film.id}`} state={{ from: location }}>
//             {film.original_title}
//           </Link>
//         </li>
//       ))}
// </MovieUl>
    
  