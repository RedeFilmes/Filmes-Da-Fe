function MovieCarousel({ title, movies }) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const itemsPerPage = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1;
    const totalPages = Math.ceil(movies.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    React.useEffect(() => {
        const handleResize = () => {
            const newItemsPerPage = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 3 : 1;
            setCurrentIndex(0);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="py-8" data-name="movie-carousel">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">{title}</h2>
                <div className="relative">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 p-2 rounded-full"
                        disabled={currentIndex === 0}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
                            }}
                        >
                            {movies.map((movie) => (
                                <div 
                                    key={movie.id}
                                    className="flex-none w-full md:w-1/3 lg:w-1/4 p-2"
                                >
                                    <MovieCard movie={movie} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-slate-800/80 p-2 rounded-full"
                        disabled={currentIndex === totalPages - 1}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
