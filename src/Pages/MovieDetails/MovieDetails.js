import { Loader } from "components/Loader/Loader";
import { fetchMovieDetails } from "components/Services/Api";
import { Suspense, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MovieCard } from "components/MovieCard/MovieCard";
import { LinkBack } from "./MovieDetails.styled";

export default function MovieDetails() {
    const [movieDescription, setMovieDescription] = useState({});
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const location = useLocation();
    const backLink = useRef(location.state?.from ?? '/');

    useEffect(() => {
         if (!movieId) {
            return;
          }

        const detailsFilm = async () => {

              setIsLoading(true);

            try {
                const movieById = await fetchMovieDetails(movieId);
               
                setMovieDescription(movieById);
            } catch (error) {
                toast.error('Oops! Something went wrong. Please try again later.', error);
            } finally {
                setIsLoading(false);
            }
        };
   
        detailsFilm();
    
    }, [movieId]);

    return (
        <div>
            <LinkBack to={backLink.current}><GoArrowLeft />Go back</LinkBack>           
            <MovieCard description={movieDescription} />
             {isLoading && <Loader />}           
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>          
        </div>);
};

