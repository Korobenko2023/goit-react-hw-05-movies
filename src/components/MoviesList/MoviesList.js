import { useLocation } from "react-router-dom";
import { FallingStarsWrapper, MoviesImg, MoviesLi, MoviesLink, MoviesUl, Title } from "./MoviesList.styled";
import { FallingStars } from "components/FallingStars/FallingStars";

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <MoviesUl>
            <FallingStarsWrapper>
               <FallingStars />
            </FallingStarsWrapper>            
            {movies.map(({ id, name, title, poster_path }) => (
                <MoviesLi key={id}>
                    <MoviesLink to={`/movies/${id}`} state={{ from: location }}> 
                        <MoviesImg src={poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg'
                        }
                            alt={name || title}
                            width={160} 
                    />
                     <Title>{name || title}</Title>
                    </MoviesLink>
                </MoviesLi>
            ))}
        </MoviesUl>
    )

};

