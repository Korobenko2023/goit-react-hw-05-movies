import { useLocation } from "react-router-dom";
import { MoviesLi, MoviesLink, MoviesUl, Title } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <MoviesUl>
            {movies.map(({ id, name, title, poster_path }) => (
                <MoviesLi key={id}>
                    <MoviesLink to={`/movies/${id}`} state={{ from: location }}> 
                        <img src={poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg'
                        }
                            alt={name || title}
                            width={160} height={240}
                    />
                     <Title>{name || title}</Title>
                    </MoviesLink>
                </MoviesLi>
            ))}
        </MoviesUl>
    )

};

