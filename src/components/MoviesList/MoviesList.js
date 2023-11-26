import { useLocation } from "react-router-dom";
import { MoviesLink, MoviesUl } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <MoviesUl>
            {movies.map(({ id, original_title }) => (
                <li key={id}>
                    <MoviesLink to={`/movies/${id}`} state={{ from: location }}> 
                        {original_title}
                    </MoviesLink>
                </li>
            ))}
        </MoviesUl>
    )

};

