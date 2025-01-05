window.allMovies = [
    ...window.genesisMovies,
    ...window.exodusMovies,
    ...window.leviticusMovies,
    ...window.numbersMovies,
    ...window.deuteronomyMovies,
    ...window.joshuaMovies,
    ...window.judgesMovies,
    ...window.ruthMovies,
    ...window.firstSamuelMovies,
    ...window.secondSamuelMovies
];

window.categories = [
    {
        id: "genesis",
        name: "Gênesis",
        description: "O livro das origens",
        icon: "📖"
    },
    {
        id: "exodus",
        name: "Êxodo",
        description: "A libertação do povo",
        icon: "🏃"
    },
    // ... rest of categories remain the same
];

window.getMoviesByCategory = function(categoryId) {
    return window.allMovies.filter(movie => movie.category.toLowerCase() === categoryId);
};

window.getCategoryById = function(categoryId) {
    return window.categories.find(cat => cat.id === categoryId);
};

window.searchMovies = function(query) {
    const searchTerm = query.toLowerCase();
    return window.allMovies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.description.toLowerCase().includes(searchTerm) ||
        movie.category.toLowerCase().includes(searchTerm)
    );
};


