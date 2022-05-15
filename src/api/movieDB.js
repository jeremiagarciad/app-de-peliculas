import axios  from "axios";

export const APIPopularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`;

export const now_playing = `https://api.themoviedb.org/3/movie/now_playing?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`

export const MoviesTOPRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`

export const MoviesUPComing = `https://api.themoviedb.org/3/movie/upcoming?api_key=4b982050d0e82cda0dd3e62e3b4f0e1a&language=es-Es`;



// const movieDB = axios.create({
//     baseUrl: 'https://api.themoviedb.org/3/movie',
//     params: {
//         api_key: '4b982050d0e82cda0dd3e62e3b4f0e1a',
//         language: 'es-ES',
//     }
// })

// export default movieDB;