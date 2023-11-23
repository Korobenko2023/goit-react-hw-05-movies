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
        console.log(data);
     return data;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovies = async (keyword) => {   
    try {
        const params = {
            api_key: API_KEY,
            query: keyword,
            include_adult: false,
            language: 'en-US',
            page: 1,
        };
        const { data } = await axios.get(`/search/movie`, { params });
        console.log(data)
     return data;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovieDetails = async (movie_id) => {   
    try {
        const params = {
            api_key: API_KEY,           
            language: 'en-US',
        };
        const { data } = await axios.get(`/movie/${movie_id}`, { params });
        console.log(data)
     return data;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovieCredits = async (movie_id) => {   
    try {
        const params = {
            api_key: API_KEY,           
            language: 'en-US',
        };
        const { data } = await axios.get(`/movie/${movie_id}/credits`, { params });
        console.log(data)
     return data;
    } catch (error) {
        throw error;
    }   
}

export const fetchMovieReviews = async (movie_id) => {   
    try {
        const params = {
            api_key: API_KEY,           
            language: 'en-US',
            page: 1,
        };
        const { data } = await axios.get(`/movie/${movie_id}/reviews`, { params });
        console.log(data)
     return data;
    } catch (error) {
        throw error;
    }   
}



