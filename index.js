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
    formatMovies(response.data);
  } catch (error) {
    console.error(error);
  }
};

const formatMovies = (data) => {
  const movies = data.results;

  console.log('');
  console.log(`${movies.length} Movies Found`);
  console.log('');

  movies.forEach((movie, index) => {
    const rating = movie.vote_average.toFixed(1);
    const year = new Date(movie.release_date).getFullYear();
    const popularity = Math.round(movie.popularity);

    const movieNumber = `${index + 1}.`;
    const indent = movieNumber.length + 1;

    console.log(`${movieNumber} ${movie.title}`);
    console.log(
      `${''.padStart(
        indent
      )}Year: ${year} | ⭐ ${rating}/10 | 🔥 ${popularity} popularity`
    );
    console.log(`${''.padStart(indent)}${movie.overview.substring(0, 90)}...`);
    console.log('');
  });
};
