import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { fetchMovies } from "components/Services/Api";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isLoading, setIsLoading] = useState(false);
    const currentQuery = searchParams.get('query') ?? '';

    useEffect(() => {       
        
        if (!currentQuery) return;        
        
        const searchFilms = async () => {  
            
            setIsLoading(true);           

            try {
                const moviesQuery = await fetchMovies(currentQuery);
                if (moviesQuery.length === 0) {
                    toast.error('Sorry, there are no movies matching your search query. Please try again.');
                    return;
                }
                setMovies(moviesQuery);
            } catch (error) {
               toast.error('Oops! Something went wrong. Please try again later.');                 
            } finally {
                setIsLoading(false);
            }
        };
   
        searchFilms();
    
    }, [currentQuery]);  

 return (
    <>
         <Searchbar setSearchParams={setSearchParams} />
         {isLoading && <Loader />}
         {movies.length > 0 && <MoviesList movies={movies} />}
    </>
    )
};