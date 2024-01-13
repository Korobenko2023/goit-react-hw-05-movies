import { Additional, Descriprion, LinkCard, MovieContainer } from "./MovieCard.styled";

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
               width={200}
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
        <Additional>             
               <h2>Additional information</h2>
                 <ul>
                   <li>
                     <LinkCard to="cast">Cast</LinkCard>
                   </li>                   
                   <li>
                      <LinkCard to="reviews">Reviews</LinkCard>
                   </li>
                 </ul>
        </Additional>
    </>       
  )
};
