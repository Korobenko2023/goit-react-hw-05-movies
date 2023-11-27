import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { HomeDiv } from "./Home.styled";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "components/Services/Api";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getFilms = async () => {

            setIsLoading(true);
            try {
                const moviesTrening = await fetchTrendingMovies();
                if (moviesTrening.length === 0) {
                    toast.error('Oops! Something went wrong. Please try again later.');
                    return;
                }
                setMovies(moviesTrening);
            } catch (error) {
                toast.error('Oops! Something went wrong. Please try again later.', error);
            } finally {
                setIsLoading(false);
            }
        };
   
        getFilms();
    
    }, []);  

    return (
    <HomeDiv>
      <h2>Trending today</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader/>}
    </HomeDiv>
  );

};