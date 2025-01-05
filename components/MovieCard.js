function MovieCard({ movie }) {
    const handleWatch = (movieId) => {
        try {
            alert(`Implementar reprodução do filme ID: ${movieId}`);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div className="movie-card bg-slate-800 rounded-lg overflow-hidden shadow-lg" data-name="movie-card">
            <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full h-64 object-cover cursor-pointer"
                onClick={() => handleWatch(movie.id)}
                data-name="movie-poster"
            />
            <div className="p-4">
                <h3 
                    className="text-lg font-semibold mb-2 cursor-pointer hover:text-amber-300" 
                    onClick={() => handleWatch(movie.id)}
                    data-name="movie-title"
                >
                    {movie.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4" data-name="movie-description">
                    {movie.description}
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-amber-300" data-name="movie-category">{movie.category}</span>
                    <button 
                        className="px-4 py-2 bg-amber-500 text-slate-900 rounded hover:bg-amber-400"
                        onClick={() => handleWatch(movie.id)}
                        data-name="watch-button"
                    >
                        Assistir
                    </button>
                </div>
            </div>
        </div>
    );
}
