function Sidebar({ isOpen, onClose }) {
    const categories = [
        { id: 1, name: 'Gênesis', icon: '📖' },
        { id: 2, name: 'Êxodo', icon: '🏃' },
        { id: 3, name: 'Levítico', icon: '⚖️' },
        { id: 4, name: 'Números', icon: '🔢' },
        { id: 5, name: 'Deuteronômio', icon: '📜' },
        { id: 6, name: 'Históricos', icon: '📚' },
        { id: 7, name: 'Poéticos', icon: '🎭' },
        { id: 8, name: 'Profetas Maiores', icon: '👑' },
        { id: 9, name: 'Profetas Menores', icon: '📯' },
        { id: 10, name: 'Evangelhos', icon: '✝️' },
        { id: 11, name: 'Atos', icon: '🕊️' },
        { id: 12, name: 'Epístolas', icon: '✉️' },
        { id: 13, name: 'Apocalipse', icon: '🌟' }
    ];

    const handleCategoryClick = (category) => {
        try {
            window.location.href = `/category/${category.name.toLowerCase()}`;
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div 
            className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-slate-800 text-white transition-transform duration-300 ease-in-out z-30`}
            data-name="sidebar"
        >
            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-amber-300">Categorias</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white"
                        data-name="close-sidebar"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul className="space-y-2">
                        {categories.map(category => (
                            <li key={category.id}>
                                <button
                                    onClick={() => handleCategoryClick(category)}
                                    className="w-full flex items-center space-x-3 px-4 py-2 rounded hover:bg-slate-700 transition-colors"
                                    data-name={`category-${category.name.toLowerCase()}`}
                                >
                                    <span>{category.icon}</span>
                                    <span>{category.name}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
}
