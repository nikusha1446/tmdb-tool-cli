import 'dotenv/config';
import axios from 'axios';
import { Command } from 'commander';

const program = new Command();

const typeMapping = {
  playing: 'now_playing',
  popular: 'popular',
  top: 'top_rated',
  upcoming: 'upcoming',
};

const fetchMoviesData = async (type) => {
  const apiKey = process.env.TMDB_API_KEY;

  if (!apiKey) {
    console.error('Error: TMDB_API_KEY not found in .env file');
    process.exit(1);
  }

  const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1&api_key=${apiKey}`;
  try {
    const response = await axios.get(url);
    formatMovies(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
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

program
  .name('tmdb-app-cli')
  .description('Fetch movies from The Movie Database')
  .requiredOption(
    '--type <type>',
    'type of movies to fetch (playing, popular, top, upcoming'
  )
  .action((options) => {
    if (!['playing', 'popular', 'top', 'upcoming'].includes(options.type)) {
      console.log('Error: --type must be playing, popular, top or upcoming');
      process.exit(1);
    }

    fetchMoviesData(typeMapping[options.type]);
  });

program.parse();
