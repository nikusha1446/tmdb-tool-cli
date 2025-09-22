# TMDB CLI Tool

A simple command-line interface to fetch and display movie information from The Movie Database (TMDB) API.

## ✨ Features

- **Now Playing** - Current movies in theaters
- **Popular** - Most popular movies
- **Top Rated** - Highest rated movies
- **Upcoming** - Movies coming soon

## 📋 Prerequisites

- Node.js (version 14 or higher)
- TMDB API Key (free registration required)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nikusha1446/tmdb-tool-cli.git
cd tmdb-tool-cli
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
TMDB_API_KEY=your_api_key_here
```

## 🔑 Getting Your TMDB API Key

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create a free account
3. Go to Settings → API
4. Copy your **API Key**
5. Paste it into your `.env` file

## 🚀 Usage

Run the CLI tool with the `--type` option:

```bash
# Get now playing movies
node index.js --type playing

# Get popular movies
node index.js --type popular

# Get top rated movies  
node index.js --type top

# Get upcoming movies
node index.js --type upcoming
```

## 💡 Example Output

```
 20 Movies Found

 1. Demon Slayer: Kimetsu no Yaiba Infinity Castle
    Year: 2025 | ⭐ 7.7/10 | 🔥 745 popularity
    The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro, Nezuko, and the ...

 2. Weapons  
    Year: 2025 | ⭐ 7.4/10 | 🔥 299 popularity
    Paranormal investigators Ed and Lorraine Warren take on one last terrifying case involving...
```

## 🛠️ Dependencies

- **axios** - HTTP client for API requests
- **commander** - Command-line interface framework
- **dotenv** - Environment variable loader

## 📄 License

ISC
