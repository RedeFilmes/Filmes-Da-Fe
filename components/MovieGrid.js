function MovieGrid() {
    const [selectedMovie, setSelectedMovie] = React.useState(null);

    // Group movies by category
    const moviesByCategory = window.allMovies.reduce((acc, movie) => {
        if (!acc[movie.category]) {
            acc[movie.category] = [];
        }
        acc[movie.category].push(movie);
        return acc;
    }, {});

    return (
        <section className="py-8" data-name="movie-grid">
            {Object.entries(moviesByCategory).map(([category, categoryMovies]) => (
                <MovieCarousel 
                    key={category}
                    title={category}
                    movies={categoryMovies}
                />
            ))}
            
            {selectedMovie && (
                <MoviePlayer 
                    movieId={selectedMovie} 
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </section>
    );
}
