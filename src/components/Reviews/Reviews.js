import { Loader } from "components/Loader/Loader";
import { fetchMovieReviews } from "components/Services/Api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { ReviewsLi, ReviewsP, ReviewsUl } from "./Reviews.style";

export default function Reviews() {
    const [movieReviews, setMovieReviews] = useState([]);
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
   

    useEffect(() => {
         if (!movieId) {
            return;
          }

        const reviewsFilm = async () => {

              setIsLoading(true);

            try {
                const reviewsMovie = await fetchMovieReviews(movieId);
               
                setMovieReviews(reviewsMovie);
            } catch (error) {
                toast.error('Oops! Something went wrong. Please try again later.', error);
            } finally {
                setIsLoading(false);
            }
        };
   
        reviewsFilm();
    
    }, [movieId]); 

  return (
    <>      
         {movieReviews.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
          ) : (
                <ReviewsUl>
                    {movieReviews.map(({ id, author, content }) => (
                          <ReviewsLi key={id}>
                              <h3>Author: {author}</h3>
                              <ReviewsP>{content}</ReviewsP>
                          </ReviewsLi>                     
                      ))
                    }
                 </ReviewsUl>
          )} 
      {isLoading && <Loader />}
    </>
  );
};





