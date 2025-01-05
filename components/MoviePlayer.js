function MoviePlayer({ movieId, onClose }) {
    const [movie, setMovie] = React.useState(null);

    React.useEffect(() => {
        try {
            const movieData = movies.find(m => m.id === movieId);
            setMovie(movieData);
        } catch (error) {
            reportError(error);
        }
    }, [movieId]);

    if (!movie) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                <div className="text-white">Carregando...</div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center" data-name="movie-player">
            <div className="bg-slate-800 p-4 rounded-lg max-w-4xl w-full mx-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">{movie.title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                    >
                        Fechar
                    </button>
                </div>
                <div className="aspect-w-16 aspect-h-9 bg-black mb-4">
                    <video 
                        controls 
                        className="w-full h-full"
                        src={movie.videoUrl}
                    >
                        Seu navegador não suporta o elemento de vídeo.
                    </video>
                </div>
                <div className="text-gray-300">
                    <h3 className="font-semibold mb-2">Sobre o Filme</h3>
                    <p>{movie.description}</p>
                </div>
            </div>
        </div>
    );
}
