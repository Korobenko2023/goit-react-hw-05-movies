import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect, useState } from "react";
import { HomeDiv, HomeTitle } from "./Home.styled";
import toast from "react-hot-toast";
import { fetchTrendingMovies } from "components/Services/Api";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getFilms = async () => {

            setIsLoading(true);
            try {
                const { results } = await fetchTrendingMovies();
                if (results.length === 0) {
                    toast.error('Oops! Something went wrong. Please try again later.');
                    return;
                }
                setMovies([...results]);
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
      <HomeTitle>Trending today</HomeTitle>
      {movies.length > 0 && <MoviesList movies={movies} />}
      {isLoading && <Loader/>}
    </HomeDiv>
  );

};