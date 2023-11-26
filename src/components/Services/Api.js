import axios from "axios";
 axios.defaults.baseURL = 'https://api.themoviedb.org/3';
 const API_KEY = 'da8b391557d6a67d7aa1304dede81c1a';
export const fetchTrendingMovies = async () => {   
    try {
        const params = {
            api_key: API_KEY,
            language: 'en-US',
        };
        const { data } = await axios.get(`/trending/all/day`, { params });
    return data.results;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovies = async (query) => {   
    try {
        const params = {
            api_key: API_KEY,
            query: query,
            include_adult: false,
            language: 'en-US',
            page: 1,
        };
        const { data } = await axios.get(`/search/movie`, { params });
   return data.results;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovieDetails = async (movieId) => {
    try {
        const params = {
            api_key: API_KEY,
            language: 'en-US',
        };
        const { data } = await axios.get(`/movie/${movieId}`, { params });
        return data;
    } catch (error) {
        throw error;
    }
}

export const fetchMovieCast = async (movieId) => {   
    try {
        const params = {
            api_key: API_KEY,           
            language: 'en-US',
        };
        const { data } = await axios.get(`/movie/${movieId}/credits`, { params });
      return data.cast;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovieReviews = async (movieId) => {   
    try {
        const params = {
            api_key: API_KEY,           
            language: 'en-US',
            page: 1,
        };
        const { data } = await axios.get(`/movie/${movieId}/reviews`, { params });
     return data.results;
    } catch (error) {
        throw error;
    }   
}



