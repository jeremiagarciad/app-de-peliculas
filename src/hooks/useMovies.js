import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  APIPopularMovies,
  now_playing,
  MoviesTOPRated,
  MoviesUPComing,
} from './../api/movieDB';

const interfaceRequests = {
  now_playing: now_playing,
  popular: APIPopularMovies,
  topRated: MoviesTOPRated,
  upcoming: MoviesUPComing,
};

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState(interfaceRequests);

  const getData = async (url1, url2, url3, url4) => {
    try {
      const nowPlayingPromise = axios.get(url1);
      const popularPromise = axios.get(url2);
      const toRatedPromise = axios.get(url3);
      const upcomingPromise = axios.get(url4);

      const resp = await Promise.all([
        nowPlayingPromise,
        popularPromise,
        toRatedPromise,
        upcomingPromise,
      ]);

      setMoviesState({
        now_playing: resp[0].data.results,
        popular: resp[1].data.results,
        topRated: resp[2].data.results,
        upcoming: resp[3].data.results,
      });

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData(
      APIPopularMovies,
      now_playing,
      MoviesTOPRated,
      MoviesUPComing,
    );
  }, []);

  return {
    ...moviesState,
    isLoading,
  };
};
