import 'dotenv/config';
import axios from 'axios';

const fetchMoviesData = async (type) => {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.error('Error: TMDB_API_KEY not found in .env file');
    return;
  }

  if (!type) {
    console.error('Error: Movie type is required');
    return;
  }

  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1&api_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
