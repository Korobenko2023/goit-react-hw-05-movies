import { Link } from "react-router-dom";
import { Descriprion, MovieContainer } from "./MovieCard.styled";


export const MovieCard = ({ description: { title,
  vote_average,
  genres,
  overview,
  poster_path,
   runtime } }) => {

  const imgStart = `https://image.tmdb.org/t/p/original/`;
  const defaultImg =
    'https://image.tmdb.org/t/p/original//nQvoM7BMswq1raENOkOjCBt94gk.jpg';

  return (
    <>
       <MovieContainer>
            <img src={poster_path ? imgStart + `${poster_path}` : defaultImg}
               width={250}
               alt={title} />  
            <Descriprion>    
               <h1>{title}</h1>
               <p>Rating: {Math.round(vote_average)}</p>
               <p>Duration: {runtime} min.</p>
               <h2>Overview</h2>
               <p>{overview}</p>
               <h3>Genres</h3>
               <ul>
                 {genres?.map(genre => (
                   <li key={genre.id}>{genre.name}</li>
                 ))}
               </ul>
             </Descriprion>            
        </MovieContainer>
        <div>             
               <h2>Additional information</h2>
                 <ul>
                   <li>
                     <Link to="cast">Cast</Link>
                   </li>                   
                   <li>
                      <Link to="reviews">Reviews</Link>
                   </li>
                 </ul>
        </div>
    </>       
  )
};
