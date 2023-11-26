import { Loader } from "components/Loader/Loader";
import { fetchMovieDetails } from "components/Services/Api";
import { Suspense, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { MovieCard } from "components/MovieCard/MovieCard";

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
                const { results } = await fetchMovieDetails(movieId);
               
                setMovieDescription(results);
            } catch (error) {
                toast.error('Oops! Something went wrong. Please try again later.', error);
            } finally {
                setIsLoading(false);
            }
        };
   
        detailsFilm();
    
    }, [movieId]);
    console.log(movieDescription)

    return (
        <div>
            <Link to={backLink.current}><GoArrowLeft />Go back</Link>           
            <MovieCard description={movieDescription} />
            {isLoading && <Loader />}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>          
        </div>);
};

