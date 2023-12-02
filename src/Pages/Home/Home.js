import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { HomeDiv } from "./Home.styled";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "components/Services/Api";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        setIsLoading(true);
        setError(false);
        
        const getFilms = async () => {
           
            try {
                const moviesTrening = await fetchTrendingMovies();
                setMovies(moviesTrening);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };
   
        getFilms();
    
    }, []);  

    return (
        <HomeDiv>
            {isLoading && <Loader />}
            {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
             <h2>Trending today</h2>
            {movies.length > 0 && <MoviesList movies={movies} />}     
    </HomeDiv>
  );
};