import { useState, useEffect } from 'react';
import  axios  from 'axios';
import { ApiMovieDatails } from '../api/movieDB';



const initialState = {
    isLoading: true,
    movieCompleted: undefined,
    cast: []
}
export const useMoviesDetails = (movieId, moviedCredits) => {

    const CreditResponseCrew = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`
    
   const [state, setState] = useState(initialState)
    // console.log(movieId, moviedCredits)
   const getMoviesDetails =  async (movieDetails, creditResp) => {

    try {
        const movieDetailsPromise =  axios.get(movieDetails)
        const castPromise =  axios.get(creditResp)
        
       const [movieDetailsResp, castPromiseResp] = await Promise.all([castPromise, movieDetailsPromise])

        // console.log(response.data.overview)
        setState({
            isLoading: false,
            movieCompleted: movieDetailsResp[0].data,
            cast: castPromiseResp[0].data.cast,

        })

        console.log(cast)
        
    } catch (error) {
        console.log(error)
    }
        // setState(response.data)
   }


   useEffect(() => {
       getMoviesDetails(ApiMovieDatails, CreditResponseCrew)
   }, [])

   return {
       ...state
   }
}
