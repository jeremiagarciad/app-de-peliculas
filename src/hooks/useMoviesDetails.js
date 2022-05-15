import  axios  from 'axios';
import { useState, useEffect } from 'react';
import { ApiMovieDatails , CreditResponseCrew} from '../api/movieDB';



const initialState = {
    isLoading: true,
    movieCompleted: undefined,
    cast: []
}
// const movieId = `${427774}/credits`;
export const useMoviesDetails = (movieId) => {


    const [state, setState] = useState(initialState)


    const getMoviesDetails = async () => {

        const responseMoviefull      = axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`);
        const responseCreditsCrew    =  axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`);
    
        const [movieFull, movieCrew] = await Promise.all([responseMoviefull, responseCreditsCrew])

        setState({
            isLoading: false,
            movieCompleted: movieFull.data,
            cast: movieCrew.data.cast,
        })
    }


    useEffect(() => {
        getMoviesDetails()
    }, [])
    
    return {
        ...state
    }
}



