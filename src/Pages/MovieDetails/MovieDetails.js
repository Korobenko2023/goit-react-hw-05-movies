import { Loader } from "components/Loader/Loader";
import { fetchMovieDetails } from "components/Services/Api";
import { Suspense, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MovieCard } from "components/MovieCard/MovieCard";
import { LinkBack } from "./MovieDetails.styled";

export default function MovieDetails() {
    const [movieDescription, setMovieDescription] = useState(null);
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {      
        
         if (!movieId) {
            return;
        }
        
        setIsLoading(true);
        setError(false);

        const detailsFilm = async () => {    

            try {
                const movieById = await fetchMovieDetails(movieId);
               
                setMovieDescription(movieById);
            } catch (error) {
                 setError(true);    
            } finally {
                setIsLoading(false);
            }
        };
   
        detailsFilm();
    
    }, [movieId]);

    return (
        <div>
            <LinkBack to={backLink.current}><GoArrowLeft />Go back</LinkBack>
            {isLoading && <Loader />} 
            {error && (toast.error('Oops! Something went wrong. Please try again later'))}
            {movieDescription && (
                <>                   
                  <MovieCard description={movieDescription} />                       
                  <Suspense fallback={<Loader />}>
                     <Outlet />
                  </Suspense>  
                </>        
            )}                   
        </div>);
};

