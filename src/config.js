// API Credentials
export const MOVIEDB_URL = 'https://api.themoviedb.org/4';
export const MOVIEDB_ACCOUNT_ID = '5ae3ae8392514149cd0059c4';
export const MOVIEDB_API_KEY = '4afa466518cee9e68158788ef8d66764';
export const MOVIEDB_API_TOKEN =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWZhNDY2NTE4Y2VlOWU2ODE1ODc4OGVmOGQ2Njc2NCIsInN1YiI6IjVhZTNhZTgzOTI1MTQxNDljZDAwNTljNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qVS1dt-w4ttUmJmTdw5Wy9jP2cBM_DyY2diPSaYOCFs';
export const MOVIEDB_POSTER_PATH = 'http://image.tmdb.org/t/p/w500';

// API Calls
export const API_FAVORITE_TV = `${MOVIEDB_URL}/account/${MOVIEDB_ACCOUNT_ID}/tv/favorites`;
export const API_FAVORITE_MOVIES = `${MOVIEDB_URL}/account/${MOVIEDB_ACCOUNT_ID}/movie/favorites`;
