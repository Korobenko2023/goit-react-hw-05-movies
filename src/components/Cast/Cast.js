import { Loader } from "components/Loader/Loader";
import { fetchMovieCast } from "components/Services/Api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { CastDiv, CastLi, CastUl } from "./Cast.styled";

export default function Cast() {
    const [movieCast, setMovieCast] = useState([]);
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
   

    useEffect(() => {
         if (!movieId) {
            return;
          }

        const castFilm = async () => {

              setIsLoading(true);

            try {
                const castMovie = await fetchMovieCast(movieId);
               
                setMovieCast(castMovie);
            } catch (error) {
                toast.error('Oops! Something went wrong. Please try again later.', error);
            } finally {
                setIsLoading(false);
            }
        };
   
        castFilm();
    
    }, [movieId]); 

    const imgStart = `https://image.tmdb.org/t/p/original/`;
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <CastDiv>
      <CastUl>
         {movieCast.length === 0 ? (
          <p>We don't have any information about actors.</p>
        ) : (movieCast.map(({ id, profile_path, original_name, character }) => (
          <CastLi key={id}>
            <img
                     src={profile_path ? imgStart + profile_path : defaultImg}
                     width={250}
                     alt={original_name}
            />
            <p>
              <span> Actor:</span> {original_name}
            </p>
            <p>
              <span>Character:</span> {character}
            </p>
            </CastLi>
        )
        ))}
      </CastUl>
      {isLoading && <Loader />}
    </CastDiv>
  );
};




